---
id: DC-004
titulo: Consentimiento del tutor — cantidad y lenguaje
estado: pendiente-dcc
fecha-propuesta: 2026-04-14
bloquea: mockup 01-onboarding (paso 6a)
---

# DC-004 — Consentimiento del tutor: cantidad y lenguaje

## Contexto

El mockup de onboarding (paso 6a, [01-onboarding.html](../../mockups/v1/01-onboarding.html)) presenta al tutor cuatro checkboxes que debe marcar antes de continuar, cuando la app se va a usar con un menor:

1. Autorizo que use Lumos con el contenido adaptado a su edad.
2. Entiendo que su escritura dentro de la app es privada y cifrada — ni yo ni Lumos podemos leerla.
3. Entiendo que si la app detecta señales de riesgo grave, se me notificará y se contactará a la profesional.
4. Puedo retirar este consentimiento y eliminar todos los datos en cualquier momento.

El marco legal mexicano (LGPDPPSO, protección de datos de menores) y estándares internacionales (UNICEF) exigen consentimiento **informado** y **granular**. Cuatro checkboxes cumplen, pero generan fricción en un momento de alta carga emocional: una madre o padre agotado a las 11 de la noche, después de una jornada de búsqueda.

Al mismo tiempo, reducir la fricción no puede ser a costa de la comprensión. Consentir sin leer es un consentimiento frágil legal y éticamente.

## Pregunta

¿Cómo equilibramos comprensión real del tutor (respeto a su autonomía y al marco legal de protección de menores) con baja fricción en un momento emocionalmente costoso?

## Opciones

### Opción A — Mantener los cuatro
Acepta la fricción como precio de comprensión. Cada checkbox es una afirmación distinta y significativa.

- **Pro:** máxima transparencia y trazabilidad legal.
- **Contra:** mayor abandono en onboarding. Riesgo de que el tutor marque sin leer.

### Opción B — Consolidar en uno solo + expandibles
Un checkbox resumen ("He leído y entiendo estas cuatro condiciones") + los cuatro items quedan visibles como texto expandible o tarjetas desplegables. El tutor puede leer detalle si quiere; la app registra qué secciones expandió.

- **Pro:** reduce fricción.
- **Contra:** en la práctica nadie expande. Equivale a un consentimiento genérico.

### Opción C — Tres checkboxes en lugar de cuatro
Fusionar 2 y 3: "Entiendo que la escritura del menor es privada, y que la app solo avisa a mí y a la profesional si detecta riesgo grave." Quedan: contenido adaptado / privacidad y detección / derecho a retirar.

- **Pro:** balance razonable.
- **Contra:** sigue habiendo tres pasos.

### Opción D — Formato de lectura obligada + un solo botón
Eliminamos checkboxes. Se muestra un texto corto, claro, con los cuatro puntos. Debajo, un solo botón "Acepto y continúo". El tutor **tiene que** haber hecho scroll hasta el final para que el botón se habilite. El texto va acompañado de un **audio opcional de 45 segundos** que lee lo mismo, para quienes prefieren escuchar.

- **Pro:** fricción mínima; mantiene comprensión; accesible para lectura baja.
- **Contra:** legalmente menos granular. Requiere verificación con abogada de protección de datos.

### Opción E — Proceso en dos tiempos
En onboarding, solo lo esencial (un checkbox: "autorizo el uso por el menor"). El resto se presenta la primera vez que el menor intenta usar cada función relevante (ej. escritura libre detecta: "Antes de que escriba, algo que usted debe saber como tutor"). Consentimiento contextual.

- **Pro:** cada consentimiento aparece cuando tiene sentido, no en bloque.
- **Contra:** aumenta complejidad del código y crea oportunidades para bugs que resulten en un menor usando una función sin que el tutor haya consentido.

## Recomendación del equipo

**Opción D + validación legal.** La experiencia de otros productos dirigidos a familias (UNICEF, Koko) apunta a que consentimiento granular con checkboxes múltiples no mejora la comprensión real — la mejora está en la **claridad del texto** y en **opciones de accesibilidad** (audio, alto contraste, idioma simple).

Antes de implementar D, necesitamos:
1. Validación legal con abogada especializada en LGPDPPSO y protección de menores.
2. Copy revisado por la DCC con foco en comprensibilidad.
3. Pruebas con al menos 3 madres/padres de distintos niveles de escolaridad.

Mientras tanto, C es el fallback conservador.

## Respuesta de la Directora de Contenido Clínico

_(pendiente)_

## Decisión final

_(pendiente)_

## Consecuencias

_(se completan al cerrar)_
