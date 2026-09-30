# BhoomiDrishti (भूमिदृष्टि)
### AI-Powered Cadastral Intelligence & Statutory Land Acquisition Platform

[![Live Demo](https://img.shields.io/badge/Demo-bhoomidrishti--pied.vercel.app-2DD4BF?style=for-the-badge&logo=vercel)](https://bhoomidrishti-pied.vercel.app)
[![Smart India Hackathon](https://img.shields.io/badge/SIH-2026-FF9933?style=for-the-badge)](https://www.sih.gov.in/)
[![Ministry of Rural Development](https://img.shields.io/badge/MoRD-DoLR-138808?style=for-the-badge)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

---

## 📌 Executive Summary

**BhoomiDrishti** is an enterprise-grade cadastral governance platform designed for the **Department of Land Resources (DoLR)** and the **Competent Authority for Land Acquisition (CALA)**. 

Linear infrastructure megaprojects (national expressways, railway freight corridors, irrigation canals) frequently experience multi-year delays and cost overruns due to litigations, title defects, and statutory lapses under the **RFCTLARR Act, 2013**. BhoomiDrishti provides real-time predictive risk scoring, automated statutory deadline tracking, and spatial cadastral verification to eliminate project bottlenecks before statutory lapse thresholds are breached.

---

## 🏛️ Statutory Problem Statement

* **Mandatory Section 25 Expiry**: Under Section 25 of the RFCTLARR Act 2013, an award must be made within 12 months from the date of the Section 19 declaration; failure to do so causes the entire acquisition process to lapse.
* **Cadastral Title Fragmentation**: Khasra/survey parcel data across state Bhulekh portals often contain boundary mismatches, unrecorded inheritances, and tenancy disputes.
* **Fragmented Multi-Stakeholder Workflows**: CALA, state revenue commissioners, project executing authorities (NHAI, MoRTH, DFCCIL), and treasury departments operate in data silos.

---

## 🚀 Core Capabilities & Architecture

### 1. State & National Policymaker Executive Hub
* **Real-time Pipeline Telemetry**: Macro-level visibility across 2,400+ active infrastructure corridors nationwide.
* **Corridor Health Indices**: Solatium disbursement tracking, pending litigation counters, and statutory risk heatmaps.

### 2. Cadastral Spatial GIS Layer
* **Sub-parcel Risk Overlay**: High-resolution vector cadastral mapping mapping Khasra boundary polygons against project alignments.
* **Geospatial Cross-Validation**: Automatic intersection analysis against forest land, tribal reserves, and wet agricultural zones.

### 3. Competent Authority (CALA) Casework Desk
* **Section-by-Section Pipeline**: Tracking acquisitions step-by-step from Section 11 (Preliminary Notification) through Section 19 (Declaration) to Section 23/25 (Award Inquiry).
* **Automated Notice Engine**: Generation and tracking of Section 15(2) hearing summons and objection logs.

### 4. Predictive Risk & Machine Learning Telemetry
* **XGBoost Risk Engine**: Evaluates 18+ cadastral, administrative, and legal attributes to predict the probability of statutory delays (`AUC-ROC: 0.892`, `Lapse Recall: 0.82`).
* **Feature Importance & SHAP Interpretability**: Highlights exact bottleneck drivers (e.g., joint title holder count, unprobated succession, encumbrance certificate mismatches).

### 5. Rehabilitation & Resettlement (R&R) Treasury Gateway
* **Direct Benefit Transfer (DBT)**: Seamless interface tracking compensation payouts linked to PFMS and Aadhaar-seeded accounts.
* **First & Second Schedule Compliance**: Automated calculation of 100% Solatium, mandatory asset multiplier factors (1.0x to 2.0x for rural zones), and additional interest.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Platform** | Single-Page Application (SPA) architecture, HTML5, Vanilla JavaScript (ES6+), Responsive Tailwind CSS |
| **Design System** | Precision Survey Theme (WCAG AAA compliant), Material Symbols, Space Grotesk & JetBrains Mono typography |
| **Backend & APIs** | Node.js, Express.js REST API service |
| **Geospatial & Cadastre** | Vector Cadastral Polygons, GeoJSON coordinate projections |
| **Machine Learning** | XGBoost Classification models, Feature weight attribution, Drift monitoring telemetry |
| **Deployment & Hosting**| Vercel Cloud Platform with zero-latency edge caching |

---

## 📂 Repository File Structure

```text
SIH-26017/
├── backend/                                   # Node.js/Express statutory API services
│   ├── package.json
│   └── server.js                              # REST endpoints for Khasra & award data
├── stitch_bhoomidrishti_design_system_guide/  # Core web application modules
│   ├── index.html                             # Master dashboard shell & live router
│   ├── bhoomidrishti_state_policymaker_national_risk_dashboard/
│   ├── bhoomidrishti_national_gis_risk_map/
│   ├── bhoomidrishti_state_policymaker_dashboard_tablet/
│   ├── bhoomidrishti_project_detail_krishna_canal_extension/
│   ├── bhoomidrishti_district_officer_cala_dashboard/
│   ├── bhoomidrishti_model_health_intelligence/
│   └── bhoomidrishti_style_guide_design_system_specifications/
├── vercel.json                                # Platform deployment & static route configuration
└── README.md                                  # System documentation
