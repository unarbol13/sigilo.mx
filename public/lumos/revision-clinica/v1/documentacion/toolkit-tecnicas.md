# Toolkit de técnicas terapéuticas — Lumos

**Propósito:** catálogo curado de técnicas terapéuticas evaluadas contra el marco de **pérdida ambigua** (Pauline Boss) y la realidad de familias mexicanas de personas desaparecidas.

**Quién cura:** la **Directora de Contenido Clínico (DCC)**. El equipo de producto propone; la DCC marca cada técnica como aceptada, para adaptar, descartada, o la abre como decisión clínica (DC).

**Qué NO es este documento:** una revisión de literatura, ni un manual clínico. Es una lista de trabajo para decidir qué se aterriza en la app y qué no.

---

## Convenciones

**Estado de la técnica:**
- `propuesta` — el equipo la sugiere; la DCC no la ha revisado.
- `aceptada` — la DCC validó; se aterriza en app / módulos.
- `adaptar` — la DCC acepta con cambios; se especifican al lado.
- `descartada` — la DCC descarta con razones.
- `decisión-abierta` — tiene un [DC abierto](decisiones-clinicas/) porque la respuesta no es obvia.

**Compatibilidad con Boss:**
- ✓ Natural — se integra sin fricción.
- ◑ Requiere adaptación — base útil, pero la versión clásica va contra el marco.
- ✗ Incompatible — asume cierre; iatrogénica en este contexto.

**Edades aplicables:** A = adulto (18+), T = adolescente (13-17), N = niño (8-12).

**Nivel de supervisión:**
- `app-sola` — el usuario la hace con guía de la app.
- `app+profesional` — la app la prescribe; la profesional supervisa entre sesiones.
- `solo-profesional` — requiere presencia de la profesional; la app no la facilita directamente.

**Estados fenomenológicos (ver [propuesta-clinica-v1.md](propuesta-clinica-v1.md) §2):** Nombrar, Sostener, Identidad, Maestría, Apego, Esperanza.

---

## 1. Terapia narrativa (Michael White, David Epston)

### 1.1 Externalización
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** A T N · **Supervisión:** app-sola
- **Estados:** Nombrar, Sostener
- **Qué es:** separar el problema de la persona. "La pérdida ambigua" se trata como entidad externa que visita, no como defecto interno.
- **Cómo en Lumos:** prompts en escritura libre y módulos ("¿cómo llega hoy la pérdida?", "¿qué hace cuando está aquí?"). Niño: "dibuja cómo se ve la tristeza cuando visita."

### 1.2 Re-autoría del vínculo
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** A T · **Supervisión:** app+profesional
- **Estados:** Apego, Identidad
- **Qué es:** reescribir la relación con la persona ausente como una historia en curso, no como lo que se rompió.
- **Cómo en Lumos:** ejercicio guiado dentro del estado "Revisar el apego". Requiere contención — se prescribe, no se ofrece abiertamente.

### 1.3 Momentos únicos / excepciones
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** A T N · **Supervisión:** app-sola
- **Estados:** Maestría, Esperanza
- **Qué es:** identificar instantes en que la familia actuó a pesar de la pérdida. Antídoto a la narrativa de inmovilidad.
- **Cómo en Lumos:** prompts breves ("describa un momento esta semana en que la pérdida no ganó"). Potente para niños con dibujo.

### 1.4 Ceremonia de testigos externos
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** A T · **Supervisión:** solo-profesional
- **Estados:** Identidad, Apego
- **Qué es:** ritualizar el testimonio. Un tercero escucha y refleja sin juzgar.
- **Cómo en Lumos:** no se aterriza en app. Se documenta para uso de la profesional con la familia, o en espacios grupales de colectivas.

---

## 2. Rituales (Boss, Imber-Black)

Boss les da peso central. Aterrizarlos es la laguna más grande de la v1 actual.

### 2.1 Rituales de conexión continuada
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** A T N · **Supervisión:** app-sola
- **Estados:** Apego
- **Qué es:** cenas que lo recuerdan, cumpleaños marcados con su lugar, fotos visibles sin convertirlas en altar.
- **Cómo en Lumos:** plantillas suaves ("ideas para el cumpleaños que viene"), recordatorios respetuosos en fechas marcadas por la familia.
- **Importante:** NO son rituales de despedida.

### 2.2 Rituales para fechas difíciles (calendario)
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** A T N · **Supervisión:** app-sola
- **Estados:** Sostener, Esperanza
- **Qué es:** preparación para 10 de mayo, 30 de agosto (Día Internacional de la Desaparición Forzada), aniversarios, navidades.
- **Cómo en Lumos:** calendario con las fechas marcadas por la familia; 48 h antes la app ofrece contenido breve y la opción de abrir un módulo específico. Nunca notificación invasiva.

