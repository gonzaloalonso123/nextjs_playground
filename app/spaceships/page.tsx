import { getSpaceShips } from "../actions/spaceships.actions";
import SpaceShipList, {
  SpaceShipListSkeleton,
} from "../components/features/spaceships/spaceship-list";
import { SpaceShipForm } from "../components/features/spaceships/spaceship-form";
import { Suspense } from "react";

export default async function Page() {
  const spaceshipsPromise = getSpaceShips();

  return (
    <div className="flex gap-2 w-full">
      <div className="w-1/2">
        <SpaceShipForm />
      </div>
      <div className="w-1/2">
        <Suspense fallback={<SpaceShipListSkeleton />}>
          <SpaceShipList data={spaceshipsPromise} />
        </Suspense>
      </div>
    </div>
  );
}
