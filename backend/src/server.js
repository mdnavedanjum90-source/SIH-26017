/**
 * BhoomiDrishti Backend — Entry Point
 * SIH-26017 | Ministry of Rural Development (DoLR)
 *
 * Initializes Express with security headers, CORS, request logging,
 * and mounts all API route modules.
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const modelRoutes = require("./routes/model.routes");
const syncRoutes = require("./routes/sync.routes");
const userRoutes = require("./routes/user.routes");

const app = express();
const PORT = process.env.PORT || 4000;

// ── Middleware ────────────────────────────────────────────────────────
// Security headers (XSS, HSTS, content-type sniffing, etc.)
app.use(helmet());

// CORS — allow Vercel frontend origins + localhost dev
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      /\.vercel\.app$/,          // any *.vercel.app preview/production deploy
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Request-ID"],
    credentials: true,
  })
);

// Request logging (combined Apache-style in prod, tiny in dev)
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// JSON body parser
app.use(express.json());

// ── Routes ───────────────────────────────────────────────────────────
app.use("/api/model", modelRoutes);
app.use("/api/sync", syncRoutes);
app.use("/api/users", userRoutes);

// Root health-check (useful for uptime monitors / Render / Railway)
app.get("/", (_req, res) => {
  res.json({
    service: "BhoomiDrishti API",
    version: "1.0.0",
    project: "SIH-26017",
    ministry: "Ministry of Rural Development (DoLR)",
    status: "operational",
    timestamp: new Date().toISOString(),
  });
});

// ── 404 Catch-all ────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: "Resource not found",
    hint: "Available endpoints: /api/model/status, /api/sync/status, /api/users",
  });
});

// ── Global Error Handler ─────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error("[BhoomiDrishti Error]", err.stack);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || "Internal server error",
  });
});

// ── Start ────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🛰️  BhoomiDrishti API listening on http://localhost:${PORT}`);
  console.log(`   Project  : SIH-26017`);
  console.log(`   Ministry : DoLR (Ministry of Rural Development)`);
  console.log(`   Mode     : ${process.env.NODE_ENV || "development"}\n`);
});

module.exports = app;
