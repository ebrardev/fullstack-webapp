 import express from 'express';


const router = express.Router();    

router.post("/register",(req,res)=> {
    console.log("Register route");
})

router.post("/login",(req,res)=> {
    console.log("Login route");
})

router.post("/logout",(req,res)=> {
    console.log("Logout route");
})