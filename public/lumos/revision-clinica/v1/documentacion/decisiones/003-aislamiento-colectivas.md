# ADR-003: Aislamiento total entre colectivas

## Estado
Propuesto

## Contexto
Cada colectiva de busqueda opera de forma independiente. Sus datos incluyen ubicaciones sensibles y miembros que podrian estar en riesgo. Si una colectiva es comprometida (por infiltracion o confiscacion), los datos de otras colectivas no deben estar accesibles.

## Decision
Cada colectiva opera en un silo de datos completamente aislado. No existen consultas cross-colectiva a nivel de base de datos. La interoperabilidad entre colectivas (cuando se implemente en v2.0) requiere autorizacion explicita de ambas coordinadoras y funciona por intercambio de datos, no por acceso compartido.

## Consecuencias
- **Positivo:** Compromiso de una colectiva no afecta a otras
- **Positivo:** Modelo de confianza simple y claro para coordinadoras
- **Negativo:** No es posible buscar personas en fichas de otras colectivas sin acuerdo previo
- **Negativo:** Datos duplicados si multiples colectivas buscan a la misma persona
