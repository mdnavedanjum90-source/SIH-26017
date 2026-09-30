/**
 * Statutory User Directory / RBAC Controller
 * GET /api/users
 *
 * Returns the authorized officer directory with RBAC metadata,
 * MFA status, and jurisdiction assignments.
 */

const express = require("express");
const router = express.Router();

/**
 * Mock officer directory.
 * In production this would come from an IAM store (Keycloak / Azure AD)
 * with DoLR SSO integration.
 */
const OFFICERS = [
  {
    id: "usr_001",
    name: "Shri K. V. Rao",
    designation: "Additional Secretary, DoLR",
    email: "kv.rao@dolr.gov.in",
    role: "Admin",
    permissions: [
      "dashboard.read",
      "dashboard.write",
      "model.retrain",
      "users.manage",
      "audit.export",
    ],
    assignedJurisdiction: "National — All States & UTs",
    lastLogin: "2026-09-30T08:12:00Z",
    mfa: {
      enabled: true,
      method: "TOTP (Aadhaar-linked Authenticator)",
    },
    accountStatus: "Active",
    createdAt: "2024-11-01T00:00:00Z",
  },
  {
    id: "usr_002",
    name: "Smt. Aruna Sundaram",
    designation: "Joint Secretary (Land Reforms), DoLR",
    email: "aruna.sundaram@dolr.gov.in",
    role: "State Policymaker",
    permissions: [
      "dashboard.read",
      "dashboard.write",
      "reports.generate",
      "alerts.configure",
    ],
    assignedJurisdiction: "Maharashtra, Madhya Pradesh, Chhattisgarh",
    lastLogin: "2026-09-29T17:45:00Z",
    mfa: {
      enabled: true,
      method: "SMS OTP + TOTP",
    },
    accountStatus: "Active",
    createdAt: "2025-01-15T00:00:00Z",
  },
  {
    id: "usr_003",
    name: "Dr. V. Ramanathan",
    designation: "District Collector, Thanjavur",
    email: "v.ramanathan@tn.gov.in",
    role: "District Officer",
    permissions: [
      "dashboard.read",
      "cases.update",
      "escalation.raise",
    ],
    assignedJurisdiction: "Tamil Nadu — Thanjavur District",
    lastLogin: "2026-09-30T11:30:00Z",
    mfa: {
      enabled: true,
      method: "TOTP (Google Authenticator)",
    },
    accountStatus: "Active",
    createdAt: "2025-03-20T00:00:00Z",
  },
  {
    id: "usr_004",
    name: "Shri P. B. Salunkhe",
    designation: "Deputy Commissioner (Revenue), Pune Division",
    email: "pb.salunkhe@mh.gov.in",
    role: "District Officer",
    permissions: [
      "dashboard.read",
      "cases.update",
    ],
    assignedJurisdiction: "Maharashtra — Pune Division",
    lastLogin: "2026-09-28T09:10:00Z",
    mfa: {
      enabled: false,
      method: null,
    },
    accountStatus: "Suspended",
    suspensionReason: "MFA enrollment pending — account auto-locked per DoLR Circular 12/2026",
    createdAt: "2025-06-10T00:00:00Z",
  },
  {
    id: "usr_005",
    name: "Smt. Deepa Joshi",
    designation: "Under Secretary (IT & Digital Initiatives), DoLR",
    email: "deepa.joshi@dolr.gov.in",
    role: "Admin",
    permissions: [
      "dashboard.read",
      "dashboard.write",
      "model.retrain",
      "users.manage",
      "system.config",
    ],
    assignedJurisdiction: "National — All States & UTs",
    lastLogin: "2026-09-30T13:55:00Z",
    mfa: {
      enabled: true,
      method: "Hardware Token (YubiKey 5)",
    },
    accountStatus: "Active",
    createdAt: "2025-02-01T00:00:00Z",
  },
];

// GET /api/users — full directory
router.get("/", (req, res) => {
  const { role, status } = req.query;

  let filtered = [...OFFICERS];

  if (role) {
    filtered = filtered.filter(
      (o) => o.role.toLowerCase() === role.toLowerCase()
    );
  }
  if (status) {
    filtered = filtered.filter(
      (o) => o.accountStatus.toLowerCase() === status.toLowerCase()
    );
  }

  res.json({
    success: true,
    data: {
      total: filtered.length,
      officers: filtered,
    },
    timestamp: new Date().toISOString(),
  });
});

// GET /api/users/:id — single officer detail
router.get("/:id", (req, res) => {
  const officer = OFFICERS.find((o) => o.id === req.params.id);

  if (!officer) {
    return res.status(404).json({
      success: false,
      error: `Officer with id '${req.params.id}' not found`,
    });
  }

  res.json({ success: true, data: officer });
});

module.exports = router;
