export function SkeletonGrid() {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-2">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="skeleton aspect-square rounded-xl"
        />
      ))}
    </div>
  );
}

export function SkeletonProfile() {
  return (
    <div className="px-4 py-8 border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="skeleton w-24 h-24 md:w-36 md:h-36 rounded-full flex-shrink-0" />
        <div className="flex-1 space-y-4">
          <div className="skeleton h-6 w-40 rounded-lg" />
          <div className="skeleton h-4 w-64 rounded-lg" />
          <div className="skeleton h-4 w-48 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
