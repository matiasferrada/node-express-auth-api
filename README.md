# Node Express Auth API

REST API built with Node.js and Express, focused on authentication, authorization and role-based access control.

---

## 📌 Overview

This project is a backend API that simulates a real authentication system used in web and mobile applications.
It includes user login, JWT-based authentication and protected routes based on user roles.

The goal of this project is to demonstrate backend architecture, security concepts and full stack integration readiness.

---

## 🛠 Tech Stack

- Node.js
- Express
- JSON Web Tokens (JWT)
- bcrypt (password hashing)
- Middleware-based architecture
- REST API design

---

## 🔐 Authentication Flow (How it works)

1. A user sends credentials (email and password) to the backend.
2. The backend validates the credentials.
3. If valid, the backend generates a JWT token.
4. The frontend stores the token.
5. For protected requests, the frontend sends the token in the Authorization header.
6. The backend validates the token and checks user permissions.

This flow is commonly used in real-world applications.

---

## 📍 Endpoints

### Auth
- **POST /api/auth/login**  
  Authenticates a user and returns a JWT token.

### Admin (Protected)
- **GET /api/admin/secret**  
  Accessible only by users with `admin` role.  
  Requires a valid Bearer token.

---

## 👤 Demo User

Use the following credentials to test the API:
