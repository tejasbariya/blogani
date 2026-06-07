# ✨ BlogAni

A modern, full-stack blogging platform built with **Node.js**, **Express.js**, and **MongoDB**.

BlogAni empowers users to create, publish, and discuss content through a secure and scalable platform. Designed with the **MVC architecture**, it combines clean code organization, cloud-based media management, and an engaging user experience to deliver a complete blogging solution.

---

## 🌐 Live Demo

🔗 **https://blogani.onrender.com**

---

## 📸 Preview

> Add screenshots or GIFs showcasing the application

```md
/assets/homepage.png
/assets/blog-page.png
/assets/comments.png
```

---

## ✨ Features

### 🔐 Authentication & Security

* JWT-based authentication
* Secure cookie sessions
* Password hashing and protection
* Route-level authorization
* Middleware-driven access control
* Environment-based secret management

### 📝 Blog Publishing

* Create and publish blog posts
* Upload cover images
* Dynamic content rendering
* Author-owned content management

### ☁️ Cloud Media Management

* Cloudinary integration
* Secure image uploads
* Optimized media delivery
* Scalable cloud storage

### 💬 Community Discussions

* Nested comment threads
* Multi-level replies
* Interactive conversations
* Enhanced reader engagement

### 🎨 Modern User Experience

* Responsive design
* Tailwind CSS styling
* Server-side rendering with EJS
* Reusable UI components

---

## 🏗 Architecture

BlogAni follows the **MVC (Model–View–Controller)** architecture to ensure scalability, maintainability, and separation of concerns.

```text
blogani/
│
├── models/           # Database Schemas
├── routes/           # Application Routes
├── controllers/      # Business Logic
├── middlewares/      # Authentication & Authorization
├── utils/            # Utility Functions
├── views/            # EJS Templates
│   └── partials/     # Reusable Components
├── public/           # Static Assets
├── config/           # Configuration Files
└── app.js            # Application Entry Point
```

### Benefits

* Clean project structure
* Scalable architecture
* Easier maintenance
* Improved collaboration
* Better code organization

---

## 🛠 Tech Stack

| Category        | Technology         |
| --------------- | ------------------ |
| Runtime         | Node.js            |
| Framework       | Express.js         |
| Database        | MongoDB            |
| ODM             | Mongoose           |
| Authentication  | JWT                |
| Template Engine | EJS                |
| Styling         | Tailwind CSS       |
| Media Storage   | Cloudinary         |
| File Uploads    | express-fileupload |
| Security        | Node.js Crypto     |

---

## ⚡ Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js (v18 or later recommended)
* MongoDB
* Git

---

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/tejasbariya/blogani.git

cd blogani
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8000

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

### Run the Application

#### Development Mode

```bash
npm run dev
```

#### Production Mode

```bash
npm start
```

---

Open your browser and visit:

```text
http://localhost:8000
```

---

## 🔒 Security

BlogAni incorporates several security best practices:

* JWT authentication
* Password hashing
* Protected routes
* Secure cookie handling
* Environment variable protection
* Secure cloud-based media storage

---

## 📂 Core Modules

### 👤 User Management

* User registration
* User login
* Authentication
* Authorization

### 📝 Blog System

* Create blog posts
* View published content
* Manage blog entries

### 💬 Comment Engine

* Nested replies
* Discussion threads
* Community interaction

### ☁️ Media Service

* Cloudinary uploads
* Image optimization
* Media asset management

---

## 🚀 Future Roadmap

* Rich Text Editor
* Advanced Search
* User Profiles
* Post Likes & Reactions
* Bookmark System
* Email Verification
* Google OAuth Authentication
* GitHub OAuth Authentication
* Admin Dashboard
* Analytics & Insights

---

## 🤝 Contributing

Contributions are welcome and appreciated.

### Steps to Contribute

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes

```bash
git commit -m "Add amazing feature"
```

4. Push your branch

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

## 📊 Project Goals

* Build a scalable blogging platform
* Enable secure content publishing
* Foster community engagement
* Follow modern development practices
* Maintain a clean MVC architecture

---

## 👨‍💻 Author

### Tejas Bariya

* GitHub: https://github.com/tejasbariya
* LinkedIn: https://www.linkedin.com/in/tejash-bariya/
* Email: [tejasbariya22@gmail.com](mailto:tejasbariya22@gmail.com)

---

## ⭐ Support

If you find this project useful:

* Star the repository
* Share it with others
* Contribute to its growth

---

## 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more details.

---

Built with ❤️ using Node.js, Express.js, MongoDB, Tailwind CSS, and Cloudinary.
