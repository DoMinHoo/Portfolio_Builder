import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload { id: string }

export default function auth(req: Request, res: Response, next: NextFunction) {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) return res.status(401).json({ message: "No token" });
    const token = header.split(" ")[1];
    try {
        const secret = process.env.JWT_SECRET as string;
        const decoded = jwt.verify(token, secret) as JwtPayload;
        (req as any).userId = decoded.id;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Token invalid" });
    }
}
