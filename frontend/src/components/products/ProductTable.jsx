export default function ProductTable({ products = [] }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      <table className="w-full">

        <thead className="bg-green-700 text-white">

          <tr>

            <th className="text-left p-5">Product</th>

            <th className="text-left">Category</th>

            <th className="text-left">Buying</th>

            <th className="text-left">Selling</th>

            <th className="text-left">Stock</th>

            <th className="text-left">Unit</th>

            <th className="text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {products.length === 0 ? (

            <tr>

              <td
                colSpan="7"
                className="text-center py-12 text-gray-500"
              >

                No products available

              </td>

            </tr>

          ) : (

            products.map((product) => (

              <tr
                key={product.id}
                className="border-b hover:bg-green-50 transition"
              >

                <td className="p-5 font-medium">

                  {product.name}

                </td>

                <td>{product.category}</td>

                <td>KES {product.buyingPrice}</td>

                <td>KES {product.sellingPrice}</td>

                <td>{product.quantity}</td>

                <td>{product.unit}</td>

                <td className="text-center">

                  <button className="text-blue-600 mr-4">

                    Edit

                  </button>

                  <button className="text-red-600">

                    Delete

                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}