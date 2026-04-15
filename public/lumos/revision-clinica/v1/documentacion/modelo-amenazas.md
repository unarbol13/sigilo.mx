# Modelo de Amenazas de Aurora

## Contexto

Las colectivas de busqueda documentan ubicaciones de fosas clandestinas, rutas de busqueda, y hallazgos en contextos donde las autoridades estan frecuentemente coludidas con los perpetradores. Una brecha de seguridad puede costar vidas.

## Actores de amenaza

### 1. Autoridad hostil (riesgo CRITICO)
- **Motivacion:** Ocultar evidencia, intimidar buscadoras, proteger perpetradores
- **Capacidad:** Confiscacion de dispositivos, vigilancia de comunicaciones, acceso a infraestructura de telecomunicaciones
- **Escenarios:**
  - Confiscacion de telefono en reten o detencion
  - Solicitud formal de datos al servidor
  - Infiltracion de colectiva para acceder a la app
- **Mitigaciones:** Camuflaje de app, borrado de emergencia, cifrado local, servidor en jurisdiccion extranjera (futuro)

### 2. Crimen organizado (riesgo CRITICO)
- **Motivacion:** Evitar descubrimiento de fosas, intimidar familias
- **Capacidad:** Acceso fisico violento a dispositivos, posible acceso a infraestructura via corrupcion
- **Escenarios:**
  - Robo de dispositivo
  - Coercion para desbloquear telefono
  - Acceso al dispositivo desbloqueado
- **Mitigaciones:** Borrado de emergencia (rapido, sin confirmaciones multiples), no ubicacion en tiempo real, autenticacion biometrica como capa adicional

### 3. Infiltrado en colectiva (riesgo ALTO)
- **Motivacion:** Monitorear avances de busqueda, identificar miembros activos
- **Capacidad:** Acceso legitimo a la app como miembro invitado
- **Escenarios:**
  - Observar datos de la colectiva desde dentro
  - Compartir informacion con terceros
- **Mitigaciones:** Acceso minimo por rol, no ver zonas de otros equipos, coordinadora puede revocar acceso inmediatamente, logs de actividad visibles para coordinadora

### 4. Atacante remoto (riesgo MEDIO)
- **Motivacion:** Datos personales, hacktivismo, espionaje
- **Capacidad:** Ataques a servidor, intercepcion de comunicaciones
- **Escenarios:**
  - Ataque al servidor de sincronizacion
  - Man-in-the-middle en redes publicas
- **Mitigaciones:** Cifrado end-to-end (el servidor no tiene datos en texto plano), TLS, certificate pinning

## Principio rector

Disenar asumiendo que el dispositivo sera confiscado. Si alguien con acceso fisico al telefono no puede determinar que la app es Aurora ni acceder a los datos, el diseno es correcto.
