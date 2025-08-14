import express from "express";

const app = express();

app.get("/api/notes" , (request, response) =>{
    response.send("you got 5 notes");
});


app.listen(5001, () =>{
    console.log("Server Started on Port : 5001")
})