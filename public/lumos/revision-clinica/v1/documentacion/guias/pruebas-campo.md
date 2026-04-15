# Guia de Pruebas en Campo

## Objetivo
Validar que Aurora funciona correctamente en las condiciones reales de una brigada de busqueda.

## Condiciones de prueba

### Ambiente
- Sin conexion a internet (modo avion)
- Pantalla bajo sol directo
- Dispositivo con bateria baja (<20%)
- Uso con manos sucias o guantes

### Flujos criticos a probar
1. Documentar hallazgo (foto + GPS + descripcion) sin internet
2. Marcar punto en mapa offline
3. Consultar ficha de persona desaparecida sin internet
4. Activar borrado de emergencia
5. Sincronizar al recuperar conexion despues de horas offline

### Metricas de exito
- Cero datos perdidos despues de sesion offline
- Borrado de emergencia completa en menos de 3 segundos
- Interfaz legible bajo sol directo
- Flujo de documentacion completable en menos de 30 segundos

## Protocolo de prueba con colectiva

> Por definir con la primera colectiva participante (Salamanca Unidos Buscando Desaparecidos).
> Principio: primero observar una brigada como observador, entender flujo real, luego disenar prueba.
