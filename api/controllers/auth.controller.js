import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const  register = async (req,res) =>{
    const {username,email,password} = req.body;

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
}

export const  login = (req,res) => {
}

export const  logout = (req,res) => {
}