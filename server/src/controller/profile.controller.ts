import { Request, Response } from "express";
import Profile from "../model/Profile.js";
import User from "../model/User.js";

export const getMyProfile = async (req: Request, res: Response) => {
    const userId = (req as any).userId;
    const profile = await Profile.findOne({ user: userId }).populate("user", "name email avatar");
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
};

export const createOrUpdateProfile = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).userId;
        if (!userId) return res.status(400).json({ message: "Missing userId" });

        const { headline, about, skills, social } = req.body;

        const profileData: any = {
            user: userId,
            headline,
            about,
            skills: Array.isArray(skills)
                ? skills
                : (skills || "")
                    .split(",")
                    .map((s: string) => s.trim())
                    .filter(Boolean),
            social,
        };

        let profile = await Profile.findOneAndUpdate(
            { user: userId },
            profileData,
            { new: true, upsert: true }
        );

        if (profile) {
            profile = await profile.populate("user", "name email avatar");
        }

        res.status(200).json(profile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getProfileByUserId = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const profile = await Profile.findOne({ user: userId }).populate("user", "name email avatar");
        if (!profile) return res.status(404).json({ message: "Profile not found" });
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}