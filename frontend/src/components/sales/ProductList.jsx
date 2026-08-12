import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Tomatoes",
    category: "Vegetables",
    price: 120,
  },
  {
    id: 2,
    name: "Rice",
    category: "Groceries",
    price: 250,
  },
  {
    id: 3,
    name: "Milk",
    category: "Dairy",
    price: 90,
  },
  {
    id: 4,
    name: "Sugar",
    category: "Groceries",
    price: 180,
  },
];

export default function ProductList() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-2xl font-semibold">
          Products
        </h2>

        <input
          placeholder="Search product..."
          className="border rounded-xl px-5 py-3 w-72 focus:ring-2 focus:ring-green-700 outline-none"
        />

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}