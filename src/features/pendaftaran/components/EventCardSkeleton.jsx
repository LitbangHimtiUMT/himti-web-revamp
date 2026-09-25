const EventCardSkeleton = () => (
  <div className="rounded-xl border border-gray-100 bg-white p-4 animate-pulse shadow-sm">
    <div className="h-48 bg-gray-200 rounded-lg mb-4" />
    <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
    <div className="h-3 bg-gray-200 rounded w-1/2 mb-4" />
    <div className="h-9 bg-gray-200 rounded-lg w-full" />
  </div>
);

export default EventCardSkeleton;
