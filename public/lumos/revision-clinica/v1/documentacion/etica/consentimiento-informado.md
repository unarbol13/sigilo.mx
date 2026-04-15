# Protocolo de Consentimiento Informado

## Principio
El consentimiento en Aurora es granular, revocable, e informado. La persona decide que comparte, con quien, y puede cambiar de opinion en cualquier momento.

## Consentimiento por tipo de usuario

### Adultos
Consentimiento directo. La persona acepta por si misma.

### Menores de edad (8-17 anos)
Requiere DOBLE consentimiento:
1. **Consentimiento del tutor legal:** El adulto responsable autoriza el uso de la app
2. **Asentimiento del menor:** El menor entiende (en lenguaje apropiado para su edad) que va a usar la app y acepta voluntariamente

Consideraciones especiales para menores:
- El tutor puede revocar el consentimiento en cualquier momento
- El menor tambien puede dejar de usar la app cuando quiera
- Si el menor tiene menos de 13 anos, el tutor debe estar presente durante la configuracion inicial
- Reporte obligatorio: si se detecta riesgo para el menor (abuso, violencia, ideacion suicida), existe obligacion legal de reportar a las autoridades correspondientes, independientemente del consentimiento

## Niveles de consentimiento

### Nivel 1: Uso de la app (obligatorio)
- Aceptacion de terminos basicos para usar la app
- No implica compartir datos con nadie externo
- Los datos permanecen cifrados en el dispositivo y en el servidor de la colectiva

### Nivel 2: Compartir datos operativos dentro de la colectiva
- Hallazgos, marcaciones de mapa, fichas
- Controlado por la coordinadora
- Se puede revocar (los datos dejan de ser visibles para otros miembros)
- Solo disponible para adultos con rol operativo

### Nivel 3: Compartir datos entre colectivas (futuro v2.0)
- Requiere autorizacion explicita de ambas coordinadoras
- Intercambio de datos, no acceso compartido
- Revocable por cualquiera de las dos partes

### Nivel 4: Compartir datos de experiencia personal para investigacion
- Consentimiento registro por registro (no "acepto todo")
- La persona lee cada entrada y decide si la comparte
- Anonimizacion completa antes de transmision
- Derecho a eliminar en cualquier momento, incluso despues de compartir
- Solo con aprobacion de comite de etica
- Para menores: requiere consentimiento del tutor + asentimiento del menor + aprobacion de comite de etica con protocolo especifico para menores

## Requisitos de implementacion
- El flujo de consentimiento debe ser claro y en lenguaje accesible
- Para menores: lenguaje adaptado a su grupo de edad
- No hay dark patterns (botones de "aceptar" mas grandes, colores que guien)
- El estado de consentimiento es visible y modificable en cualquier momento
- Revocar consentimiento es tan facil como otorgarlo
- El sistema debe distinguir entre consentimiento de tutor y asentimiento de menor
