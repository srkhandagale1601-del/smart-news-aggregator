import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import searchRoute from "./routes/search.js";

dotenv.config();
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use("/", searchRoute);
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        articles:null,
        error:null
    });
});



app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});