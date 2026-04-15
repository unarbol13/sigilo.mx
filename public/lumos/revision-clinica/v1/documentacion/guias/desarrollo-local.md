# Guia de Desarrollo Local

## Requisitos previos

> Por definir al elegir stack tecnologico. Probable:
> - macOS con Xcode (ultima version estable)
> - Swift 5.9+
> - PostgreSQL (para servidor de sincronizacion)
> - CocoaPods o SPM para dependencias

## Configuracion inicial

> Por documentar al iniciar desarrollo del MVP.

## Ejecucion de tests

> Por documentar.

## Convenciones de codigo

- Nombres de variables y funciones en ingles (el codigo es universal)
- Comentarios en espanol cuando expliquen logica de negocio especifica del contexto mexicano
- Todo dato sensible pasa por la capa de cifrado antes de persistirse
- No hardcodear strings de UI (preparar para localizacion futura)
