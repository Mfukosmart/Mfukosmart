import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../../components/products/SearchBar";
import ProductTable from "../../components/products/ProductTable";

import { getProducts } from "../../api/productApi";

export default function Products() {

  const [products, setProducts] = useState([]);

  const loadProducts = async () => {

    try {

      const response = await getProducts();

      setProducts(response.data);

    } catch (err) {

      console.error(err);

    }

  };

  useEffect(() => {

    loadProducts();

  }, []);

  return (

    <div>

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold">

            Products

          </h1>

          <p className="text-gray-500">

            Manage all inventory.

          </p>

        </div>

        <Link
          to="/products/new"
          className="bg-green-700 text-white px-6 py-3 rounded-lg"
        >

          Add Product

        </Link>

      </div>

      <div className="mb-6">

        <SearchBar />

      </div>

      <ProductTable products={products} />

    </div>

  );

}