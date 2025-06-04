import { uploadSpaceShip } from "@/app/actions/spaceships.actions";
import { SubmitButton, SubmitButtonSkeleton } from "../../submit-button";
import { Skeleton } from "../../skeleton";

export const SpaceShipForm = () => {
  return (
    <form action={uploadSpaceShip} className="p-4 rounded-xl shadow-md flex flex-col gap-2">
      <h1 className="text-xl">New Ship</h1>
      <label htmlFor="name">Name</label>
      <input name="name" className="border p-2 rounded-md" />
      <label htmlFor="size">Size</label>
      <input name="size" className="border p-2 rounded-md" />
      <SubmitButton />
    </form>
  );
};

export const SpaceShipFormSkeleton = () => (
  <div className="p-4 rounded-xl shadow-md flex flex-col gap-2">
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <SubmitButtonSkeleton />
  </div>
);
