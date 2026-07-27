# dia1-git-profesional -> Backend API Node.js

Proyecto que empezo como practica de Git profesional y evoluciono a API REST con Node.js + Express. Enfoque 100% buenas practicas: conventional commits, env protection, arquitectura modular.

## Stack Dia 6
- Node.js v24.14.1
- Express 5.x
- dotenv
- Git flow pro (stash, revert, cherry-pick, merge conflicts)

## Timeline
- **Dia 1-3:** Git basico, ramas, PRs, conflictos
- **Dia 4:** Advanced - stash, revert, .env protection
- **Dia 5:** Init Node backend, Express server, dotenv, 200 OK
- **Dia 6:** CRUD Users - separacion app/server, routes, controllers, data en memoria

## Estructura
src/
app.js -> config express, middlewares, routes
server.js -> solo levanta el puerto
data.js -> data en memoria (pre-DB)
routes/
users.routes.js -> /api/users
controllers/
users.controller.js -> logica CRUD

## API Endpoints - Dia 6

| Metodo | Ruta | Descripcion | Body |
|---|---|---|---|
| GET | / | Health root | - |
| GET | /health | Uptime | - |
| GET | /api/users | Lista todos | - |
| GET | /api/users/:id | Obtiene 1 usuario | - |
| POST | /api/users | Crea usuario | {name, email} |
| DELETE | /api/users/:id | Elimina usuario | - |

### Ejemplo

\\\ash
GET http://localhost:3000/api/users
-> [{id:1, name:"Ivan", email:"ivan@test.com"}]

POST http://localhost:3000/api/users
Body: {"name":"Camilo","email":"camilo@test.com"}
-> 201 Created
\\\

## Como correr

\\\powershell
# Clonar
git clone https://github.com/Camiloo92/dia1-git-profesional.git
cd dia1-git-profesional

# Env
copy .env.example .env
# edita PORT=3000

# Instalar y correr
npm install
npm run dev
# -> http://localhost:3000
\\\

## Seguridad
- \.env\ nunca se commitea (verificado con git status)
- \.env.example\ si se commitea para onboarding

## Siguiente - Dia 7
- Middleware de validacion y error handler global
- Preparacion para MongoDB / persistencia real
- Tests con Thunder Client

Autor: Ivan Del Carpo Calle (@Camiloo92) - Bogota, Colombia
