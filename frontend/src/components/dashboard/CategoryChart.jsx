import {
  Pie
} from "react-chartjs-2";

import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function CategoryChart() {

  const data = {

    labels: [
      "Vegetables",
      "Groceries",
      "Drinks",
      "Fruits",
    ],

    datasets: [

      {

        data: [42, 28, 18, 12],

        backgroundColor: [
          "#16a34a",
          "#2563eb",
          "#f97316",
          "#9333ea",
        ],

      },

    ],

  };

  return (

    <div className="bg-white rounded-2xl shadow-sm p-8">

      <h2 className="text-2xl font-semibold mb-8">

        Sales by Category

      </h2>

      <div className="max-w-sm mx-auto">

        <Pie data={data} />

      </div>

    </div>

  );

}