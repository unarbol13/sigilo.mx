# Manejo de Datos Fenomenologicos (Capa 3)

## Naturaleza de los datos
Los datos fenomenologicos son registros de experiencia subjetiva: suenos, percepciones alteradas de tiempo, sensacion de presencia del ausente, intuiciones. Son extremadamente personales y no tienen equivalente en otras aplicaciones.

## Principios

### 1. Propiedad absoluta del usuario
Los datos pertenecen a la persona que los genera. Aurora es custodio temporal, nunca propietario.

### 2. No patologizacion
Las experiencias documentadas no son sintomas. Son fenomenos de consciencia dignos de estudio. El lenguaje de la app nunca implica enfermedad ni diagnostico.

### 3. No induccion
Los prompts del diario son abiertos y no directivos. Nunca sugieren una respuesta ni crean expectativa de que "deberia" sentir algo.

### 4. Anonimizacion robusta
Antes de que un dato fenomenologico se comparta con investigadores:
- Se elimina todo dato identificable (nombre, colectiva, ubicacion, fechas exactas)
- Se generaliza contexto (no "brigada en cerro X el 15 de marzo" sino "durante actividad de busqueda")
- Se verifica que no sea re-identificable por cruce con otros datos
- Un humano (asesora tanatologica) revisa antes de la transmision

## Flujo de datos

```
Persona escribe en diario → Cifrado local → Solo visible para ella
                                                    ↓ (si consiente)
                                           Anonimizacion automatica
                                                    ↓
                                           Revision humana (asesora)
                                                    ↓
                                           Disponible para investigador
                                           (solo datos anonimizados)
```

## Prompts del diario
Disenados por la asesora tanatologica. Ejemplos del tipo de prompt aceptable:
- "Hubo algun momento hoy en que sentiste algo que te cuesta describir con palabras?"
- "Sonaste algo relacionado con tu busqueda esta semana?"
- "Durante la brigada, hubo algun momento en que tu percepcion del tiempo o del espacio cambio?"

Ejemplos de lo que NUNCA seria un prompt aceptable:
- "Sentiste la presencia de tu familiar?" (inductivo)
- "Califica tu nivel de ansiedad del 1 al 10" (patologizante)
- "Describe tu experiencia mistica" (categoriza antes de documentar)
