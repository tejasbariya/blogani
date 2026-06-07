```markdown
# BlogAni ✍️

A clean, fast, and fully-featured blogging platform built intentionally with a modern Node.js MVC architecture. It features secure custom JWT authentication, image uploading, and a nested conversational threading (comments) system.

## ✨ Features

- **Custom Authentication:** Secure, cookie-based JWT authentication with password hashing (Crypto/SHA256).
- **Component-Based UI:** Modular frontend architecture using EJS partials and Tailwind CSS.
- **Media Management:** Dynamic image uploading via Multer, with automatic file cleanup upon post deletion.
- **Interactive Discussions:** Multi-level, nested commenting system for community engagement.
- **Role-Based Access:** Global middleware safely restricts write/delete actions while allowing public read access.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose (ODM)
- **Frontend:** EJS (Templating Engine), Tailwind CSS (Design System)
- **Utilities:** JSON Web Tokens (JWT), Multer, Native Node `crypto`

## 🚀 Quick Start

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/tejasbariy/blogani.git](https://github.com/tejabariya/blogani.git)
   cd blogani

```

2. **Install dependencies**
```bash
npm install

```


3. **Environment Setup**
Copy the example environment file and fill in your secrets.
```bash
cp .env.example .env

```


*Make sure your local MongoDB instance is running, or provide a MongoDB Atlas URI.*
4. **Start the application**
```bash
npm run start
# Or use nodemon for development: npm run dev

```


5. **View the app**
Open `http://localhost:8000` in your browser.

## 📂 Architecture overview

The application strictly follows the MVC (Model-View-Controller) design pattern:

* `/models`: Database schemas mapping (User, Blog, Comment).
* `/routes`: Controller logic and Express routing.
* `/views`: Frontend EJS templates separated into clean, modular `/partials`.
* `/middlewares`: Global and protected route authentication gates.

```

```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](https://github.com/yourusername/blogani/issues) if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

*(Note: If you haven't created a license file yet, just create a file named `LICENSE` in your root folder and paste the standard MIT License text into it).*

## 📫 Contact

**Tejas Bariya** - - tejasbariya22@gmail.com

Project Link: [https://github.com/tejasbariya/blogani](https://github.com/tejasbariya/blogani)

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Mongoose](https://mongoosejs.com/)
- [EJS](https://ejs.co/)