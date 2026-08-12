const products = [
  { name: "Sugar", stock: 3 },
  { name: "Milk", stock: 2 },
  { name: "Cooking Oil", stock: 1 },
  { name: "Salt", stock: 5 },
];

export default function LowStock() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">

      <h2 className="text-2xl font-semibold mb-8">
        Low Stock Products
      </h2>

      <div className="space-y-5">

        {products.map((item) => (

          <div
            key={item.name}
            className="flex justify-between items-center border-b pb-4"
          >

            <div>

              <h3 className="font-semibold">
                {item.name}
              </h3>

              <p className="text-gray-500 text-sm">
                Reorder Needed
              </p>

            </div>

            <span className="bg-red-100 text-red-700 px-3 py-2 rounded-lg font-semibold">
              {item.stock} Left
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}