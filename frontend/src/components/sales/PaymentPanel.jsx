import { useState } from "react";

export default function PaymentPanel({
  total,
  onCheckout,
}) {
  const [method, setMethod] = useState("Cash");
  const [amountReceived, setAmountReceived] = useState("");

  const received = Number(amountReceived || 0);
  const change = received - total;

  return (
    <div className="bg-white rounded-xl border mt-6 p-6">

      <h2 className="text-xl font-bold mb-5">
        Payment
      </h2>

      <div className="grid grid-cols-3 gap-3 mb-5">

        {["Cash", "M-Pesa", "Card"].map((item) => (
          <button
            key={item}
            onClick={() => setMethod(item)}
            className={`py-3 rounded-lg transition ${
              method === item
                ? "bg-green-700 text-white"
                : "bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

      {method === "Cash" && (
        <>

          <input
            type="number"
            placeholder="Amount Received"
            value={amountReceived}
            onChange={(e) => setAmountReceived(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4"
          />

          <div className="flex justify-between mb-4">

            <span>Change</span>

            <strong className="text-green-700">
              KES {change > 0 ? change.toFixed(2) : "0.00"}
            </strong>

          </div>

        </>
      )}

      <button
        onClick={() =>
          onCheckout({
            paymentMethod: method,
            amountReceived: received,
          })
        }
        className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-lg font-semibold"
      >
        Complete Sale
      </button>

    </div>
  );
}