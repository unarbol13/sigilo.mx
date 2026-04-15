# Arquitectura de Aurora

## Vision general

Aurora es una aplicacion movil iOS con arquitectura offline-first, cifrado end-to-end, y separacion estricta de datos entre colectivas.

## Principios arquitectonicos

### 1. Offline-first
La app debe ser completamente funcional sin conexion a internet. La sincronizacion ocurre oportunisticamente cuando hay conexion. Conflictos de sincronizacion se resuelven con last-write-wins para datos operativos y merge para datos colaborativos (mapas).

### 2. Cifrado por defecto
Todo dato se cifra en el dispositivo con AES-256 antes de persistirse o transmitirse. Las claves se derivan del dispositivo y del codigo de invitacion. El servidor nunca ve datos en texto plano.

### 3. Aislamiento de colectivas
Cada colectiva opera en un silo de datos completamente independiente. No existen queries cross-colectiva. La interoperabilidad entre colectivas requiere autorizacion explicita de ambas coordinadoras y se implementa como intercambio de datos, no como acceso compartido.

### 4. Separacion por capas
Las tres capas (operativa, tanatologica, fenomenologica) tienen modelos de acceso diferentes. Un profesional de Capa 2 nunca accede a datos de Capa 1. Un investigador de Capa 3 solo ve datos anonimizados.

## Stack tecnologico

### Mobile — React Native + Expo
- **Framework:** Expo SDK 54+ con Expo Router v6
- **Lenguaje:** TypeScript strict
- **UI:** Nativewind (Tailwind para RN) — consistente con La Cuenta y CRM Bares
- **Estado:** Zustand 5 — ya usado en La Cuenta, Vitrina, Municipios
- **DB local:** SQLite cifrado (expo-sqlite + sqlcipher) — offline-first como PRISMA 360
- **Maps:** react-native-maps + tiles offline pre-descargados
- **Location:** expo-location (hook reutilizable de CRM Bares)
- **Cifrado:** expo-crypto + react-native-keychain (AES-256, claves en Keychain/Secure Enclave)
- **Biometria:** expo-local-authentication (Face ID / Touch ID)
- **Camara:** expo-camera + expo-image-picker (preservando EXIF para valor probatorio)
- **Haptics:** expo-haptics (feedback tactil en acciones criticas)

**Justificacion:** Omar tiene 3 apps publicadas con este stack. La velocidad de desarrollo y la familiaridad superan las ventajas teoricas de Swift nativo. Expo tiene modulos nativos suficientes para cifrado, biometria, y acceso offline.

### Backend — Supabase + FastAPI en Ryzen
- **Auth:** Supabase Auth (email + codigo de invitacion como verificacion adicional)
- **DB:** Supabase PostgreSQL con RLS agresivo por colectiva_id (patron de CRM Bares: get_user_colectiva_id())
- **Storage:** Supabase Storage cifrado para fotos de hallazgos
- **Realtime:** Supabase Realtime (sync cuando hay conexion)
- **API custom:** FastAPI en Ryzen para logica que Supabase no cubre:
  - Generacion de codigos de invitacion
  - Pipeline de anonimizacion (Capa 3)
  - Exportacion formato evidencia (PDF con metadatos criptograficos)
- **Patron:** Reutilizar estructura de BSR_STORE backend (SQLAlchemy, Alembic, PyJWT, bcrypt)

### Infraestructura — Ryzen via Cloudflare Tunnel
- **Servidor:** Ryzen existente (100.85.40.20 via Tailscale)
- **Exposicion:** Nuevo subdominio en Cloudflare Tunnel (ej: aurora-api.prisma360solutions.com)
- **Docker:** Contenedor para API FastAPI (patron BSR_STORE)
- **DB:** PostgreSQL en Ryzen para datos que requieren mas control que Supabase
- **Backup:** Cron job diario (patron existente de Ryzen)
- **Monitoring:** Portainer (ya instalado puerto 9000)

### Seguridad — Capas multiples
- **Transporte:** Cloudflare Tunnel (TLS automatico, sin puertos expuestos)
- **Auth:** Supabase Auth + codigo de invitacion + biometria opcional
- **DB:** RLS por colectiva_id en TODA tabla (patron CRM Bares)
- **Local:** SQLite cifrado con SQLCipher
- **Claves:** Keychain / Secure Enclave (nunca en texto plano)
- **Borrado:** Destruir claves = datos irrecuperables (no necesita borrar archivos)
- **Camuflaje:** Bundle ID y nombre de app configurables

## Recursos reutilizables del ecosistema

| Recurso | Origen | Uso en Aurora |
|---------|--------|---------------|
| RLS por entidad (get_user_bar_id) | CRM Bares | get_user_colectiva_id() para aislamiento |
| RBAC middleware | Sigilo.mx | Roles: coordinadora, miembro, observador, profesional, investigador |
| JWT + bcrypt utilities | BSR_STORE backend | Auth en API FastAPI |
| expo-location hook | CRM Bares | GPS para hallazgos (NO tiempo real) |
| SQLite local-first | PRISMA 360 | Persistencia offline cifrada |
| Cloudflare Tunnel config | Ryzen existente | Nuevo subdominio para Aurora API |
| Docker Compose pattern | BSR_STORE | Contenedor para Aurora API |
| Rate limiting | Crowdfounding | Proteccion de endpoints publicos |
| Input sanitization | Crowdfounding | Sanitizar texto del diario |
| Claude API integration | Sigilo.mx | Futuro: analisis de datos anonimizados Capa 3 |

## Diagramas

### Flujo de datos simplificado
```
[Dispositivo]                          [Servidor]
 App (Expo)                             Ryzen
 ├── SQLite cifrado (SQLCipher)        ├── Supabase PostgreSQL (RLS)
 ├── Keychain (claves)                 ├── FastAPI (logica custom)
 ├── Fotos cifradas localmente         ├── Supabase Storage (fotos)
 └── Sync engine ──────────────────────└── Cloudflare Tunnel
      (oportunista, cuando hay red)
```

### Aislamiento de colectivas
```
Colectiva A                    Colectiva B
├── Datos operativos A         ├── Datos operativos B
├── Miembros A                 ├── Miembros B
└── Hallazgos A                └── Hallazgos B
     │                              │
     └──── RLS: colectiva_id ───────┘
           NUNCA se cruzan
```

## Decisiones de arquitectura

Todas las decisiones significativas se documentan como ADRs en `documentacion/decisiones/`.
