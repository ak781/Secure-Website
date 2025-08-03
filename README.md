# Secure Student Portal

A secure student portal web application built using Node.js, Express, EJS, and MongoDB. It implements secure authentication, session management, and follows best practices for web development and security.

---

## Features

- User registration and login
- Password hashing using bcrypt
- Session-based authentication
- Role selection: Student or Admin
- UI using EJS templates and CSS
- MongoDB (local) integration using Compass

---

## Folder Structure
```bash
student-portal/
│
├── public/ 
├── views/ 
├── routes/ 
├── controllers/ 
├── models/ 
├── middleware/ 
├── .env 
├── app.js 
```


---

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) installed locally
- [MongoDB Compass](https://www.mongodb.com/products/compass) for GUI database access

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/student-portal.git
cd student-portal
```
2. **Install dependencies:**
```bash
npm install
```
3. **Start MongoDB locally**
    Make sure MongoDB is running on mongodb://localhost:27017.

4. **Create a .env file in the root folder and add:**
```bash
MONGO_URI=mongodb://localhost:27017/student_portal
SESSION_SECRET=your_session_secret
```

## Running the Application
```bash
node app.js
```



