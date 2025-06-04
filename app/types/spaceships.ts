import { z } from "zod/v4";

export const SpaceShipSchema = z.object({
  name: z.string(),
  id: z.number(),
  size: z.number(),
});

export type SpaceShip = z.infer<typeof SpaceShipSchema>;
