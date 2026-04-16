# AGENTS.md — sigilo.mx

Instrucciones para cualquier agente (Claude, humano, CI) que trabaje en este repo.

## Arquitectura

sigilo.mx pasa por **Cloudflare Tunnel → nginx → archivos estáticos** en el servidor Ryzen (`prisma-server`, `unarbol13@100.85.40.20`).

- `sigilo.mx/` → estáticos en `~/sigilo-landing/out/` (este repo)
- `sigilo.mx/VIP/*` → proxy a portal-cliente:4200
- `sigilo.mx/api/*` → proxy a portal-cliente:4200

**NO hacer:**
- NO crear Cloudflare Workers
- NO crear Pages projects con custom domain sigilo.mx
- NO tocar DNS (el CNAME apunta al tunnel y debe quedarse)
- NO usar `wrangler pages deploy` — no hay Pages project activo

## Deploy

Stack: Next.js 16 con `output: "export"`, salida en `out/`.

```bash
npm run build
rsync -avz --delete out/ prisma-server:~/sigilo-landing/out/
```

Los mockups viven en `public/mockups/` y se copian a `out/mockups/` durante el build. No hay que rsyncearlos por separado.

### Verificar

```bash
curl -I https://sigilo.mx/
curl -I https://sigilo.mx/lumos/
```

## Troubleshooting

Si sigilo.mx falla, revisar **en el servidor**, no en Cloudflare:

1. `ssh prisma-server`
2. `pm2 list` — portal-cliente y panel-control deben estar online
3. `sudo systemctl status nginx`
4. `sudo systemctl status cloudflared`

Config relevante en el server:
- nginx: `/etc/nginx/sites-available/sigilo.mx`
- tunnel: `/etc/cloudflared/config.yml` (sigilo.mx → localhost:80)

## Rutas publicadas

Propuestas y mockups servidos como estáticos:

- `sigilo.mx/propuesta/5e839a01ae04b584` — FlotaPro privada
- `sigilo.mx/propuesta/publica` — censurada, ejemplo público
- `sigilo.mx/lumos/` — Lumos (sitio)
- `sigilo.mx/lumos/revision-clinica/v1/` — revisión clínica (11 pantallas + docs)
