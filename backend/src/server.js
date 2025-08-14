import express from "express";
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from "./config/db.js";
const app = express();

connectDB();
app.use("/api/notes", notesRoutes)
app.listen(5001, () => {
    console.log("Server Started on Port : 5001")
})


// mongodb+srv://ronaksojitra1926:RIC2VNuGZXjBrB6W@cluster0.f1xmnf5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0