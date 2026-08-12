import { useEffect, useState } from "react";
import axios from "axios";

export default function SalesHistory() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    loadSales();
  }, []);

  async function loadSales() {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/sales"
      );

      setSales(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Sales History
        </h1>

        <p className="text-gray-500 mt-2">
          All completed sales
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-green-700 text-white">

            <tr>

              <th className="p-4 text-left">
                Receipt
              </th>

              <th className="p-4 text-left">
                Customer
              </th>

              <th className="p-4 text-left">
                Payment
              </th>

              <th className="p-4 text-left">
                Total
              </th>

              <th className="p-4 text-left">
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {sales.map((sale) => (

              <tr
                key={sale.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">
                  {sale.receiptNo}
                </td>

                <td className="p-4">
                  {sale.customer}
                </td>

                <td className="p-4">
                  {sale.paymentMethod}
                </td>

                <td className="p-4 font-semibold text-green-700">
                  KES {sale.total}
                </td>

                <td className="p-4">
                  {new Date(
                    sale.createdAt
                  ).toLocaleString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}