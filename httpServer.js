//require Express
 
const express = require("express");
const fs = require("fs");
//create object and add port
const app = express();
const port = 6500;

//Define default route with express

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to express server <h1>');
})

//Read file using express server

app.get("/getMovies",(req,res)=>{
    fs.readFile("./data/movies.json",'utf8',(err,data)=>{
        if(err){
            res.status(500).send("Error reading movie data");
        }else{
            try{
                const Movies= JSON.parse(data);
                res.status(200).send(Movies);
            }
            catch(err){
                res.status(500).send("Error reading movie data");
            }
            }
        })
    })

//creat server to listen on port
app.listen(port,()=>{
    console.log(`server is running ${port} `);
})
