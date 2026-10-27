# EduAcessa — Backend

REST API built with **Node.js**, **Express** and **TypeScript**, using **PostgreSQL** as the database.

## Running Locally

```bash
cd backend
npm install
cp .env.example .env    # Windows PowerShell: copy .env.example .env
npm run db:setup        # creates the database tables
npm run dev
```

The API runs at `http://localhost:3333`. To check if it is working, open `http://localhost:3333/api/health`.

## Environment Variables (`.env`)

| Variable | What it is |
|---|---|
| `PORT` | Port where the API runs. Default: `3333` |
| `DATABASE_URL` | PostgreSQL connection string. Without it, the API runs but every route that needs the database returns `503` |
| `JWT_SECRET` | Secret used to sign login tokens. **Required.** Use a long random text and never commit it |
| `JWT_EXPIRES_IN` | How long a login lasts. Default: `30d` |

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Runs the API in development mode, restarting on every change |
| `npm run db:setup` | Creates the tables from `src/db/schema.sql`. Safe to run more than once |
| `npm run build` | Compiles TypeScript to JavaScript in `dist/` |
| `npm start` | Runs the compiled version from `dist/` |
| `npm run typecheck` | Checks for TypeScript errors without compiling |

## Folder Structure

```
src/
├── server.ts               # Starts the server
├── app.ts                  # Express setup: middlewares and routes
├── config/env.ts           # Environment variables (.env)
├── db/
│   ├── index.ts            # PostgreSQL connection
│   ├── schema.sql          # Table definitions
│   └── setup.ts            # Runs schema.sql (npm run db:setup)
├── routes/                 # URLs and what each one does
│   ├── index.ts            # Groups all routes under /api
│   ├── health.routes.ts    # GET /api/health
│   └── auth.routes.ts      # /api/auth/register, /login, /me
├── schemas/                # Validation rules for request bodies
├── services/               # Business logic and database queries
├── middlewares/
│   ├── auth.ts             # Blocks requests without a valid token
│   └── errorHandler.ts     # Standard error responses
└── utils/httpError.ts      # Error with an HTTP status code
```

## Endpoints

| Method | Route | Auth | Description |
|---|---|---|---|
| GET | `/api/health` | — | API and database status |
| POST | `/api/auth/register` | — | Creates an account and returns a token |
| POST | `/api/auth/login` | — | Logs in and returns a token |
| GET | `/api/auth/me` | Token | Returns the logged-in user |

### `POST /api/auth/register`

```json
{
  "name": "João Pereira",
  "email": "joao@email.com",
  "password": "minimum8chars",
  "school": "EE Padre Pedro Gislandy",
  "role": "student",
  "gradeYear": 9,
  "phone": "(92) 99999-9999",
  "acceptedTerms": true
}
```

- `role` is `"student"` or `"teacher"`
- Students send `gradeYear` as a number from `6` to `9`
- Teachers send `subject` (e.g. `"Matemática"`) instead of `gradeYear`
- `phone` is optional
- "Confirm password" is checked only on the app and is not sent

### `POST /api/auth/login`

```json
{ "email": "joao@email.com", "password": "minimum8chars" }
```

### Successful response (register and login)

```json
{
  "token": "eyJhbGciOi...",
  "user": {
    "id": 1,
    "name": "João Pereira",
    "email": "joao@email.com",
    "school": "EE Padre Pedro Gislandy",
    "role": "student",
    "gradeYear": 9,
    "subject": null,
    "phone": "(92) 99999-9999",
    "createdAt": "2026-10-27T01:12:09.113Z"
  }
}
```

The app should store the `token` (e.g. with `expo-secure-store`) and send it on protected routes:

```
Authorization: Bearer <token>
```

When the app opens, it can call `GET /api/auth/me` with the stored token. If it returns `200`, the user is still logged in; if it returns `401`, show the login screen.

### Error responses

| Status | When | Body |
|---|---|---|
| `400` | A field is invalid | `{ "error": "Dados inválidos", "details": [{ "field": "email", "message": "E-mail inválido" }] }` |
| `401` | Wrong email or password, or missing/invalid token | `{ "error": "E-mail ou senha inválidos" }` |
| `409` | Email already registered | `{ "error": "Este e-mail já está cadastrado" }` |
| `503` | `DATABASE_URL` not set | `{ "error": "Banco de dados não configurado..." }` |

Error messages are in Portuguese so the app can show them directly to the user.
