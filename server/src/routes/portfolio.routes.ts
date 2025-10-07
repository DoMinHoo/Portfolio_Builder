import { Router } from "express";
import { createPortfolio, getMyPortfolio, updatePortfolio } from "../controller/portfolio.controller.js";
import authMiddleware from "../middleware/auth.middlewear.js";

const router = Router();

router.get("/me", authMiddleware, getMyPortfolio);
router.post("/", authMiddleware, createPortfolio);
router.put("/", authMiddleware, updatePortfolio);

export default router;