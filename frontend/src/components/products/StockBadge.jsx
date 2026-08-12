export default function StockBadge({ status }) {
  if (status === "In Stock") {
    return (
      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        In Stock
      </span>
    );
  }

  if (status === "Low Stock") {
    return (
      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
        Low Stock
      </span>
    );
  }

  return (
    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
      Out of Stock
    </span>
  );
}