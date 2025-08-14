import mongoose, { mongo } from "mongoose"
export const connectDB = async() =>{
    try {
        await mongoose.connect("mongodb+srv://ronaksojitra1926:RIC2VNuGZXjBrB6W@cluster0.f1xmnf5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("database connected successfully!")
    } catch (error) {
        console.error("Error in connecting the database: ",error)
        process.exit(1)
    }
}