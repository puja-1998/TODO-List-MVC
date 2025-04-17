const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();
const {displayTask, addTask} = require("./controllers/controller")

app.get("/", (req, res) =>{
    displayTask(req, res);
    
});

app.listen(PORT, (err) =>{
    if(err){
        console.log("error while  listening to the server"); 
    }
    console.log(`Server is strated on the http://localhost:${PORT}`);
});