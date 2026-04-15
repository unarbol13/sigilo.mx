# ADR-004: Stack Tecnologico

## Estado
Propuesto

## Contexto
Aurora necesita un stack que soporte: offline-first, cifrado end-to-end, mapas offline, borrado de emergencia, camuflaje de app, y aislamiento de datos por colectiva. El desarrollador (Omar) tiene 3 apps publicadas con React Native/Expo y 18 proyectos activos con un ecosistema maduro de Supabase, FastAPI, y servidor Ryzen propio.

## Alternativas consideradas

### A. Swift/SwiftUI nativo
- **Pro:** Maximo control sobre cifrado, Keychain, Secure Enclave, mapas offline
- **Pro:** Mejor rendimiento y acceso a APIs de bajo nivel
- **Con:** Omar no tiene apps publicadas con Swift nativo puro
- **Con:** Curva de aprendizaje significativa para un MVP que se necesita rapido
- **Con:** No reutiliza ningun patron existente del ecosistema

### B. React Native + Expo (ELEGIDO)
- **Pro:** 3 apps publicadas, patron dominado
- **Pro:** Reutiliza: SQLite local-first (PRISMA 360), RLS (CRM Bares), location hooks, Zustand, Nativewind
- **Pro:** Expo tiene modulos nativos para cifrado, biometria, camara, location
- **Pro:** FastAPI backend ya probado en BSR_STORE, Cloudflare Tunnel ya configurado
- **Con:** Menos control que Swift nativo sobre Secure Enclave
- **Con:** SQLCipher requiere config adicional en Expo
- **Mitigacion:** Para features que requieran acceso nativo profundo, se pueden crear modulos nativos puntuales

### C. Flutter
- **Con:** Omar no tiene experiencia con Flutter/Dart
- **Con:** No reutiliza nada del ecosistema existente
- **Descartado inmediatamente**

## Decision
React Native + Expo (SDK 54+) para mobile. Supabase + FastAPI en Ryzen para backend. Cloudflare Tunnel para exposicion segura.

## Consecuencias
- **Positivo:** MVP en semanas, no meses — Omar ya sabe como publicar en App Store con este stack
- **Positivo:** Reutiliza patrones probados de 5+ proyectos
- **Positivo:** Backend se despliega en infraestructura propia (Ryzen) sin costos adicionales
- **Negativo:** Si se necesita acceso a Secure Enclave para generacion de claves, se necesitara un modulo nativo
- **Negativo:** Mapas offline con react-native-maps requiere pre-descarga de tiles (solucion conocida)
