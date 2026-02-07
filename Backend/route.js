import express from 'express';
import { userlogin , userSignup} from './controller.js';
const router=express.Router()
router.get('/login',userlogin)
router.get('/signup',userSignup)
export default router