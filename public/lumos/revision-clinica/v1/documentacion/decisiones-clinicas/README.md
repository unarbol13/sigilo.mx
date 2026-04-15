# Decisiones Clínicas

Registro de las decisiones que afectan contenido, flujo terapéutico, protocolos y cualquier pieza de la app que constituya intervención clínica. Están separadas de los ADRs técnicos porque las valida la **Directora de Contenido Clínico (DCC)**, no el equipo de producto.

## Por qué un sistema aparte

- Permite a la DCC revisar y responder sin tocar decisiones técnicas.
- Crea trazabilidad para comités de ética y fondos (UNICEF, MIT Solve, CEAIV).
- Evita que el equipo de producto tome decisiones clínicas por omisión.

## Formato

Cada decisión se nombra `DC-###-nombre-corto.md`. Estados posibles:

| Estado | Significado |
|---|---|
| `propuesta` | El equipo de producto plantea la pregunta y recomendación. |
| `pendiente-dcc` | Esperando respuesta de la DCC. |
| `en-discusion` | La DCC pidió más contexto u opciones. |
| `aceptada` | Validada por la DCC. Se implementa. |
| `rechazada` | La DCC la descartó. Se documenta la alternativa. |
| `revisitar` | Aceptada provisionalmente pero con compromiso de revisar. |

Cada decisión tiene:
- **Contexto** — por qué surge.
- **Pregunta** — concreta, respondible.
- **Opciones** — A/B/C con pros-contras.
- **Recomendación del equipo** — sin ser dogmáticos.
- **Respuesta de la DCC** — se llena cuando responde.
- **Decisión final** + **consecuencias** — se llena al cerrar.

## Proceso

1. El equipo de producto detecta una pregunta clínica.
2. Redacta la decisión en estado `propuesta`.
3. La envía a la DCC como `pendiente-dcc`.
4. La DCC responde (texto corto, audio, o sesión). Se transcribe en la sección "Respuesta".
5. Se cierra con estado `aceptada`, `rechazada` o `revisitar`.
6. Si afecta mockups o código, se abre issue o actualización en los artefactos correspondientes.

## Diferencia con ADR técnicos

- **ADR técnico** (`decisiones/`): stack, cifrado, DB, protocolos de red. Los decide el tech lead.
- **Decisión clínica** (`decisiones-clinicas/`): qué contenido, qué lenguaje, qué intervención, cuándo escalar, cómo nombrar el dolor. Las decide la DCC.

Cuando una decisión técnica tiene implicación clínica (ej. qué detectar en escritura libre), **se parte en dos**: un DC para la DCC y un ADR técnico que la implementa.

## Índice de decisiones

| ID | Título | Estado | Bloquea |
|---|---|---|---|
| [DC-001](DC-001-analisis-escritura-crisis.md) | Análisis de escritura libre para detección de crisis | pendiente-dcc | ADR-009, mockup 05 |
| [DC-002](DC-002-senal-silenciosa.md) | Señal silenciosa — alcance y copy | pendiente-dcc | mockups 04, 06 |
| [DC-003](DC-003-experiencias-nombrar.md) | Copy de "experiencias comunes" en módulo Nombrar | pendiente-dcc | mockup 03 |
| [DC-004](DC-004-checkboxes-tutor.md) | Consentimiento del tutor — cantidad y lenguaje | pendiente-dcc | mockup 01 (6a) |

## En cola (capturar cuando se aborden)

Preguntas abiertas que vienen de [../propuesta-clinica-v1.md](../propuesta-clinica-v1.md) §9 y que todavía no tienen DC redactada:

- ¿Los 6 estados fenomenológicos son suficientes? ¿Falta *culpa del superviviente*, *roles reconfigurados dentro de la familia*?
- Instrumento de asentimiento para menores — ¿usar el de Boss adaptado, crear uno propio, usar el de la colectiva aliada?
- Recursos de crisis específicos de Guanajuato — contactos directos en CEAIV y Plataforma por la Paz.
- Material propio de la DCC (ejercicios, bibliografía, grabaciones) que quiera integrar desde ya.
- Rituales familiares — Boss les da peso central. ¿Cómo los aterrizamos en contenido de app sin volverlos prescriptivos?
