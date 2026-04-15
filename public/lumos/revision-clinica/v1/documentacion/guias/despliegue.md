# Guia de Despliegue

## Infraestructura actual
- Servidor propio: MASTER_DUNGEON (PostgreSQL, Ollama)
- Distribucion iOS: TestFlight (pruebas) → App Store (produccion)

## Plan de migracion de servidor
Fase 1: MASTER_DUNGEON (inicio, desarrollo y pruebas)
Fase 2: Hosting en jurisdiccion con leyes fuertes de proteccion de datos
  - Opciones: Greenhost (Paises Bajos), Islandia, Suiza
  - Criterio: legislacion que proteja datos ante solicitudes de gobiernos extranjeros

## Checklist de despliegue

> Por documentar al tener primer release.

## TestFlight
- Grupo cerrado solo para miembros de colectivas participantes
- Codigos de invitacion separados de TestFlight (doble capa)
