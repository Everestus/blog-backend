# 📝 Blog Platform Backend

A backend API for a blogging platform built with **Node.js, Express, and MongoDB**.  
It provides authentication, blog post management, comments, and role-based access control (user vs admin).  

---

## 🚀 Features

- **User Authentication**
  - Register and login with JWT
  - Role-based access: `user` and `admin`
- **Blog Posts**
  - Create, Read, Update, Delete (CRUD) blog posts
  - Only authors or admins can edit/delete posts
- **Comments**
  - Users can add comments on blog posts
  - Authors/admins can manage comments
- **Admin Features**
  - View all users
  - Delete any post or comment
- **Security**
  - Passwords hashed with bcrypt
  - JWT authentication middleware
- **Optional Enhancements**
  - Password reset (forgot password flow)
  - Email notifications (new post/comment)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Auth:** JWT, bcryptjs  
- **Other Tools:** dotenv, morgan, nodemon  

---

## 📂 Project Structure

blog-backend/
│── config/ # DB connection
│── controllers/ # Business logic for auth, posts, comments
│── middlewares/ # Auth & role-based middleware
│── models/ # Mongoose schemas (User, Post, Comment)
│── routes/ # API route definitions
│── server.js # App entry point
│── .env # Environment variables (ignored in git)
│── .gitignore
│── package.json


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Everestus/blog-backend.git
cd blog-backend

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret



Server will run at:
👉 http://localhost:5000

🔑 API Endpoints
Auth

POST /api/auth/register → Register a new user

POST /api/auth/login → Login user & get token

Posts

GET /api/posts → Get all posts

POST /api/posts → Create new post (auth required)

GET /api/posts/:id → Get single post

PUT /api/posts/:id → Update post (author/admin only)

DELETE /api/posts/:id → Delete post (author/admin only)

Comments

POST /api/comments/:postId → Add comment (auth required)

DELETE /api/comments/:id → Delete comment (author/admin only)

Admin

GET /api/admin/users → Get all users (admin only)

🧪 Testing with Postman

Register a user → /api/auth/register

Login → copy JWT token

Add token in Authorization → Bearer Token in Postman

Test CRUD routes for posts & comments

📜 License

This project is for educational purposes (assignment & portfolio).
Feel free to fork and extend! 🚀

👨‍💻 Author: Everestus


