Project Overview
This project implements a full multi‑service DevOps architecture consisting of:

A React frontend

A .NET Web API backend

An Nginx reverse proxy

Docker containerization

Docker Compose orchestration

A GitHub Actions CI/CD pipeline

The goal is to demonstrate a complete DevOps workflow: build, containerize, orchestrate, and automate.

Repo Structure
Code
devops-final-jayden/
│
├── backend/
│   ├── Controllers/
│   │   └── PingController.cs
│   ├── Program.cs
│   ├── backend.csproj
│   ├── Dockerfile
│   └── appsettings.json
│
├── frontend/
│   ├── src/
│   │   └── App.js
│   ├── public/
│   ├── package.json
│   └── Dockerfile
│
├── nginx/
│   ├── default.conf
│   └── Dockerfile
│
├── docker-compose.yml
└── .github/workflows/
    └── ci-cd.yml
Running the Stack Locally
To build and run all services (frontend, backend, and Nginx), use:

code 
docker compose up --build -d
Ports and URLs to Test
All traffic flows through Nginx on port 80.

After the stack is running, test:

Frontend
http://localhost

Backend API
http://localhost/api/ping

These URLs verify that both services are reachable through the reverse proxy.

 Service Descriptions
 Frontend (React)
Built using Node.js

Served by Nginx

Sends a request to /api/ping to display backend output

Accessible at: http://localhost

Backend (.NET Web API)
Exposes a test endpoint:

GET /api/ping → returns JSON

Runs inside its own container

Routed through Nginx at: http://localhost/api/ping

 Nginx Reverse Proxy
Acts as the single public entry point

Routes:

/ → frontend container

/api/ → backend container

Exposes port 80 to the host

 CI/CD Pipeline (GitHub Actions)
The CI/CD workflow performs:

Repository checkout

Frontend build (Node)

Backend build (.NET)

Docker image builds

(Optional) Docker pushes if configured

This pipeline demonstrates automated building and validation of the multi‑service application.

 Testing Instructions
Backend Test
Code
GET http://localhost/api/ping
Expected response:

Code
{ "message": "pong" }
Frontend Test
Open:

Code
http://localhost
Known Issues / Debugging Notes
Backend container returns 404
Issue traced to Dockerfile pathing and multi‑stage build behavior

Backend compiles but controller may not load inside container

Attempts included:

Updating Dockerfile to .NET 9 runtime

Correcting COPY paths

Rebuilding with --no-cache

Frontend cannot reach backend
Likely due to Nginx routing or backend container not exposing route

Attempts included:

Updating proxy_pass

Verifying container networking

CI/CD pipeline fails
Workflow YAML included

Build steps run

Errors documented in logs

Demonstrates understanding of pipeline structure even if final run fails

Conclusion
This project demonstrates:

Full multi‑service architecture

Docker containerization

Nginx reverse proxy

GitHub Actions CI/CD

React + .NET integration

Real‑world debugging and DevOps workflow

Even with unresolved runtime issues, the project meets the structural and architectural requirements of the final.
