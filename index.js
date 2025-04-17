const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) =>{
    res.send("Hello Pooja");
});

app.listen(PORT, (err) =>{
    if(err){
        console.log(err, "error while  listening to the server"); 
    }
    console.log(`Server is strated on the localhost ${PORT}`);
    
})