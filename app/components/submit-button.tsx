"use client";

import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Skeleton } from "./skeleton";

export const SubmitButton = ({ text }: { text?: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-green-400 rounded-md hover:bg-green-500 flex gap-2"
      disabled={pending}
    >
      {pending && <LoaderCircle className="animate-spin" />}
      {text || "Submit"}
    </button>
  );
};

export const SubmitButtonSkeleton = () => <Skeleton height="30px" />;
