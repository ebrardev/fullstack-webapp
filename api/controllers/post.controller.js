import prisma from '../lib/prisma.js';


export const getPosts = async (req,res) =>{
    try{
      res.status(200).json()
    }catch(err) {
         console.log(err) 
         res.status(500).json({message:"failed to get posts"})
    }
}

export const getPost = async (req,res) =>{
    try{
      res.status(200).json()
    }catch(err) {
         console.log(err) 
         res.status(500).json({message:"failed to get post"})
    }
}
export const addPost = async (req,res) =>{
    try{
      res.status(200).json()
    }catch(err) {
         console.log(err) 
         res.status(500).json({message:"failed to create posts"})
    }
}
export const updatePost = async (req,res) =>{
    try{
      res.status(200).json()
    }catch(err) {
         console.log(err) 
         res.status(500).json({message:"failed to update post"})
    }
}

export const deletePost = async (req,res) =>{
    try{
      res.status(200).json()
    }catch(err) {
         console.log(err) 
         res.status(500).json({message:"failed to delete post"})
    }
}