import React from "react";

export default function Receipt({ sale, onClose }) {
  if (!sale) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-[450px] rounded-2xl shadow-2xl p-8">

        <div id="receipt">

          <h1 className="text-3xl font-bold text-center text-green-700">
            MaliTrack POS
          </h1>

          <p className="text-center text-gray-500 mb-6">
            Sales Receipt
          </p>

          <hr className="mb-4" />

          <div className="space-y-2 text-sm">

            <div className="flex justify-between">
              <span>Receipt</span>
              <span>{sale.receiptNo}</span>
            </div>

            <div className="flex justify-between">
              <span>Customer</span>
              <span>{sale.customer}</span>
            </div>

            <div className="flex justify-between">
              <span>Payment</span>
              <span>{sale.paymentMethod}</span>
            </div>

            <div className="flex justify-between">
              <span>Date</span>
              <span>
                {new Date(sale.createdAt).toLocaleString()}
              </span>
            </div>

          </div>

          <hr className="my-5" />

          <table className="w-full text-sm">

            <thead>

              <tr className="border-b">

                <th className="text-left py-2">Item</th>
                <th>Qty</th>
                <th>Total</th>

              </tr>

            </thead>

            <tbody>

              {sale.items.map((item) => (

                <tr key={item.id}>

                  <td className="py-2">
                    {item.name}
                  </td>

                  <td className="text-center">
                    {item.cartQty}
                  </td>

                  <td className="text-right">
                    KES {(item.cartQty * item.sellingPrice).toFixed(2)}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          <hr className="my-5" />

          <div className="space-y-2">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>KES {sale.subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>VAT</span>
              <span>KES {sale.vat.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-lg font-bold text-green-700">
              <span>Total</span>
              <span>KES {sale.total.toFixed(2)}</span>
            </div>

          </div>

          <hr className="my-5" />

          <p className="text-center text-gray-500">
            Thank you for shopping with us!
          </p>

        </div>

        <div className="flex gap-4 mt-8">

          <button
            onClick={() => window.print()}
            className="flex-1 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl"
          >
            Print
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 hover:bg-gray-400 py-3 rounded-xl"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
}