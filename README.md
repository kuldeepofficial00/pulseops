# PulseOps — Agile Operations & Workflow Platform

PulseOps is an enterprise-grade operations and team workflow management system built with the MERN stack.

## Architecture
- Backend: Node.js, Express.js, MongoDB (Mongoose), JWT Authentication, RBAC
- Frontend: React, Context API, Modular CSS Architecture
- Deployment: Docker & Docker Compose containerized setup

## Security & Performance
- End-to-end JWT authentication with bearer header authorization
- Indexed compound database queries for fast execution
- Strict CORS configuration and centralized exception handler

## Containerized Deployment
Run the entire platform with Docker Compose:
- docker-compose up --build -d
