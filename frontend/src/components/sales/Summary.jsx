export default function Summary({ cart }) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.cartQty * item.sellingPrice,
    0
  );

  const vat = subtotal * 0.16;
  const total = subtotal + vat;

  return (
    <>
      <div className="border-t pt-5 mt-5 space-y-3">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>KES {subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>VAT (16%)</span>
          <span>KES {vat.toFixed(2)}</span>
        </div>

        <div className="border-t pt-4 flex justify-between text-2xl font-bold">
          <span>Total</span>
          <span>KES {total.toFixed(2)}</span>
        </div>

      </div>
    </>
  );
}