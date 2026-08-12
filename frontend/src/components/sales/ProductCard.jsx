export default function ProductCard({ product, addToCart }) {
  return (
    <div
      onClick={() => addToCart(product)}
      className="bg-white rounded-xl shadow hover:shadow-xl cursor-pointer transition duration-300 p-5"
    >
      <div className="h-36 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-gray-400 text-sm">
          Product Image
        </span>
      </div>

      <h3 className="font-bold text-lg">
        {product.name}
      </h3>

      <p className="text-gray-500 mt-1">
        {product.category}
      </p>

      <div className="mt-4 flex justify-between items-center">
        <span className="font-bold text-green-700 text-xl">
          KES {product.sellingPrice}
        </span>

        <span className="text-sm text-gray-500">
          {product.quantity} left
        </span>
      </div>
    </div>
  );
}