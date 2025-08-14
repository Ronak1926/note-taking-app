import express from "express";
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5001
connectDB();
app.use(express.json())
app.use("/api/notes", notesRoutes)
app.listen(PORT, () => {
    console.log(`Server Started on Port : ${PORT}`)
})


// mongodb+srv://ronaksojitra1926:RIC2VNuGZXjBrB6W@cluster0.f1xmnf5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0