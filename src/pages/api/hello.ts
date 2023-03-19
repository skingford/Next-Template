/*
 * @Author: kingford
 * @Date: 2023-03-19 20:07:56
 * @LastEditTime: 2023-03-19 20:07:59
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
