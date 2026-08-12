import { useEffect, useState } from "react";
import axios from "axios";

import { getProducts } from "../../api/productApi";

import SearchBar from "../../components/sales/SearchBar";
import ProductGrid from "../../components/sales/ProductGrid";
import Cart from "../../components/sales/Cart";
import Receipt from "../../components/sales/Receipt";

export default function Sales() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const [receiptSale, setReceiptSale] = useState(null);
  const [showReceipt, setShowReceipt] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  function addToCart(product) {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                cartQty: item.cartQty + 1,
              }
            : item
        )
      );
      return;
    }

    setCart([
      ...cart,
      {
        ...product,
        cartQty: 1,
      },
    ]);
  }

  function increaseQty(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              cartQty: item.cartQty + 1,
            }
          : item
      )
    );
  }

  function decreaseQty(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                cartQty: item.cartQty - 1,
              }
            : item
        )
        .filter((item) => item.cartQty > 0)
    );
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  async function checkout(customer = "Walk-in Customer", paymentMethod = "Cash") {
    if (cart.length === 0) {
      alert("Cart is empty.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/sales",
        {
          customer,
          paymentMethod,
          items: cart,
        }
      );

      setReceiptSale(res.data.sale);
      setShowReceipt(true);
    } catch (err) {
      console.error(err);
      alert("Failed to complete sale.");
    }
  }

  function closeReceipt() {
    setShowReceipt(false);
    setReceiptSale(null);
    setCart([]);
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold">
            Point of Sale
          </h1>

          <p className="text-gray-500 mt-2">
            Create a new sale
          </p>
        </div>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="grid xl:grid-cols-3 gap-8">

          <div className="xl:col-span-2">
            <ProductGrid
              products={filteredProducts}
              addToCart={addToCart}
            />
          </div>

          <Cart
            cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            removeItem={removeItem}
            checkout={checkout}
          />

        </div>

      </div>

      {showReceipt && (
        <Receipt
          sale={receiptSale}
          onClose={closeReceipt}
        />
      )}
    </>
  );
}