### 2.3 Rituales de transición familiar
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** A T N · **Supervisión:** app+profesional
- **Estados:** Identidad, Apego
- **Qué es:** acompañamiento en eventos donde la ausencia se siente más (graduación, boda, bautizo, nacimiento).
- **Cómo en Lumos:** módulo específico "cuando se ausenta más"; la familia puede pedirlo o la profesional lo prescribe.

---

## 3. Escritura expresiva (Pennebaker)

Evidencia empírica robusta: 15-20 minutos de escritura no dirigida varias veces por semana reduce marcadores fisiológicos de estrés crónico.

### 3.1 Escritura libre Pennebaker
- **Estado:** propuesta (ya implementada como módulo base)
- **Boss:** ✓ · **Edades:** A T · **Supervisión:** app-sola
- **Estados:** todos
- **Cómo en Lumos:** es el módulo "Escritura libre" (mockup 05). Sin prompts obligatorios.

### 3.2 Cartas al ausente sin enviar
- **Estado:** propuesta (ya en mockup del niño)
- **Boss:** ◑ · **Edades:** A T N · **Supervisión:** app-sola
- **Estados:** Apego
- **Adaptación Boss:** nunca como "carta final" o "despedida". Siempre como "una de tantas cartas — la puede retomar mañana".
- **Cómo en Lumos:** plantilla opcional dentro de escritura libre. Extender del niño al adulto.

### 3.3 Voice journal
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** A T N · **Supervisión:** app-sola
- **Estados:** todos
- **Qué es:** grabación de voz como alternativa a texto. Cuando no hay palabras o no hay ganas de escribir.
- **Cómo en Lumos:** botón de grabación en escritura libre (en mockup como placeholder).

---

## 4. Trauma-informed / grounding

Para momentos de activación aguda, flashbacks, ansiedad nocturna, preámbulo a crisis.

### 4.1 5-4-3-2-1 sensorial
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** A T N · **Supervisión:** app-sola
- **Estados:** transversal (crisis / contención rápida)
- **Qué es:** ver 5 cosas, oír 4, tocar 3, oler 2, saborear 1.
- **Cómo en Lumos:** recurso rápido en pantalla de crisis y accesible desde cualquier módulo.

### 4.2 Respiración 4-7-8
- **Estado:** propuesta (ya en mockup de crisis como respiración simple)
- **Boss:** ✓ · **Edades:** A T N · **Supervisión:** app-sola
- **Estados:** transversal
- **Cómo en Lumos:** animación de respiración guiada. Ya presente.

### 4.3 Orientación al presente
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** A T N · **Supervisión:** app-sola
- **Estados:** transversal
- **Qué es:** preguntas breves — ¿dónde estoy ahora? ¿qué día es? ¿quién está conmigo?
- **Cómo en Lumos:** mini-ejercicio dentro de pantalla de crisis si el 5-4-3-2-1 no alcanza.

---

## 5. Identidad y valores (narrativa + ACT)

Especialmente potentes en adolescentes — su estado fenomenológico central es reconstruir identidad.

### 5.1 Mapa de identidad
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** T A · **Supervisión:** app+profesional
- **Estados:** Identidad
- **Qué es:** exploración de "quién soy cuando no estoy pensando en esto". Identidades que conviven (hija, amiga, estudiante, la que busca, la que ríe).
- **Cómo en Lumos:** ya esbozado en mockup 04b (adolescente). Formalizar como ejercicio guiado.

### 5.2 Brújula de valores (ACT)
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** A T · **Supervisión:** app-sola
- **Estados:** Maestría, Esperanza
- **Qué es:** qué sigue importando, independiente de si la persona regresa.
- **Cómo en Lumos:** checklist reflexivo + prompts de acción coherente con valores.

### 5.3 Línea de vida en tres tramos
- **Estado:** propuesta
- **Boss:** ✓ (adaptación directa de Boss) · **Edades:** A T · **Supervisión:** app+profesional
- **Estados:** Apego, Identidad
- **Qué es:** tres columnas o segmentos — antes / con la ausencia / lo que sigo construyendo. Nunca un cierre, siempre un "hasta ahora".

---

## 6. Técnicas para infancias

### 6.1 Dibujo narrativo
- **Estado:** propuesta (ya en mockup)
- **Boss:** ✓ · **Edades:** N (T opcional) · **Supervisión:** app-sola
- **Estados:** todos
- **Qué es:** los niños procesan por simbolización. Dibujar la emoción, dibujar al ausente, dibujar "las dos cosas a la vez".

### 6.2 Bibliotherapy / cuentos adaptados
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** N · **Supervisión:** app-sola
- **Estados:** Nombrar, Identidad, Esperanza
- **Qué es:** historias breves que modelan cómo otros niños viven con una ausencia ambigua. Narrativa en primera persona de un personaje.
- **Cómo en Lumos:** microlibros ilustrados dentro de módulos de niño.

