import { Router } from "express";
import { register, login, getMe } from '../controller/auth.controller.js';
import authMiddleware from '../middleware/auth.middlewear.js';

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, getMe);

export default router;

