import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.controller.js';
import {verifyToken} from "../middleware/verifyToken.js"



const router = express.Router();    

router.get("/register",getUsers)
router.get("/:id",verifyToken,getUser)
router.get("/:id",verifyToken,updateUser)
router.delete("/:id",verifyToken,deleteUser)

export default router;