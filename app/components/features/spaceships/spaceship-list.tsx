import { getSpaceShips } from "@/app/actions/spaceships.actions";
import { SpaceShip } from "@/app/types/spaceships";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SpaceShipCard, SpaceShipCardSkeleton } from "./spaceship-card";
import { use } from "react";

export default function SpaceShipList({
  data,
}: {
  data: Promise<SpaceShip[]>;
}) {

  const spaceships = use(data);
  return (
    <div className="flex flex-col gap-2">
      {spaceships.map((spaceship, i) => (
        <SpaceShipCard spaceship={spaceship} key={i} />
      ))}
    </div>
  );
}

export const SpaceShipListSkeleton = () => (
  <div className="flex flex-col gap-2">
    {Array.from({ length: 3 }).map((_, i) => (
      <SpaceShipCardSkeleton key={i} />
    ))}
  </div>
);
