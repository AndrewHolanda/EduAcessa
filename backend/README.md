# EduAcessa — Backend

REST API built with **Node.js**, **Express** and **TypeScript**, using **PostgreSQL** as the database.

## Running Locally

```bash
cd backend
npm install
cp .env.example .env    # Windows PowerShell: copy .env.example .env
npm run dev
```

The API runs at `http://localhost:3333`. To check if it is working, open `http://localhost:3333/api/health`.

Fill in `DATABASE_URL` in the `.env` file to connect to PostgreSQL. Without it, the API still runs, but the database shows as `disconnected`.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Runs the API in development mode, restarting on every change |
| `npm run build` | Compiles TypeScript to JavaScript in `dist/` |
| `npm start` | Runs the compiled version from `dist/` |
| `npm run typecheck` | Checks for TypeScript errors without compiling |

## Folder Structure

```
src/
├── server.ts             # Starts the server
├── app.ts                # Express setup: middlewares and routes
├── config/env.ts         # Environment variables (.env)
├── db/index.ts           # PostgreSQL connection
├── routes/               # API routes
│   ├── index.ts          # Groups all routes under /api
│   └── health.routes.ts  # GET /api/health
└── middlewares/
    └── errorHandler.ts   # Standard error response
```

## Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/api/health` | Returns the API and database status |
