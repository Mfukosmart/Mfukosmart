const products = [
  { id: 1, name: "Tomatoes", sold: 240 },
  { id: 2, name: "Rice", sold: 185 },
  { id: 3, name: "Milk", sold: 140 },
  { id: 4, name: "Cooking Oil", sold: 112 },
  { id: 5, name: "Sugar", sold: 98 },
];

export default function TopProducts() {
  const max = Math.max(...products.map((p) => p.sold));

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-2xl font-semibold">
          Top Selling Products
        </h2>

        <button className="text-green-700 hover:underline">
          View All
        </button>

      </div>

      <div className="space-y-6">

        {products.map((item) => (

          <div key={item.id}>

            <div className="flex justify-between mb-2">

              <span className="font-medium">
                {item.name}
              </span>

              <span className="text-gray-500">
                {item.sold} Sold
              </span>

            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full">

              <div
                className="bg-green-600 h-3 rounded-full"
                style={{
                  width: `${(item.sold / max) * 100}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}