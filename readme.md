# 📝 Note Taking App

A full-stack **MERN** application to create, update, and delete notes with a responsive UI and backend rate limiting using **Upstash Redis**. Perfect for learning and showcasing full-stack development skills.

---

## 🚀 Highlights

- 🧱 **Full-Stack App** built with the **MERN Stack** (MongoDB, Express, React, Node)
- ✨ Create, Update, and Delete notes with **Title & Description**
- 🛠️ Fully functional **REST API**
- ⚙️ **Rate Limiting** with Upstash Redis — real-world concept explained simply
- 🚀 Completely **Responsive UI**
- 🌐 Learn **HTTP Methods**, **Status Codes**, and **SQL vs NoSQL**
- 📦 **Deployment Guide** included — add the live app to your resume
- 📚 Designed for **absolute beginners**
- 🧪 Easy **.env setup**

---

## 🗂 Tech Stack

**Frontend:** React, Tailwind CSS, Axios, React Router, React Hot Toast  
**Backend:** Node.js, Express.js, MongoDB, Mongoose, Upstash Redis  
**Database:** MongoDB Atlas  
**Other:** CORS, dotenv, nodemon  

---

## ⚙️ Environment Variables

Create a `.env` file in the `/backend` directory and add:

```env
MONGO_URI=<your_mongo_uri>

UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
