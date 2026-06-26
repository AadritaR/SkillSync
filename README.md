# SkillSync - Personalized Learning Roadmap Generator

A full-stack web application that generates phase-wise learning roadmaps based on a user's career goal, experience level, daily time availability, and learning purpose.


---

## What It Does

Users answer 4 questions:

1. Which tech path do you want to follow?
2. What is your current level?
3. How much time can you give daily?
4. What is your main goal?

The application generates a personalized, phase-wise learning roadmap with estimated completion timelines, curated practice tasks, project ideas, and resource links - all tailored to the user's specific inputs.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite 8, Tailwind CSS 4 |
| Backend | Spring Boot 3.5, Java 17 |
| API | REST (JSON) |
| Frontend Deployment | Vercel |
| Backend Deployment | Railway |

---

## Architecture
User → React Frontend (Vercel)

↓ POST /api/roadmap

Spring Boot Backend (Railway)

↓

RoadmapService → returns structured JSON

↓

React renders phase-wise roadmap

The frontend collects user inputs and sends a `POST` request to the Spring Boot REST API. The backend processes the inputs, calculates estimated days per phase based on daily time availability, and returns a structured JSON response. The frontend renders the result dynamically.

---

## Features

- ⏱️ **Time-Adaptive Planning** — Daily hours input adjusts estimated completion days per phase
- 🛠️ **Project-Based Learning** — Each phase includes a suggested portfolio project with rationale
- 📚 **Curated Resources** — Phase-specific links to resources like official documentation and learning platforms
- 🔍 **Explore Mode** — Browse any roadmap without going through the question flow

---

## Running Locally

### Prerequisites
- Node.js 18+
- Java 17
- Maven (via included wrapper)

### Frontend
```bash
npm install
npm run dev
```
Runs on `http://localhost:5173`

### Backend
```bash
cd backend
.\mvnw spring-boot:run
```
Runs on `http://localhost:8080`

The Vite proxy forwards `/api` requests from the frontend to the backend automatically during local development.

---

## Project Structure
SkillSync/

├── backend/

│   ├── .mvn/

│   ├── src/

│   │   ├── main/

│   │   │   ├── java/com/skillsync/backend/

│   │   │   │   ├── BackendApplication.java

│   │   │   │   ├── CorsConfig.java

│   │   │   │   ├── RoadmapController.java

│   │   │   │   ├── RoadmapRequest.java

│   │   │   │   └── RoadmapService.java

│   │   │   └── resources/

│   │   └── test/

│   └── pom.xml

├── public/

├── src/

│   ├── assets/

│   ├── App.jsx

│   ├── main.jsx

│   └── index.css

├── vite.config.js

└── package.json
