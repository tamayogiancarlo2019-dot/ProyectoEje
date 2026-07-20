# Proyecto de Prueba — Docker + GitHub Actions + Docker Hub

Proyecto mínimo para practicar el mismo flujo que usarás en tu exposición,
sin la complejidad de base de datos ni React.

## Estructura
```
proyecto-prueba/
├── backend/          # API Express, un solo endpoint /api/status
├── frontend/          # HTML plano servido con Nginx, consume la API
├── docker-compose.yml
└── .github/workflows/docker-publish.yml
```

## 1. Probar con Docker (local)

```bash
docker compose up -d --build
docker compose ps
```

Abre `http://localhost` en el navegador → deberías ver el mensaje del backend.

### Escenario de cambio
Edita `backend/src/index.js`, cambia el valor de `MENSAJE`, guarda y reconstruye
solo ese servicio:

```bash
docker compose up -d --build backend
```

Recarga el navegador → el mensaje nuevo aparece sin haber tocado el frontend.

Para bajar todo:
```bash
docker compose down
```

## 2. Subir a tu propio repositorio en GitHub

```bash
cd proyecto-prueba
git init
git add .
git commit -m "proyecto inicial de prueba"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git
git push -u origin main
```

## 3. Configurar secrets en GitHub
En tu repo → **Settings → Secrets and variables → Actions**, agrega:
- `DOCKER_USERNAME` → tu usuario de Docker Hub
- `DOCKERHUB_TOKEN` → un Access Token generado en Docker Hub (no tu password)

## 4. Probar el pipeline
Haz cualquier cambio (por ejemplo el mismo `MENSAJE` del backend), commit y push
a `main`:

```bash
git add .
git commit -m "cambio de prueba para el pipeline"
git push origin main
```

Ve a la pestaña **Actions** de tu repo en GitHub y observa el build + push en
tiempo real. Al terminar, revisa en **hub.docker.com** que las imágenes
`TU_USUARIO/prueba-frontend` y `TU_USUARIO/prueba-backend` se actualizaron.

## 5. Traer el cambio publicado
```bash
docker pull TU_USUARIO/prueba-frontend:latest
docker pull TU_USUARIO/prueba-backend:latest
```
