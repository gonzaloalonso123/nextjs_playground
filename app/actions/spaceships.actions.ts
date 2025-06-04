"use server";

import { revalidatePath } from "next/cache";
import { SpaceShip } from "../types/spaceships";
import { sleep } from "../utils/utils";
import { getQueryClient } from "../get-query-client";

export const getSpaceShips = async (): Promise<SpaceShip[]> => {
  await sleep(500);
  return fetch("http://localhost:3002/api/spaceships").then((res) => res.json());
};

export const uploadSpaceShip = async (spaceship: FormData) => {
  await sleep(500);
  fetch("http://localhost:3002/api/spaceships", {
    method: "POST",
    body: JSON.stringify({
      name: spaceship.get("name"),
      size: spaceship.get("size"),
    }),
  });
  revalidatePath("/spaceships");
};