### 6.3 Objeto transicional guiado
- **Estado:** propuesta
- **Boss:** ◑ · **Edades:** N (T opcional) · **Supervisión:** app+profesional
- **Estados:** Apego
- **Qué es:** un objeto físico que representa al ausente, con guía clínica para no convertirlo en altar cerrado.
- **Adaptación Boss:** el objeto se "usa" (se guarda, se saca, se comparte), no se "guarda para siempre".

### 6.4 Juego simbólico guiado
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** N · **Supervisión:** solo-profesional
- **Qué es:** caja de arena, muñecos. Requiere clínico presente.
- **Cómo en Lumos:** no se aterriza en app. Se referencia en material para profesionales.

---

## 7. Herramientas específicas de Boss

### 7.1 Pensamiento "both/and" ("ambas-y")
- **Estado:** propuesta (ya es el corazón del módulo "Sostener la ambivalencia")
- **Boss:** ✓ · **Edades:** A T N · **Supervisión:** app-sola
- **Estados:** Sostener
- **Cómo en Lumos:** ejercicios de completar frase ("sostengo que está ___ / y también que no está ___"). Ya en mockup 04.

### 7.2 Inventario de Pérdida Ambigua
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** A T · **Supervisión:** solo-profesional
- **Qué es:** instrumento clínico de Boss para valorar la experiencia de pérdida ambigua.
- **Cómo en Lumos:** **no** en la app de familia. Herramienta para la profesional; puede orientar qué módulos prescribir.

### 7.3 Psicoeducación sobre *boundary ambiguity*
- **Estado:** propuesta
- **Boss:** ✓ · **Edades:** A · **Supervisión:** app-sola
- **Estados:** Sostener, Apego
- **Qué es:** nombrar la "ambigüedad de límites" en la familia: quién está adentro, quién está afuera, qué rol ocupa cada quien cuando la persona central no está.
- **Cómo en Lumos:** módulo específico para adultos cuidadores.

---

## 8. Técnicas con decisión clínica abierta

### 8.1 Silla vacía adaptada (Gestalt)
- **Estado:** decisión-abierta — DC pendiente de redactar
- **Boss:** ◑ · **Edades:** A T · **Supervisión:** solo-profesional o app+profesional
- **Por qué pendiente:** la silla vacía clásica apunta a despedida/cierre — iatrogénica en pérdida ambigua. La variante compatible (diálogo continuo con alguien ambiguamente ausente, para reconfigurar vínculo) sí tiene cabida. La DCC decide si y cómo.

---

## 9. Técnicas NO compatibles (descartar a menos que la DCC diga lo contrario)

Estas se documentan explícitamente para que el equipo de producto no las introduzca por defecto.

| Técnica | Razón |
|---|---|
| Etapas del duelo (Kübler-Ross) | Asume secuencia lineal hacia aceptación/cierre. Incompatible con pérdida ambigua. |
| Carta de despedida final | Asume cierre. Iatrogénica. |
| Entierro simbólico del ausente | Igual. Niega la naturaleza ambigua de la pérdida. |
| EMDR | Requiere profesional entrenado presente. Nunca sin supervisión. |
| Prolonged exposure | Requiere profesional presente y protocolo clínico. |
| Terapia cognitiva "racionalizante" que pide "dejar ir" | Contraindicada. Refuerza culpa por mantener esperanza. |
| Closure narrativo / "cerrar el capítulo" | Marco entero incompatible. |
| Análisis de pensamientos "irracionales" sobre el ausente | Patologiza una respuesta normal a una situación anormal. |

---

## 10. Cómo usa esto la DCC

1. Lee el catálogo (puede ser en varias sesiones).
2. Para cada técnica marca: `aceptada`, `adaptar` (con nota), o `descartada` (con razón).
3. Las `adaptar` pueden convertirse en DC si la adaptación es significativa.
4. Las `descartada` quedan documentadas para no re-proponerlas.
5. Lo `aceptado` pasa a ser candidato a módulo / ejercicio concreto en la siguiente iteración de contenido.

## 11. Cómo usa esto el equipo de producto

1. Antes de diseñar un nuevo ejercicio o módulo, revisar si la técnica base está `aceptada` aquí.
2. Si no existe en el catálogo, agregarla como `propuesta` antes de implementarla.
3. Si está en `decisión-abierta`, abrir DC y esperar respuesta.

## 12. Pendientes

- Falta técnica para **culpa del superviviente** (muy presente en infancias y cónyuges).
- Falta técnica para **roles reconfigurados en la familia** (parentificación de adolescentes).
- Falta técnica para **ambigüedad temporal** (cuando "cuánto tiempo lleva" es la pregunta dolorosa).
