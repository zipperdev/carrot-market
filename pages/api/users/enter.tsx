import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body);
    res.json({ success: true });
};

export default withHandler("POST", handler);