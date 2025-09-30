import { Router } from "express";
import { getMyProfile, createOrUpdateProfile, getProfileByUserId } from "../controller/profile.controller.js";
import authMiddleware from "../middleware/auth.middlewear.js";

const router = Router();

router.get("/me", authMiddleware, getMyProfile);
router.post("/", authMiddleware, createOrUpdateProfile);
router.get("/:userId", getProfileByUserId);

export default router;