const transactions = [
  {
    id: 1,
    customer: "John Mwangi",
    product: "Tomatoes",
    amount: "KES 1,200",
    status: "Paid",
  },
  {
    id: 2,
    customer: "Mary Wanjiku",
    product: "Rice",
    amount: "KES 3,400",
    status: "Paid",
  },
  {
    id: 3,
    customer: "James Otieno",
    product: "Milk",
    amount: "KES 560",
    status: "Pending",
  },
  {
    id: 4,
    customer: "Peter Kariuki",
    product: "Cooking Oil",
    amount: "KES 2,100",
    status: "Paid",
  },
];

export default function RecentTransactions() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-semibold">
          Recent Transactions
        </h2>

        <button className="text-green-700 font-medium hover:underline">
          View All
        </button>

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b text-gray-500">

            <th className="text-left pb-4">Customer</th>
            <th className="text-left">Product</th>
            <th className="text-left">Amount</th>
            <th className="text-center">Status</th>

          </tr>

        </thead>

        <tbody>

          {transactions.map((sale) => (

            <tr
              key={sale.id}
              className="border-b last:border-none h-16 hover:bg-gray-50"
            >

              <td>{sale.customer}</td>

              <td>{sale.product}</td>

              <td>{sale.amount}</td>

              <td className="text-center">

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    sale.status === "Paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {sale.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}