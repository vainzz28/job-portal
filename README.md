# 💼 Job Portal Full Stack Application (React + Node + MongoDB)

A complete **Full Stack Job Portal System** developed using **React.js (Frontend)** and **Node.js + Express.js + MongoDB (Backend)** with **JWT Authentication** and **Role-Based Access Control**.

This project allows candidates to search and apply for jobs, while recruiters can post jobs and manage applications.

---

## 🚀 Tech Stack Used

### Frontend
- React.js
- React Router DOM
- Axios
- CSS (Modern UI)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt Password Encryption
- Role-Based Access (Candidate / Recruiter / Admin)

---

## 🔥 Features

### 👤 Authentication
- User Registration
- User Login
- JWT Token-based Authentication
- Secure Password Hashing (bcrypt)

### 🧑 Candidate Module
- Browse jobs
- Search jobs by title
- Filter jobs by location
- Apply to jobs with resume link
- View applied jobs and application status

### 🧑‍💼 Recruiter Module
- Recruiter dashboard
- Post new jobs
- Add job description, salary, job type, skills
- View applications (backend supported)

### ⚙️ Admin (Optional)
- Admin role supported for future extensions

---

## 📂 Folder Structure

job-portal-fullstack/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
│
└── README.md

---

## ⚡ Setup Instructions (Run Locally)

### ✅ Step 1: Install MongoDB
Make sure MongoDB is installed and running.

Test MongoDB:
mongosh

---

## 🖥️ Backend Setup

### ✅ Step 2: Go to backend folder
cd backend

### ✅ Step 3: Install backend dependencies
npm install

### ✅ Step 4: Create `.env` file
Inside backend folder create `.env` and add:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/job_portal_db
JWT_SECRET=your_super_secret_key

### ✅ Step 5: Start backend server
npm start

Backend runs at:
http://localhost:5000

---

## 🌐 Frontend Setup

### ✅ Step 6: Open a new terminal and go to frontend folder
cd frontend

### ✅ Step 7: Install frontend dependencies
npm install

### ✅ Step 8: Start frontend
npm start

Frontend runs at:
http://localhost:3000

---

## 🔗 API Endpoints (Backend)

### Auth
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/profile

### Jobs
- GET /api/jobs
- GET /api/jobs/:id
- POST /api/jobs (Recruiter only)
- DELETE /api/jobs/:id (Recruiter/Admin)

### Applications
- POST /api/applications/apply (Candidate)
- GET /api/applications/my (Candidate)
- GET /api/applications/all (Recruiter)
- PUT /api/applications/:id/status (Recruiter)

---

## 👨‍💻 How to Use

### Candidate
1. Register as candidate
2. Login
3. Browse jobs
4. Apply using resume link
5. Track application status

### Recruiter
1. Register as recruiter
2. Login
3. Open recruiter dashboard
4. Post jobs
5. View applications (backend supported)

---

## 🌟 Future Improvements
- Resume upload support
- Admin dashboard UI
- Application status management UI
- Job bookmarking
- Email notifications
- Deploy on Render / Vercel

---

## 📌 Author
Developed as an advanced Full Stack project for portfolio and placement preparation.
