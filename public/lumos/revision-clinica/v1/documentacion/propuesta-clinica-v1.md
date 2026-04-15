# Propuesta Clínica Lumos — v1

**Propósito:** aterrizar el marco clínico y de contenido de Lumos para revisión de la Directora de Contenido Clínico. Cada sección tiene (1) justificación teórica breve y (2) cómo se traduce en producto. Los mockups asociados viven en [mockups/v1/](../mockups/v1/).

**Estado:** borrador para revisión. Nada es decisión final.

---

## 1. Marco teórico: pérdida ambigua

Lumos se construye sobre la teoría de **pérdida ambigua** de Pauline Boss. La pérdida ambigua ocurre cuando una persona está físicamente ausente pero psicológicamente presente (desaparición forzada, migración, personas no localizadas). Es la pérdida más estresante que una familia puede enfrentar porque no ofrece cierre, rituales claros ni validación social.

**Postulados clave de Boss que orientan el producto:**

- No hay etapas lineales. Las familias oscilan entre estados.
- El objetivo clínico no es el cierre (imposible) sino la **resiliencia** y la **capacidad de sostener la ambigüedad**.
- Aplicar marcos de duelo convencional (Kübler-Ross, duelo complicado DSM) es iatrogénico: asume un cierre que no existe y patologiza la esperanza.
- La intervención central es **nombrar** la pérdida ambigua. Muchas familias viven durante años sin saber que lo que sienten tiene nombre y literatura.

**Qué NO es Lumos:**
- No es una app de duelo.
- No diagnostica. El diagnóstico le corresponde a una profesional.
- No promete cierre ni "superación".
- No pide a la familia narrar lo que pasó.

---

## 2. Arquitectura de contenido: seis estados fenomenológicos

En vez de organizar el contenido por síntoma o por etapa, lo organizamos por los **estados vividos** que Boss describe como tareas de la pérdida ambigua. La familia entra por el que más resuene en ese momento y puede volver cuantas veces quiera. No hay orden obligatorio.

| Estado | Tarea clínica | Preguntas guía del módulo |
|---|---|---|
| **Nombrar** | Dar nombre a la pérdida ambigua. Normalizar la ambivalencia. | "Lo que usted siente tiene un nombre." |
| **Sostener la ambivalencia** | Habitar el "está y no está" sin forzar una respuesta. | "¿Cómo vivir con la pregunta abierta?" |
| **Reconstruir identidad** | Revisar quién soy ahora. Especialmente potente en infancias. | "¿Quién soy yo con esta ausencia?" |
| **Encontrar maestría sin control** | Aceptar que no se puede controlar lo incontrolable, y aun así actuar. | "¿Qué sí puedo hacer hoy?" |
| **Revisar el apego** | No soltar a la persona — reconfigurar cómo se sostiene el vínculo. | "¿Cómo sigue presente quien falta?" |
| **Habitar esperanza sin cierre** | Esperanza que no depende de resolución. | "¿Qué hace posible seguir?" |

Cada módulo existe en tres versiones paralelas: **adulto**, **adolescente (13-17)**, **niño (8-12)**. Mismo núcleo teórico, lenguaje y herramientas diferenciadas.

---

## 3. Diferenciación por edad

### Adulto
- Lenguaje directo, sin simplificar.
- Herramientas: escritura, meditaciones guiadas, rituales familiares, psicoeducación.
- Rol frecuente: cuidador de menores en la familia. Por eso los módulos adultos incluyen una pestaña "acompañar a niñas y niños".

### Adolescente (13-17)
- Lenguaje cercano sin condescendencia. Tuteo con el adolescente (diferente del resto de la app que usa "usted").
- Eje central: **identidad**. Boss señala que la pregunta "¿quién soy yo ahora?" domina esta etapa.
- Herramientas: escritura libre, audio, formatos breves, expresión visual.
- Ambigüedad de roles: muchos adolescentes son *parentificados* cuando el adulto cuidador se desestabiliza. Contenido específico sobre esto.

### Niño (8-12)
- Lenguaje claro, concreto, nunca infantilizado. Los niños de familias de desaparecidos manejan más información de la que se les atribuye.
- Herramientas: dibujo, juego simbólico, cartas a la persona ausente, objetos transicionales, rituales.
- Los niños **no elaboran linealmente**: revisan la pérdida en cada nueva etapa del desarrollo. El contenido debe permitir regresar, no cerrar.
- Todo el acceso requiere vínculo con tutor + asentimiento del niño.

---

## 4. Flujo cautivo: código profesional

