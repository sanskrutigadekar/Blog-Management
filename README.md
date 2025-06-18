Sure bestie! Here’s a complete and professional README.md file for your Blog Management API project:

⸻


# 📝 Blog Management API

A RESTful Blog Management API built with **Node.js**, **Express**, and **MongoDB**, featuring user authentication, role-based access control, and full CRUD operations for blogs and comments.

---

## 🚀 Features

- User registration & login with JWT authentication
- Role-based access (Admin, Author, Reader)
- Create, read, update, delete (CRUD) for:
  - Blogs
  - Comments
- Middleware for authentication and authorization
- Organized project structure
- Postman collection for easy testing

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Testing**: Postman

---

## 📁 Project Structure

blog-management-api/
│
├── controllers/             # Business logic
├── middleware/              # Auth & role checks
├── models/                  # Mongoose schemas
├── routes/                  # API route handlers
├── postman/                 # Postman collection & environment
├── utils/                   # JWT utility functions
├── .env                     # Environment variables
├── .gitignore               # Ignored files
├── package.json             # Dependencies and scripts
├── README.md                # Project documentation
└── server.js                # Entry point

---

## ⚙️ Environment Variables

Create a `.env` file in the root with:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

⸻

📦 Installation & Setup

# 1. Clone the repo
git clone https://github.com/your-username/blog-management-api.git
cd blog-management-api

# 2. Install dependencies
npm install

# 3. Run the server
npm start

Server will run on http://localhost:5000/

⸻

📬 Postman Collection

Test the API using the Postman collection:
	•	📄 New Collection.postman_collection.json


⸻

🧪 API Endpoints (Sample)

🔐 Auth
	•	POST /api/auth/register – Register user
	•	POST /api/auth/login – Login user

👤 Users
	•	GET /api/users/ – Get all users (admin only)

📝 Blogs
	•	GET /api/blogs/ – Get all blogs
	•	POST /api/blogs/ – Create new blog (author only)
	•	PUT /api/blogs/:id – Edit a blog
	•	DELETE /api/blogs/:id – Delete a blog

💬 Comments
	•	GET /api/blogs/:id/comments – Get comments on a blog
	•	POST /api/blogs/:id/comments – Add comment to blog

⸻

👥 Roles & Permissions

Role	Permissions
Admin	Full access to all users, blogs, comments
Author	Can create/edit/delete own blogs, comment
Reader	Can read blogs and post comments
