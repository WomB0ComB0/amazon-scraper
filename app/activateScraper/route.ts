import { NextApiRequest } from "next";

export async function POST(req: Request) {
  console.log("Submitting...", req.body);
}