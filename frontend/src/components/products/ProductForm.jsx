import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../api/productApi";

export default function ProductForm() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    supplier: "",
    sku: "",
    barcode: "",
    buyingPrice: "",
    sellingPrice: "",
    quantity: "",
    unit: "",
    reorderLevel: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await createProduct(formData);

      alert(response.data.message);

      navigate("/products");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to save product."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-gray-800">
          Add New Product
        </h1>

        <p className="text-gray-500 mt-2">
          Fill in the product details below to add it to your inventory.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-sm p-10 space-y-12"
      >

        {/* Product Information */}

        <section>

          <h2 className="text-2xl font-semibold mb-8 text-gray-800">
            Product Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div>

              <label className="block mb-2 font-medium">
                Product Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g Tomatoes"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-700 outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-700 outline-none"
              >

                <option value="">Select Category</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Groceries">Groceries</option>
                <option value="Drinks">Drinks</option>
                <option value="Fruits">Fruits</option>

              </select>

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Supplier
              </label>

              <input
                type="text"
                name="supplier"
                value={formData.supplier}
                onChange={handleChange}
                placeholder="Supplier name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-700 outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                SKU
              </label>

              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                placeholder="SKU Code"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-700 outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Barcode
              </label>

              <input
                type="text"
                name="barcode"
                value={formData.barcode}
                onChange={handleChange}
                placeholder="Barcode"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-700 outline-none"
              />

            </div>

          </div>

        </section>

        {/* Pricing */}

        <section>

          <h2 className="text-2xl font-semibold mb-8 text-gray-800">
            Pricing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div>

              <label className="block mb-2 font-medium">
                Buying Price (KES)
              </label>

              <input
                type="number"
                name="buyingPrice"
                value={formData.buyingPrice}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-700 outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Selling Price (KES)
              </label>

              <input
                type="number"
                name="sellingPrice"
                value={formData.sellingPrice}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-700 outline-none"
              />

            </div>

          </div>

        </section>

        {/* Inventory */}

        <section>

          <h2 className="text-2xl font-semibold mb-8 text-gray-800">
            Inventory
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div>

              <label className="block mb-2 font-medium">
                Quantity
              </label>

              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-700 outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Unit
              </label>

              <select
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-700 outline-none"
              >

                <option value="">Select Unit</option>
                <option value="Kg">Kg</option>
                <option value="Pieces">Pieces</option>
                <option value="Litres">Litres</option>
                <option value="Bottles">Bottles</option>
                <option value="Packets">Packets</option>

              </select>

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Reorder Level
              </label>

              <input
                type="number"
                name="reorderLevel"
                value={formData.reorderLevel}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-700 outline-none"
              />

            </div>

          </div>

        </section>

        {/* Description */}

        <section>

          <h2 className="text-2xl font-semibold mb-8 text-gray-800">
            Description
          </h2>

          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Additional product information..."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-700 outline-none"
          />

        </section>

        {/* Product Image */}

        <section>

          <h2 className="text-2xl font-semibold mb-8 text-gray-800">
            Product Image
          </h2>

          <input
            type="file"
            className="w-full border border-dashed border-gray-300 rounded-xl p-6 cursor-pointer"
          />

        </section>

        {/* Buttons */}

        <div className="flex gap-5 pt-4">

          <button
            type="submit"
            disabled={loading}
            className="bg-green-700 hover:bg-green-800 transition text-white px-10 py-3 rounded-xl disabled:opacity-50"
          >
            {loading ? "Saving Product..." : "Save Product"}
          </button>

          <button
            type="reset"
            className="border border-gray-300 bg-white hover:bg-gray-100 transition px-10 py-3 rounded-xl"
          >
            Cancel
          </button>

        </div>

      </form>

    </div>
  );
}