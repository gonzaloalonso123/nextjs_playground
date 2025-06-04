import { SpaceShipFormSkeleton } from "../components/features/spaceships/spaceship-form";
import { SpaceShipListSkeleton } from "../components/features/spaceships/spaceship-list";

export default function Loading() {
  return (
    <div className="flex gap-2 w-full">
      <div className="w-1/2">
        <SpaceShipFormSkeleton />
      </div>
      <div className="w-1/2">
        <SpaceShipListSkeleton />
      </div>
    </div>
  );
}
