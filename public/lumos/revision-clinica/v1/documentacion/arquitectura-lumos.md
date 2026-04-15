# Arquitectura Lumos (MVP)

**Propósito:** delta sobre [arquitectura.md](arquitectura.md) enfocado en el MVP de Lumos (Fase 1, acompañamiento psicosocial familiar). Lo que ya está en `arquitectura.md` se aplica sin repetirlo aquí. Este documento aterriza lo que el MVP agrega, cambia o pospone respecto de la arquitectura general (originalmente escrita para Aurora / colectivas).

**Estado:** borrador. Referenciar [decisiones-clinicas/](decisiones-clinicas/) para bloqueantes clínicos y [decisiones/](decisiones/) para ADRs técnicos.

---

## 1. Qué hereda de `arquitectura.md` sin cambios

- **Stack mobile:** Expo SDK 54+ con Expo Router v6, TypeScript strict, Nativewind, Zustand 5, expo-sqlite + SQLCipher, expo-crypto + react-native-keychain, expo-local-authentication.
- **Principios:** offline-first, cifrado AES-256 en dispositivo, borrado por destrucción de claves, camuflaje de bundle ID y nombre, biometría opcional.
- **Infraestructura:** Ryzen via Cloudflare Tunnel, Docker, Portainer, backups existentes. Subdominio nuevo: `lumos-api.tlanesi.mx` (o similar — ADR pendiente).
- **Backend general:** Supabase (Auth, Postgres con RLS, Storage) + FastAPI en Ryzen para lógica custom.

## 2. Qué cambia respecto de arquitectura.md

### 2.1. Unidad de aislamiento: **Familia**, no "Colectiva"

`arquitectura.md` asume que la unidad de aislamiento es la **colectiva de búsqueda** (ADR-003). Eso aplica a Aurora. En Lumos MVP, la unidad es la **familia**.

- `get_user_colectiva_id()` → `get_user_familia_id()` (mismo patrón RLS, cambia el referente).
- Cada familia es un silo: queries cross-familia **no existen**.
- La "colectiva" no desaparece — queda como metadato opcional ("esta familia está afiliada a Colectiva X") sin permisos derivados. En Fase 2 (Aurora) la colectiva vuelve a ser unidad operativa.

### 2.2. Capas activas en MVP

`arquitectura.md` habla de tres capas (operativa, tanatológica, fenomenológica). En MVP Lumos:
- **Capa 1 (operativa):** NO aplica. Toda la parte de mapas, hallazgos, brigadas queda para Aurora.
- **Capa 2 (psicosocial):** núcleo del MVP.
- **Capa 3 (investigación):** estructura de datos preparada desde ahora (es decisión de diseño inicial, no deuda técnica), pero **sin** superficie de usuario en MVP más allá de la escritura libre, que ya está cifrada y no identificable.

### 2.3. Rol principal: profesional externa vinculada, no coordinadora interna

Aurora tiene una "coordinadora" que administra la colectiva **desde dentro** de la app. Lumos tiene una **profesional** (tanatóloga, psicóloga) que:
- No es parte de la familia — es externa.
- Se vincula a una familia vía **código profesional** (mecanismo en §5).
- Tiene su propia app / web de profesional (fuera de alcance de este doc — se trata en ADR-010 futuro).
- En el MVP **no hay superficie de coordinadora dentro de la app de la familia**. La familia ve a su profesional como un contacto, no como admin.

## 3. Modelo de datos (alto nivel, MVP)

Entidades centrales:

