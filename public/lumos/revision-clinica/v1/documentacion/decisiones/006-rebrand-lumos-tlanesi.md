# ADR-006: Rebrand — Lumos, Aurora, Tlanesi

## Estado
Aceptado (7 abril 2026)

## Decisiones

### Nombres
- **Lumos** = App de acompañamiento psicosocial (MVP, Fase 1). Referencia al hechizo de luz de Harry Potter.
- **Aurora** = Herramientas operativas para colectivas de búsqueda (Fase 2). El nombre original del proyecto se reserva para la expansión.
- **Tlanesi A.C.** = Asociación civil paraguas para todos los proyectos de civic tech. En proceso de constitución.
- **Sigilo.mx** = Estudio tecnológico comercial. Separado de Tlanesi.

### Arquitectura de datos
Separación estricta entre datos identificables y datos de investigación desde el diseño inicial. No es deuda técnica posterior — es activo de credibilidad ante fondos y comités de ética.

### Equipo
La tanatóloga especializada en infancias recibe el título formal de "Directora de Contenido Clínico".

## Razones
- Lumos es más accesible y memorable que Aurora para una app de acompañamiento familiar
- Separar el producto amigable (Lumos) del técnico-operativo (Aurora) permite comunicar cada uno a su audiencia correcta
- Tlanesi A.C. desbloquea fondos que requieren organización constituida
- La separación de datos es un requisito para cualquier comité de ética futuro

## Consecuencias
- Toda documentación, propuestas, y comunicación deben usar "Lumos" para el MVP
- "Aurora" solo se menciona como Fase 2 o en contexto interno
- Directorio raíz renombrado de `aurora/` a `lumos/` (completado)
- Los PPTX de propuesta ya usan el nombre Lumos
