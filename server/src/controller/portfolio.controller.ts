import mongoose from "mongoose";
import Portfolio from "../model/portfolio.model.js";
import { Request, Response } from "express";
import { log } from "console";

export const createPortfolio = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).userId;
        const data = { ...req.body, userId };
        const newPortfolio = await Portfolio.create(data);
        res.status(201).json(newPortfolio);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const getMyPortfolio = async (req: Request, res: Response) => {
    try {

        const userId = (req as any).userId;
        console.log(userId);
        const portfolio = await Portfolio.findOne({ userId });
        res.status(200).json(portfolio);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const updatePortfolio = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).userId;
        const portfolio = await Portfolio.findOneAndUpdate({ userId }, req.body, { new: true, upsert: true });
        res.status(200).json(portfolio);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}