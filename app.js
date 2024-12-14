import express from "express"

const app = express();

const PORT = 5002;

app.get("/", (req,res)=>{
    try {
        res.status(200).json("Hello")
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT, ()=>{
    console.log("The Server is ON!");
})