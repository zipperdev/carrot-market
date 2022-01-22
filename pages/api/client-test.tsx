import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req)
    await client.user.create({
        data: {
            email: "test", 
            name: "test"
        }
    });
    return res.json({
        ok: true
    });
};