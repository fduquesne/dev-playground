export default function BookListSkeleton() {
  return (
    <div className="flex flex-wrap gap-6">
      {new Array(10).fill("").map((_, index) => (
        <div
          key={index}
          className="flex flex-col w-50 h-70 rounded-r-lg rounded-l-sm border-l-4 border-neutral-800 bg-neutral-700"
        >
          <div className="flex flex-1 flex-col gap-1 p-4 animate-pulse">
            <div className="w-full h-4 rounded-md bg-neutral-600" />
            <div className="w-20 h-4 rounded-md bg-neutral-600" />
          </div>
          <div className="px-4 py-2 animate-pulse">
            <div className="w-30 h-4 rounded-md bg-neutral-600" />
          </div>
        </div>
      ))}
    </div>
  );
}
