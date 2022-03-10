import { Request, Response } from "express";

const { evaluate } = require("mathjs");

export const getEquation = (req: Request, res: Response) => {
    try {
        const { equal }: { equal: string } = req.body;

        if(!equal)
            throw new Error('Body must be filled');

        return res.json({
            success: true,
            data: evaluate(equal)
        })
    } catch (e) {
        return res.json({
            success: false,
            message: e?.message ?? e
        })
    }
}