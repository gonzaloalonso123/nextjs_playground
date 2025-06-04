export const Skeleton = ({ height, width }: { height?: string; width?: string }) => (
  <div
    className="bg-gradient-to-r from-slate-50 to-slate-100 animate-pulse rounded-xl"
    style={{
      height: height || "20px",
      width: width || "100%",
    }}
  />
);
