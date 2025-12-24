<<<<<<< HEAD
const express = require("express");
const app = express();
const PORT = 4000;
const router = express.Router()
app.use((req,res,next)=>{
    console.log("this is a middleware");
    next();
});

app.use("/api/v1",router);
router.use((req, res, next)=>{
    console.log("this is a middleware for router");
    req.currentTime = new Date();
    next();
});
app.get("/data", (req, res)=>{
    res.send("Hello world");
});
router.get("/items", (req, res)=>{
    res.send({id:1,item:"pen",currentTime:req.currentTime});
});
router.get("/all-items",(req,res)=>{
    res.send([{id:2, item:"pencil", currentTime:req.currentTime},
        {id:3, item:"paper", currentTime:req.currentTime}
    ]);
})
app.listen(PORT,()=>{
    console.log("Server is listening",PORT)
});
=======
const express=require('express');
const dotenv=require('dotenv');
dotenv.config();
const {connectDB} = require("./db");
const app=express();
const port=process.env.PORT 

console.log(process.env.PORT)

app.use("/api/v1",router)

connectDB().then(()=>{
app.listen(process.env.PORT,()=>{
    console.log("server is running on port",process.env.PORT);
})
})
>>>>>>> ec891c8 (Database Connectivity)
