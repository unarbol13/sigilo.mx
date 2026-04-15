# ADR-001: Cifrado local de datos

## Estado
Propuesto

## Contexto
Aurora almacena datos extremadamente sensibles: ubicaciones de fosas clandestinas, rutas de busqueda, identidades de miembros de colectivas, y experiencias personales de duelo. Un dispositivo confiscado con datos legibles pone vidas en riesgo.

## Decision
Todo dato persistido en el dispositivo se cifra con AES-256 antes de escribirse a disco. Las claves de cifrado se derivan del Keychain del dispositivo y no se almacenan en texto plano.

## Consecuencias
- **Positivo:** Un dispositivo confiscado no revela datos sin las claves
- **Positivo:** Compatible con borrado de emergencia (destruir claves = datos irrecuperables)
- **Negativo:** Overhead de rendimiento en lectura/escritura
- **Negativo:** Complejidad adicional en manejo de migraciones de base de datos
