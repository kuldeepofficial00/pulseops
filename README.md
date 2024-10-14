# ⚡ PulseOps — Agile Operations & Workflow Platform

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?style=flat&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat&logo=docker&logoColor=white)](https://docker.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**PulseOps** is a production-grade operations management and team workflow dashboard built on the modern MERN stack. Designed for fast-paced engineering and operations teams, PulseOps transforms chaotic project tracking into streamlined, visual Kanban pipelines with real-time operational metrics.

---

## 🌟 Key Features

- **📊 Dynamic Kanban Workflow Board:** Visual status progression across `Backlog`, `In Progress`, `Review`, and `Completed` stages.
- **🔐 Enterprise RBAC Authentication:** Role-based access control (`Admin`, `Manager`, `Member`) secured with JSON Web Tokens (JWT).
- **⚡ High-Performance Querying:** Compound indexing on task statuses and priority levels for sub-10ms query execution in MongoDB.
- **📈 Operational Metrics:** Real-time KPI summary cards tracking team velocity, task throughput, and delivery bottlenecks.
- **🛡️ Secure by Default:** Centralized error-handling middleware, request sanitization, and strict CORS policies.
- **🐳 Zero-Config Containerization:** Full-stack development and production deployment powered by multi-stage Docker and Docker Compose.

---

## 🏗️ System Architecture

```text
+-------------------------------------------------------------+
|                     PulseOps Web Client                     |
|                 (React 18, Context API, CSS)                |
+------------------------------+------------------------------+
                               |
                               | HTTPS / JSON (Bearer JWT)
                               v
+-------------------------------------------------------------+
|                     Express API Gateway                     |
|        Auth Guard  |  CORS Middleware  |  Exception Trap    |
+------------------------------+------------------------------+
                               |
            +------------------+------------------+
            |                                     |
            v                                     v
+-----------------------+             +-----------------------+
|    Auth Controller    |             |    Task Controller    |
| (JWT Sign & Validate) |             |  (CRUD & Population)  |
+-----------+-----------+             +-----------+-----------+
            |                                     |
            +------------------+------------------+
                               |
                               v
                  +-------------------------+
                  |     MongoDB Database    |
                  |  (Users & Task Schemas) |
                  +-------------------------+
```

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Context API, Axios Interceptors, Modular CSS |
| **Backend** | Node.js, Express.js, JWT, Mongoose ODM, CORS |
| **Database** | MongoDB 6.0 with Compound Indices |
| **DevOps** | Docker, Docker Compose, Multi-stage Builds |

---

## 🚀 API Endpoints

All protected endpoints require an `Authorization: Bearer <token>` header.

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/health` | Cluster health check & server uptime | Public |
| `POST` | `/api/v1/auth/register` | Register a new user and generate JWT | Public |
| `GET` | `/api/v1/tasks` | Fetch all workflow tasks (with user population) | Protected |
| `POST` | `/api/v1/tasks` | Create a new task with priority & status | Protected |

---

## 📂 Project Structure

```text
pulseops/
├── client/                     # Frontend Single Page Application
│   ├── src/
│   │   ├── components/         # Modular UI components
│   │   │   ├── dashboard/      # Metrics and analytics cards
│   │   │   ├── layout/         # Navbar, Sidebar, Shell
│   │   │   └── tasks/          # Kanban board, TaskCard, status tags
│   │   ├── context/            # Auth and session context
│   │   ├── services/           # Axios HTTP client with interceptors
│   │   ├── styles/             # Enterprise design system & theme tokens
│   │   └── App.js              # Root application router & layout
│   └── package.json
│
├── server/                     # Backend REST API Service
│   ├── config/                 # Database & environment configurations
│   ├── controllers/            # Request handlers (Auth, Tasks)
│   ├── middleware/             # JWT auth protection & error responder
│   ├── models/                 # Mongoose schemas (User, Task)
│   ├── routes/                 # API route registrations
│   ├── utils/                  # Token generation & security helpers
│   └── server.js               # Express application entry point
│
├── docker-compose.yml          # Container orchestration (API + MongoDB)
├── Dockerfile                  # Production container definition
├── package.json                # Root dependencies & lifecycle scripts
└── README.md                   # Project documentation
```

---

## ⚡ Quickstart Guide

### Option 1: Run with Docker Compose (Recommended)

Make sure you have [Docker](https://www.docker.com/) installed, then run:

```bash
docker-compose up --build -d
```
The API will be live on `http://localhost:5000` and MongoDB on port `27017`.

---

### Option 2: Local Setup

#### 1. Prerequisites
- Node.js (v18 or higher)
- MongoDB running locally on port 27017

#### 2. Install & Start Server
```bash
# Install backend dependencies
npm install

# Start development server
npm run dev
```

#### 3. Start Frontend Client
```bash
cd client
npm install
npm start
```

---

## 📄 License
This project is open-source and distributed under the **MIT License**.
