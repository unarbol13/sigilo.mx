# ADR-002: Arquitectura Offline-First

## Estado
Propuesto

## Contexto
Las brigadas de busqueda operan en campo, frecuentemente en zonas rurales sin cobertura de datos moviles. La app no puede depender de conectividad para funciones criticas como documentacion de hallazgos, marcacion de coordenadas, o registro fotografico.

## Decision
Aurora funciona completamente offline como caso base. Toda funcionalidad critica (mapas, documentacion, fichas, brigadas) opera sin conexion. La sincronizacion con servidor ocurre oportunisticamente cuando hay conectividad disponible.

## Consecuencias
- **Positivo:** La app es util en campo sin importar cobertura
- **Positivo:** Reduce superficie de ataque (menos comunicacion con servidor)
- **Negativo:** Requiere resolucion de conflictos de sincronizacion
- **Negativo:** Los mapas necesitan tiles pre-descargados
- **Negativo:** La coordinacion en tiempo real entre miembros de brigada no es posible
