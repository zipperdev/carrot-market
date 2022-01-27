import { NextApiRequest, NextApiResponse } from "next";

export default function withHandler(method: "GET" | "POST" | "DELETE", callback: (req: NextApiRequest, res: NextApiResponse) => void) {
    return async function(req: NextApiRequest, res: NextApiResponse) {
        if (req.method !== method) {
            res.status(405).end();
        };
        try {
            await callback(req, res);
        } catch (error) {
            return res.status(500).json({ error });
        };
    };
};