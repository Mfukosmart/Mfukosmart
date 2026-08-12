import { Plus, Minus, Trash2 } from "lucide-react";

export default function CartItem({
  item,
  increase,
  decrease,
  remove,
}) {
  return (
    <div className="border-b py-4">

      <div className="flex justify-between">

        <div>

          <h3 className="font-semibold">
            {item.name}
          </h3>

          <p className="text-gray-500">
            KES {item.sellingPrice}
          </p>

        </div>

        <button
          onClick={() => remove(item.id)}
          className="text-red-500"
        >
          <Trash2 size={18} />
        </button>

      </div>

      <div className="flex items-center gap-4 mt-4">

        <button
          onClick={() => decrease(item.id)}
          className="bg-gray-200 p-2 rounded"
        >
          <Minus size={16} />
        </button>

        <span className="font-bold">
          {item.cartQty}
        </span>

        <button
          onClick={() => increase(item.id)}
          className="bg-green-700 text-white p-2 rounded"
        >
          <Plus size={16} />
        </button>

      </div>

    </div>
  );
}