| Entidad | Ámbito | Identificable | Notas |
|---|---|---|---|
| `Familia` | Dispositivo + servidor | Sí (mínimo) | Una familia por cuenta. Apodo opcional. |
| `Perfil` | Dispositivo + servidor | Sí (rango de edad, vínculo) | 1..N por familia. Adulto / Adolescente / Niño. |
| `ProfesionalVinculada` | Dispositivo + servidor | Sí (cédula, nombre) | 1 por familia en MVP. Verificada por backend. |
| `CodigoInvitacion` | Servidor | Sí (vinculado a profesional) | Un uso, expira a los 14 días. |
| `Modulo` | Bundle + actualización remota | No (contenido estático) | Versionado. Multi-edad (tres variantes por módulo). |
| `Prescripcion` | Dispositivo + servidor | Sí (quién lo recibe) | La profesional marca módulos; la familia los ve en Home. |
| `EntradaEscritura` | Solo dispositivo | **No sale nunca** | Cifrada con clave derivada del perfil. Ni backend ni profesional la ven. |
| `SenalSilenciosa` | Dispositivo → servidor → profesional | Mínimo (familia_id, perfil_id, timestamp, marcador opcional) | Metadato operativo, no contenido. Ver [DC-002](decisiones-clinicas/DC-002-senal-silenciosa.md). |
| `EventoCrisis` | Solo dispositivo (MVP) | No (flag local) | Activa protocolo local. Ver [DC-001](decisiones-clinicas/DC-001-analisis-escritura-crisis.md). |
| `DatoAnonimoCapa3` | Dispositivo → pipeline de anonimización → servidor | **No** | Aggregados sin vincular a identidad. Solo si el usuario da consentimiento explícito para investigación. |

### Separación identificable / no identificable

```
Identificable (con familia_id / perfil_id)     No identificable (sin claves)
─────────────────────────────                   ─────────────────────────────
Familia, Perfil                                 EntradaEscritura (solo device)
ProfesionalVinculada                            DatoAnonimoCapa3 (post-pipeline)
Prescripcion
SenalSilenciosa (metadata)
```

Nunca se cruzan sin:
1. consentimiento explícito (registro por registro para Capa 3);
2. pipeline de anonimización (hash irreversible + ruido + revisión humana);
3. aprobación de comité de ética (para cualquier uso externo).

## 4. MVP: ¿cuánto puede ser 100% on-device?

Propuesta: **el MVP corre en 90% on-device**, con servidor solo para lo que *necesita* ser remoto.

| Función | On-device | Servidor |
|---|---|---|
| Contenido psicoeducativo | Bundle + updates | Distribuye updates firmados |
| Escritura libre | Cifrada local | — (nunca sale) |
| Prescripción de módulos | Cache local | Fuente de verdad (la genera la profesional) |
| Señal silenciosa | Se origina local | Ruta al dispositivo de la profesional |
| Código profesional | Verifica local + servidor | Fuente de verdad |
| Directorio de profesionales | Cache local | Fuente de verdad |
| Detección de crisis | 100% local | Nunca se envía contenido al servidor |
| Recursos de crisis | Bundle | Updates (números, líneas) |

Implicación: el primer uso requiere conexión para el código profesional y la primera descarga de contenido. Después, la app funciona sin internet para todo lo crítico.

## 5. Flujo de código profesional (alto nivel)

ADR-008 cubrirá el detalle criptográfico. Aquí el flujo:

1. La profesional genera un código desde su app / web de profesional (`POST /codigos`).
2. El servidor devuelve: `codigo` (6 caracteres legibles) + `token` (blob opaco de verificación).
3. La profesional le comparte el código a la familia (en persona, WhatsApp, como prefiera).
4. La familia lo ingresa en onboarding. La app lo envía al servidor (`POST /vincular`).
5. El servidor valida, marca el código como usado, y devuelve el perfil de la profesional + una clave de sincronización para la relación familia ↔ profesional.
6. La familia y la profesional quedan vinculadas. La profesional puede prescribir módulos; la familia puede enviar señales silenciosas.

Nota: **el código no autentica a la familia** — autentica la vinculación. La identidad de la familia es el dispositivo + su seudónimo, no una cuenta con email.

## 6. Perfiles múltiples en un dispositivo compartido