**Usuarios cautivos primero.** Son familias ya dentro de sistemas de atención (CEAIV, DIF, colectivas, psicólogas independientes) que están rebasados. Tienen una profesional que puede supervisar.

**Mecánica:**
1. La profesional recibe un **código de acceso** por familia.
2. La profesional hace el onboarding clínico *en su proceso habitual* — usando el Inventario de Pérdida Ambigua de Boss o la herramienta que prefiera.
3. La profesional "prescribe" módulos: marca cuáles abrir y en qué orden sugerido.
4. La familia entra a la app con el código y encuentra los módulos prescritos.
5. La app registra uso (agregado, no íntimo) que la profesional puede revisar entre sesiones.

**Qué resuelve este flujo:**
- Consentimiento de menores: la profesional media.
- Diagnóstico: lo hace la profesional, no la app.
- Onboarding clínico: lo hace la profesional.
- Posicionamiento: Lumos es herramienta clínica prescrita, no autoayuda.
- Escalabilidad: una profesional puede acompañar a más familias sin duplicar horas de sesión.

**Usuarios orgánicos (familias que encuentran la app por su cuenta):** existen pero se atienden en una fase posterior con un onboarding autónomo más cuidadoso. El MVP puede ignorarlos sin perder propósito.

---

## 5. Triage clínico (no diagnóstico)

La app **no diagnostica** pero sí **monitorea banderas rojas** y escala. Esto es responsabilidad de cualquier app de salud mental y no cruza la línea del acto clínico.

**Qué monitorea:**
- Expresiones de ideación suicida (escritura libre, respuestas en módulos).
- Señales de disociación o regresión severa en infancias.
- Indicios de colapso del cuidador principal.
- Violencia dentro del hogar (incluyendo hacia el menor).

**Qué hace al detectarlas:**
1. Interrumpe el contenido actual.
2. Ofrece recursos de crisis inmediatos (SAPTEL, Línea de la Vida, CEAIV).
3. Escala a la profesional vinculada (en flujo cautivo).
4. En caso de riesgo para menor: protocolo de reporte obligatorio conforme marco legal mexicano.

**Qué NO hace:**
- No asigna diagnóstico.
- No clasifica severidad.
- No almacena esa señal como "etiqueta" del usuario.

---

## 6. Módulos del MVP y cómo encajan

| Módulo MVP | Función clínica | Dónde aparece |
|---|---|---|
| Psicoeducación por edad | Los seis estados fenomenológicos en tres versiones. | Home → "Módulos" |
| Directorio de profesionales | Acceso a acompañamiento profesional verificado. | Home → "Acompañamiento" |
| Escritura libre cifrada | Expresión sin prompts obligatorios. Espacio privado. | Siempre accesible |
| Alertas y derivación | Triage + recursos de crisis. | Activación contextual |

---

## 7. Principios no negociables de contenido

- **Nunca patologizar la esperanza.** Mantener la esperanza de que la persona regrese es parte del duelo ambiguo, no un síntoma.
- **Nunca sugerir cierre.** La palabra "superar" no aparece en el copy.
- **Nunca narrar en nombre de la familia.** El contenido sugiere, no define la experiencia.
- **Siempre nombrar la opción de pausar.** Cada módulo se puede cerrar en cualquier momento sin "perder progreso".
- **Siempre ofrecer derivación humana.** Ningún módulo reemplaza acompañamiento profesional.

---

## 8. Pantallas en esta ronda de revisión

1. Onboarding con código profesional → [mockups/v1/01-onboarding.html](../mockups/v1/01-onboarding.html)
2. Home + navegación por edad (pendiente)
3. Módulo universal "Nombrar la pérdida ambigua" (pendiente)
4. Estado fenomenológico "Sostener la ambivalencia" en 3 versiones (pendiente)
5. Escritura libre cifrada (pendiente)
6. Triage / pantalla de crisis (pendiente)
7. Directorio de profesionales (pendiente)

La ronda 1 entrega la pantalla 1 para validación de formato. Si funciona, producimos 2-7.

---

## 9. Preguntas abiertas para la Directora de Contenido Clínico

1. ¿Los seis estados fenomenológicos cubren lo esencial o falta alguno? (Ej: culpa del superviviente, roles reconfigurados dentro de la familia.)
2. ¿El flujo de código profesional es compatible con cómo operan las profesionales que conocemos en CEAIV y colectivas?
3. Para infancias: ¿qué instrumento de asentimiento (no consentimiento, que es del tutor) sugiere usar?
4. ¿Qué recursos de crisis específicos de México deben aparecer en la pantalla de triage?
5. ¿Hay contenido existente suyo (material propio, bibliografía, ejercicios) que quiera que integremos desde ya?
