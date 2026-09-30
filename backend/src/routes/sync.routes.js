/**
 * Upstream Ingestion Sync Status Controller
 * GET /api/sync/status
 *
 * Returns real-time health, latency, and last-sync metrics
 * for every external data source the platform ingests from.
 */

const express = require("express");
const router = express.Router();

/**
 * Mock upstream source registry.
 * In production these would be fetched from a monitoring table or
 * health-check pings against each upstream API.
 */
const UPSTREAM_SOURCES = [
  {
    id: "state-land-records",
    name: "State Land Records (RoR / Bhulekh API)",
    description:
      "Rights of Record digitized land parcels from state revenue departments (Bhulekh, Dharitri, Bhoomi portals).",
    endpoint: "https://bhulekh.gov.in/api/v2/ror",
    latencyMs: 42,
    lastSyncAgo: "14m ago",
    lastSyncTimestamp: new Date(Date.now() - 14 * 60 * 1000).toISOString(),
    status: "active",
    statusLabel: "Active",
    recordsSynced: 128_450,
    syncFrequency: "Every 15 minutes",
  },
  {
    id: "pfms-treasury",
    name: "PFMS Treasury",
    description:
      "Public Financial Management System — compensation disbursement and treasury release tracking.",
    endpoint: "https://pfms.nic.in/api/v1/treasury",
    latencyMs: 118,
    lastSyncAgo: "2h ago",
    lastSyncTimestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    status: "synced",
    statusLabel: "Synced",
    recordsSynced: 34_712,
    syncFrequency: "Every 2 hours",
  },
  {
    id: "parivesh-moefcc",
    name: "PARIVESH MoEFCC",
    description:
      "Ministry of Environment, Forest and Climate Change — environmental / forest clearance status for acquisition parcels.",
    endpoint: "https://parivesh.nic.in/api/v1/clearance",
    latencyMs: 340,
    lastSyncAgo: "6h ago",
    lastSyncTimestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    status: "warning",
    statusLabel: "Timeout Retry / Sync Warn",
    recordsSynced: 8_231,
    syncFrequency: "Every 6 hours",
    warning:
      "Last sync attempt timed out at 30 s. Auto-retry scheduled. Partial data may be stale.",
  },
];

router.get("/status", (_req, res) => {
  const healthySources = UPSTREAM_SOURCES.filter((s) => s.status !== "warning").length;
  const totalSources = UPSTREAM_SOURCES.length;

  res.json({
    success: true,
    data: {
      summary: {
        totalSources,
        healthySources,
        degradedSources: totalSources - healthySources,
        overallHealth:
          healthySources === totalSources ? "all_green" : "degraded",
      },
      sources: UPSTREAM_SOURCES,
      timestamp: new Date().toISOString(),
    },
  });
});

module.exports = router;
