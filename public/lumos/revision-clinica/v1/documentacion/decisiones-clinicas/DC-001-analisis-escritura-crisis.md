---
id: DC-001
titulo: Análisis de escritura libre para detección de crisis
estado: pendiente-dcc
fecha-propuesta: 2026-04-14
bloquea: ADR-009, mockup 05-escritura-libre
---

# DC-001 — Análisis de escritura libre para detección de crisis

## Contexto

El módulo de **escritura libre** (mockup 05) es un espacio privado, cifrado en el dispositivo. La promesa que le damos a la familia es "nadie lo lee — ni Lumos, ni su acompañante".

Al mismo tiempo, la seguridad del usuario — especialmente menores — exige que **algo** detecte señales de riesgo inminente (ideación suicida, autolesión, violencia hacia o desde un tercero) y active el protocolo de crisis.

Estas dos cosas están en tensión. La versión actual del mockup intenta resolverla con una frase ("esto no analiza lo que escribe. Solo detecta señales muy graves") que es **técnicamente contradictoria**: sí analiza — solo que busca un subconjunto de patrones.

No podemos sostener esa ambigüedad en un producto real. Hay que elegir.

## Pregunta

¿Qué debe hacer Lumos con el texto que escribe el usuario en escritura libre, para balancear privacidad total vs. deber de cuidado — especialmente con menores?

## Opciones

### Opción A — Cero análisis

La app no toca el texto. Se almacena cifrado y se olvida. La detección de crisis queda en manos de la profesional (en sesión) y de un botón siempre visible "necesito apoyo" que el usuario pulsa voluntariamente.

- **Pro:** promesa de privacidad sin asteriscos. Alineada con ética de confidencialidad clínica clásica.
- **Pro:** no hay falsos positivos ni riesgo de re-traumatización por alertas equivocadas.
- **Contra:** un menor en riesgo inminente que no pulsa el botón queda desatendido. Problema legal y ético grave.
- **Contra:** probablemente incompatible con UNICEF / comités de ética para productos dirigidos a infancias.

### Opción B — Análisis transparente con lista pública de señales

La app **sí** analiza el texto en el dispositivo contra una lista corta y publicada de patrones (palabras y frases asociadas a crisis aguda: autolesión, suicidio, violencia). Esa lista se enseña al usuario durante el onboarding: "Lumos mira estas 30 frases; si aparece alguna, pausamos y ofrecemos apoyo. Nada sale del dispositivo a menos que usted elija hablar con su acompañante."

- **Pro:** promesa honesta y auditable.
- **Pro:** el análisis corre on-device — nada sale a servidor.
- **Pro:** protocolo de cuidado activo para menores.
- **Contra:** las listas de palabras tienen falsos positivos (ej. "me quiero morir" como hipérbole).
- **Contra:** usuarios pueden evadir la detección con sinónimos, perdiendo parcialmente su propósito.
- **Contra:** requiere mantener y versionar la lista clínicamente.

### Opción C — Análisis opt-in al inicio

En el onboarding se pregunta: "¿Quiere que Lumos mire lo que escribe en busca de señales de crisis, para activar apoyo automáticamente?" El usuario (o el tutor, si es menor) decide. Si dice que sí, se activa B. Si dice que no, se activa A, con disclaimer: "Si algún momento siente que necesita apoyo, use el botón rojo."

- **Pro:** respeta autonomía del usuario adulto.
- **Pro:** transparente.
- **Contra:** en menores, el consentimiento lo da el tutor — la decisión del menor no pesa igual. Ambigüedad ética.
- **Contra:** duplica protocolos y complica la comunicación del producto.

### Opción D — Análisis siempre activo para menores, opt-in para adultos

Los perfiles de menores (8-12 y 13-17) tienen análisis obligatorio (por deber de cuidado reforzado y marco legal mexicano de protección de la infancia). Los perfiles adultos deciden en onboarding. En ambos casos el análisis es on-device y transparente (Opción B).

- **Pro:** aterriza el "deber de cuidado reforzado para menores" que ya está en los principios del proyecto.
- **Pro:** respeta autonomía adulta.
- **Contra:** el menor no elige — puede sentirlo como vigilancia. Contradice en parte el principio de "esto es tuyo" del asentimiento.
- **Contra:** requiere comunicación cuidadosa al menor durante el asentimiento.

## Recomendación del equipo

**Opción D con transparencia total en el asentimiento del menor.** Durante la pantalla de asentimiento (mockup 01, paso 6b), incluir explícitamente: "Lumos mira algunas palabras en lo que escribes para cuidarte. Si aparecen, pausamos y te ofrecemos apoyo. No lee todo, no guarda palabra por palabra, no se lo cuenta a nadie a menos que sea muy grave."

La lista de patrones la construye y valida la DCC. Se versiona en un archivo del repo (`contenido/deteccion-crisis/lista-v1.md`) y se revisa cada seis meses.

## Respuesta de la Directora de Contenido Clínico

_(pendiente)_

## Decisión final

_(pendiente)_

## Consecuencias

_(se completan al cerrar)_
