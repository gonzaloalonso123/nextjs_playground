import { SpaceShip, SpaceShipSchema } from "@/app/types/spaceships";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = SpaceShip[];

const data: SpaceShip[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === "POST") {
    const spaceship = JSON.parse(req.body);
    const result = SpaceShipSchema.safeParse(spaceship);
    if (!result.success) {
      data.push(spaceship);
    }
  } else {
    res.json(data);
  }
}
