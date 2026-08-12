import { useState } from "react";
import axios from "axios";

import CartItem from "./CartItem";
import Summary from "./Summary";
import PaymentPanel from "./PaymentPanel";

export default function Cart({
  cart,
  increaseQty,
  decreaseQty,
  removeItem,
}) {
  const [loading, setLoading] = useState(false);

  // Totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.cartQty * item.sellingPrice,
    0
  );

  const vat = subtotal * 0.16;
  const total = subtotal + vat;

  async function handleCheckout(paymentMethod) {
    if (cart.length === 0) {
      alert("Cart is empty.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/sales",
        {
          customer: "Walk-in Customer",
          paymentMethod,
          items: cart,
        }
      );

      alert(
        `Sale completed!\nReceipt: ${response.data.sale.receiptNo}`
      );

      // Empty cart
      removeItem("ALL");

      // Refresh Sales History automatically if opened later
      window.location.href = "/sales/history";
    } catch (error) {
      console.error(error);

      alert("Failed to complete sale.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">

      <h2 className="text-2xl font-bold mb-6">
        Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <div className="text-5xl">🛒</div>
          <p className="mt-4 text-lg">
            Cart is empty
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-3 max-h-[350px] overflow-y-auto pr-2">

            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increase={increaseQty}
                decrease={decreaseQty}
                remove={removeItem}
              />
            ))}

          </div>

          <Summary cart={cart} />

          <PaymentPanel
            total={total}
            onCheckout={handleCheckout}
            loading={loading}
          />
        </>
      )}
    </div>
  );
}