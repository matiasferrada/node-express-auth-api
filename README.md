# Node Express Auth API

REST API built with Node.js and Express, focused on authentication, authorization and role-based access control.

---

## 🇬🇧 English

### 📌 Overview
This project is a backend REST API that simulates a real-world authentication system used in web and mobile applications.
It includes user login, JWT-based authentication and protected routes based on user roles.

The goal of this project is to demonstrate backend architecture, security concepts and readiness for full stack integration.

---

### 🛠 Tech Stack
- Node.js
- Express
- JSON Web Tokens (JWT)
- bcrypt (password hashing)
- Middleware-based architecture
- REST API design

---

### 🔐 Authentication Flow (How it works)
1. A user sends credentials (email and password) to the backend.
2. The backend validates the credentials.
3. If valid, the backend generates a JWT token.
4. The frontend stores the token.
5. For protected requests, the frontend sends the token in the Authorization header.
6. The backend validates the token and checks user permissions.

This flow is commonly used in real-world applications.

---

### 📍 Endpoints

#### Auth
- **POST /api/auth/login**  
  Authenticates a user and returns a JWT token.

#### Admin (Protected)
- **GET /api/admin/secret**  
  Accessible only by users with `admin` role.  
  Requires a valid Bearer token.

---

### 👤 Demo User

Use the following credentials to test the API:

- **Email:** admin@example.com  
- **Password:** admin123  
- **Role:** admin  

---

### 🧪 Example Request (Protected Route)

```http
GET /api/admin/secret
Authorization: Bearer YOUR_JWT_TOKEN
```
---

## 🇪🇸 Español

### 📌 Descripción General
Este proyecto es una API REST backend que simula un sistema real de autenticación utilizado en aplicaciones web y móviles.
Incluye inicio de sesión, autenticación basada en JWT y rutas protegidas según el rol del usuario.

El objetivo del proyecto es demostrar arquitectura backend, conceptos de seguridad y preparación para integración full stack.

---

### 🛠 Tecnologías Utilizadas
- Node.js
- Express
- JSON Web Tokens (JWT)
- bcrypt (hash de contraseñas)
- Arquitectura basada en middleware
- Diseño de API REST

---

### 🔐 Flujo de Autenticación (Cómo funciona)
1. Un usuario envía sus credenciales (email y contraseña) al backend.
2. El backend valida las credenciales.
3. Si son correctas, el backend genera un token JWT.
4. El frontend guarda el token.
5. Para rutas protegidas, el frontend envía el token en el header Authorization.
6. El backend valida el token y verifica los permisos del usuario.

Este flujo es común en aplicaciones reales.

---

### 📍 Endpoints

#### Autenticación
- **POST /api/auth/login**  
  Autentica al usuario y devuelve un token JWT.

#### Admin (Protegido)
- **GET /api/admin/secret**  
  Accesible solo para usuarios con rol `admin`.  
  Requiere token Bearer válido.

---

### 👤 Usuario de Prueba

Usá las siguientes credenciales para probar la API:

- **Email:** admin@example.com  
- **Password:** admin123  
- **Rol:** admin  

---

### 🧪 Ejemplo de Request (Ruta Protegida)

```http
GET /api/admin/secret
Authorization: Bearer YOUR_JWT_TOKEN
```