Lumos asume que una familia puede compartir dispositivo (la realidad en muchas familias mexicanas es un solo smartphone). ADR-007 cubrirá el detalle. Requisitos:

- Cada perfil tiene su propia clave de cifrado derivada de un PIN o patrón corto del perfil (no de la familia entera).
- Cambio de perfil requiere autenticación del perfil activo.
- La escritura libre de un perfil es **invisible** para otros perfiles, incluidos los tutores. La única excepción es el evento de crisis que, según [DC-001](decisiones-clinicas/DC-001-analisis-escritura-crisis.md), puede notificar al tutor sin revelar contenido.
- Los menores pueden tener acceso reforzado: PIN propio + tutor como co-firma para ciertas acciones (borrar cuenta, desvincular profesional).

## 7. Distribución del contenido psicoeducativo

- Contenido estático (texto, audio, ilustraciones) se distribuye como **bundle firmado** en updates de la app + descarga incremental desde Supabase Storage.
- Versión por edad: cada módulo tiene tres variantes (adulto, adolescente, niño). El perfil activo determina qué se carga.
- El contenido puede actualizarse sin actualizar la app (vía manifiesto firmado que el cliente verifica antes de reemplazar).
- Los módulos de Capa 3 (diario fenomenológico interno) están en el bundle pero **gated** por un flag que nunca está activo en MVP.

## 8. Camuflaje

- Bundle ID y nombre de la app son **configurables en build**.
- En App Store se publica como "Lumos" para el canal público.
- Builds especiales para colectivas de alto riesgo pueden usar nombre/ícono genérico (ej. "Notas", "Lista de compras") — se distribuyen por TestFlight o enterprise, no por store público.
- iOS soporta iconos alternos sin reinstalar; el usuario puede cambiar el ícono desde Ajustes de la app (ADR-011 futuro).

## 9. Borrado de emergencia

- Gesto: tres toques en el logo de Lumos + confirmación con biometría / PIN.
- Acción: destrucción de claves de cifrado en Keychain / Secure Enclave.
- Resultado: todos los datos locales quedan irrecuperables (ciphertext sin clave).
- Servidor recibe señal asíncrona (cuando haya red) para borrar datos del servidor — no es precondición del borrado local.

## 10. Dependencias de decisiones clínicas

Esta arquitectura tiene puntos **bloqueados** por decisiones de la DCC:

| Dependencia | Decisión | Bloquea |
|---|---|---|
| Qué analiza la app en escritura libre | [DC-001](decisiones-clinicas/DC-001-analisis-escritura-crisis.md) | ADR-009, schema de `EventoCrisis` |
| Contenido de la señal silenciosa | [DC-002](decisiones-clinicas/DC-002-senal-silenciosa.md) | Schema de `SenalSilenciosa`, API |
| Copy de módulos | [DC-003](decisiones-clinicas/DC-003-experiencias-nombrar.md) y siguientes | Bundle de contenido |
| Consentimiento de tutor | [DC-004](decisiones-clinicas/DC-004-checkboxes-tutor.md) | Schema de `Perfil` (flags de consentimiento) |

## 11. ADRs técnicos pendientes

- **ADR-007** — Modelo de familia y perfiles múltiples (schema + cifrado por perfil).
- **ADR-008** — Mecanismo criptográfico de código profesional.
- **ADR-009** — Detección de crisis en dispositivo (depende de DC-001).
- **ADR-010** — App / web de profesional (fuera del scope de la app de familia).
- **ADR-011** — Camuflaje iOS (iconos alternos, nombre dinámico).

## 12. Qué NO se diseña en el MVP

Para evitar scope creep:
- Sincronización entre dispositivos de una misma familia (v2).
- Colaboración entre familias o entre colectivas (v2 — es Aurora).
- Contenido generado por IA (fuera del MVP — todo el contenido clínico es humano y validado).
- Análisis automático de patrones en escritura libre más allá de detección de crisis.
- Pagos in-app o marketplace de profesionales con cobro directo.
