import express from "express";
import { Login, SignUp } from "../controllers/userController.js";

const router=express.Router();

router.route("/signup").post(SignUp);
router.route("/login").post(Login);

export default router;