import ProductForm from "../../components/products/ProductForm";

export default function AddProduct() {
  return (
    <div className="max-w-6xl mx-auto">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Add New Product
        </h1>

        <p className="text-gray-500 mt-2">
          Create a new inventory item.
        </p>

      </div>

      <ProductForm />

    </div>
  );
}