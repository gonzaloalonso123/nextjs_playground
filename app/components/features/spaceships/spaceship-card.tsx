import { SpaceShip } from "@/app/types/spaceships";
import { Skeleton } from "../../skeleton";

export const SpaceShipCard = ({ spaceship }: { spaceship: SpaceShip }) => {
  return (
    <div className="rounded-xl p-4 flex flex-col gap-2 w-xl shadow-md">
      <span className="flex gap-2">
        <label>name</label>
        <label className="font-bold">{spaceship.name}</label>
      </span>
      <span className="flex gap-2">
        <label>size</label>
        <label className="font-bold">{spaceship.size}</label>
      </span>
    </div>
  );
};

export const SpaceShipCardSkeleton = () => (
  <div className="rounded-xl p-4 flex flex-col gap-2 w-xl shadow-md">
    <span className="flex gap-2">
      <Skeleton />
      <Skeleton />
    </span>
    <span className="flex gap-2">
      <Skeleton />
      <Skeleton />
    </span>
  </div>
);
