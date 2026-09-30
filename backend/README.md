# BhoomiDrishti Backend API

> **SIH-26017** — AI-powered Land Acquisition & Statutory Delay-Lapse Prediction  
> Ministry of Rural Development, Department of Land Resources (DoLR)

## Quick Start

```bash
npm install
npm run dev        # starts with --watch (auto-restart on file changes)
# or
npm start          # production mode
```

Server runs on **http://localhost:4000** by default.  
Set `PORT` env variable to override.

## API Endpoints

| Method | Path               | Description                                |
|--------|--------------------|--------------------------------------------|
| GET    | `/`                | Service health-check / identity            |
| GET    | `/api/model/status`| ML model telemetry, metrics & data freshness |
| GET    | `/api/sync/status` | Upstream ingestion source health & latency |
| GET    | `/api/users`       | Statutory officer directory (RBAC)         |
| GET    | `/api/users/:id`   | Single officer detail                      |

### Query Parameters — `/api/users`

| Param    | Example                        | Description                  |
|----------|--------------------------------|------------------------------|
| `role`   | `?role=Admin`                  | Filter by role               |
| `status` | `?status=Suspended`            | Filter by account status     |

## CORS

The server is pre-configured to accept requests from:
- `http://localhost:3000` (Next.js dev)
- `http://localhost:5173` (Vite dev)
- `*.vercel.app` (any Vercel preview / production deploy)

## Project Structure

```
├── package.json
├── README.md
└── src/
    ├── server.js               # Express entry point (middleware + mounts)
    └── routes/
        ├── model.routes.js     # /api/model/*
        ├── sync.routes.js      # /api/sync/*
        └── user.routes.js      # /api/users/*
```

## Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express 4.x
- **Security**: Helmet (HTTP headers)
- **Logging**: Morgan (request logs)
- **CORS**: cors (Vercel-aware origin allowlist)

## License

ISC — Team BhoomiDrishti, SIH 2026
