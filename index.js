const express = require('express');
const ejs = require('ejs');
require('dotenv').config();
const {displayTask, addTask} = require("./controllers/controller");

const app = express(); // app fire
const PORT = process.env.PORT || 3000; // port 

app.use(express.urlencoded()); //middleware to read data from html
app.set("view engine", "ejs"); // setting ejs file //key- value pair

app.get("/", (req, res) =>{
    displayTask(req, res);
    
});

app.post("/add", (req, res)=>{
    addTask(req, res);
})

app.listen(PORT, (err) =>{
    if(err){
        console.log("error while  listening to the server"); 
    }
    console.log(`Server is strated on the http://localhost:${PORT}`);
});