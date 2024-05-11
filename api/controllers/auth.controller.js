import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const  register = async (req,res) =>{
    const {username,email,password} = req.body;

    try {



    //? hast the password

    const hashedPassword = await bcrypt.hash(password,10);
   console.log(hashedPassword)
    //? create a new user

    const newUser = await prisma.user.create({
        data:{
            username,
            email,
            password:hashedPassword
        }
      
    })
    console.log(newUser)
    res.status(201).json({message: "user created succesfully"})
}catch (err){
    console.log(err)
    res.status(500).json({message:"failed to create user"})
}
}

export const  login = (req,res) => {
}

export const  logout = (req,res) => {
}