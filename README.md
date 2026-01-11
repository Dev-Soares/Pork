<h1 align="center">
  <br>
  🏗️ <br>
  ProjectBuilder
  <br>
</h1>

<h4 align="center">Visualize, Model, and Generate your System Architecture.</h4>

<p align="center">
  <a href="#-about">About</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-api-docs">API Docs</a> •
  <a href="#-author">Author</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-success.svg?style=flat-square&color=2E8B57" alt="Status">
  <img src="https://img.shields.io/badge/react-v19-blue?style=flat-square&logo=react" alt="React">
  <img src="https://img.shields.io/badge/vite-v7-purple?style=flat-square&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/node-v20-green?style=flat-square&logo=nodedotjs" alt="Node">
  <img src="https://img.shields.io/badge/docker-enabled-blue?style=flat-square&logo=docker" alt="Docker">
  <img src="https://img.shields.io/badge/postgresql-db-336791?style=flat-square&logo=postgresql" alt="Postgres">
  <img src="https://img.shields.io/badge/license-ISC-lightgrey?style=flat-square" alt="License">
</p>

<br>

## 🔖 About

**ProjectBuilder** is an interactive visual tool designed for software developers and architects to design system infrastructures and architectures using an intuitive "Drag & Drop" interface.

Unlike generic drawing tools, ProjectBuilder is **tech-centric**, featuring a massive library of real-world icons (AWS, Azure, Languages, Frameworks) and allowing users to save and share diagrams via unique IDs without the need for mandatory registration.

---

## ✨ Features

* **🎨 Visual Modeling:** Build complex diagrams on an infinite canvas using **React Flow**.
* **💾 Persistence:** Save your progress and retrieve diagrams later using a unique Project ID.
* **🔗 Easy Sharing:** Generate access tokens or simply share the Project ID to collaborate.
* **📚 Tech Library:** Hundreds of categorized icons including Cloud Providers, Databases, and DevTools.
* **🎓 Onboarding:** Integrated interactive tutorial using **Intro.js** to guide new users.
* **📱 Responsive:** Fully adaptive interface working seamlessly on Desktop and Mobile devices.

---

## 🚀 Tech Stack

This project is built with the latest bleeding-edge technologies in the JavaScript ecosystem.

### Frontend
| Technology | Description |
| :--- | :--- |
| **React 19** | Latest core library for building the UI. |
| **Vite** | Next-gen build tool for ultra-fast development. |
| **Tailwind CSS v4** | Modern utility-first CSS framework. |
| **React Flow** | Powerful library for node-based diagramming. |
| **Axios** | Promise-based HTTP client. |
| **Intro.js** | User onboarding and step-by-step guide. |

### Backend
| Technology | Description |
| :--- | :--- |
| **Node.js v20** | Javascript runtime. |
| **Express** | Minimalist web framework for the API. |
| **Prisma ORM** | Next-generation Node.js and TypeScript ORM. |
| **PostgreSQL** | robust open-source relational database. |
| **Swagger** | API documentation generator. |
| **JWT** | Secure token generation for project access. |

### Infrastructure
* **Docker & Docker Compose:** Full containerization of the Frontend, Backend, and Database for consistent environments.

---

## 🐳 Getting Started

The most efficient way to run this project is using Docker.

### Prerequisites
* **Docker** and **Docker Compose** installed on your machine.

### Step-by-Step

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/bernardosoares30/project-builder.git](https://github.com/bernardosoares30/project-builder.git)
    cd project-builder
    ```

2.  **Configure Environment Variables:**
    Create a `.env` file in the `backend/` directory based on `.env.example`:
    ```bash
    # backend/.env
    DB_USER=postgres
    DB_PASSWORD=postgres
    DB_NAME=projectbuilder
    JWT_SECRET=your_secret_key
    # DATABASE_URL is constructed automatically within Docker, but looks like:
    # postgresql://postgres:postgres@db:5432/projectbuilder?schema=public
    ```

3.  **Start the Application:**
    Run the following command in the root directory:
    ```bash
    docker-compose up --build
    ```

4.  **Access the Services:**
    * **Frontend:** `http://localhost:5173`
    * **Backend API:** `http://localhost:3000`
    * **Swagger Docs:** `http://localhost:3000/api-docs`

---

## 🔌 API Endpoints

The API is fully documented via Swagger. Here are the core resources:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/diagram/create-diagram` | Creates a new diagram and returns a unique ID. |
| `GET` | `/api/diagram/:id` | Retrieves nodes and edges for a specific diagram. |
| `PUT` | `/api/diagram/save-diagram/:id` | Updates the structure of an existing diagram. |
| `DELETE`| `/api/diagram/delete-diagram/:id` | Deletes a diagram permanently. |
| `POST` | `/api/diagram/generate-token/:id` | Generates a temporary access token for sharing. |

---

## 📂 Project Structure

```text
ProjectBuilder/
├── backend/
│   ├── src/
│   │   ├── controllers/   # Request logic
│   │   ├── services/      # Business logic & DB interaction
│   │   ├── routes/        # API Routes definition
│   │   └── prisma/        # Database Schema & Migrations
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/    # Modular UI Components
│   │   │   ├── diagramComponents/ # React Flow logic
│   │   │   └── ...
│   │   ├── contexts/      # Global State (Diagram, Alert)
│   │   ├── hooks/         # Custom React Hooks
│   │   └── pages/         # Application Views
│   └── Dockerfile
└── docker-compose.yml     # Container Orchestration
