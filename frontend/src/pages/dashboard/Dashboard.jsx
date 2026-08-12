import DashboardCard from "../../components/dashboard/DashboardCard";
import RevenueChart from "../../components/charts/RevenueChart";
import SalesChart from "../../components/charts/SalesChart";
import RecentTransactions from "../../components/dashboard/RecentTransactions";
import LowStock from "../../components/dashboard/LowStock";
import TopProducts from "../../components/dashboard/TopProducts";
import CategoryChart from "../../components/dashboard/CategoryChart";
import {
    FaMoneyBillWave,
    FaShoppingCart,
    FaBoxOpen,
    FaUsers
} from "react-icons/fa";

export default function Dashboard(){

return(

<div>

<h1 className="text-4xl font-bold mb-8">

Dashboard

</h1>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<DashboardCard

title="Today's Sales"

value="KES 24,500"

subtitle="+12% from yesterday"

icon={<FaMoneyBillWave/>}

color="bg-green-600"

/>

<DashboardCard

title="Products"

value="143"

subtitle="Inventory Items"

icon={<FaBoxOpen/>}

color="bg-blue-600"

/>

<DashboardCard

title="Customers"

value="58"

subtitle="Registered Customers"

icon={<FaUsers/>}

color="bg-purple-600"

/>

<DashboardCard

title="Orders"

value="31"

subtitle="Today's Orders"

icon={<FaShoppingCart/>}

color="bg-orange-600"

/>

</div>

<div className="grid lg:grid-cols-2 gap-8 mt-12">

<RevenueChart/>

<SalesChart/>
<div className="grid lg:grid-cols-2 gap-8 mt-10">

    <RecentTransactions />

    <LowStock />

</div>
<div className="grid lg:grid-cols-2 gap-8 mt-10">

  <TopProducts />

  <CategoryChart />

</div>



<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-xl font-semibold mb-5">

Recent Sales

</h2>

<table className="w-full">

<thead>

<tr className="border-b">

<th className="text-left py-2">Product</th>

<th>Qty</th>

<th>Total</th>

</tr>

</thead>

<tbody>

<tr className="border-b">

<td className="py-3">

Tomatoes

</td>

<td>

5

</td>

<td>

KES 600

</td>

</tr>

<tr className="border-b">

<td className="py-3">

Onions

</td>

<td>

3

</td>

<td>

KES 350

</td>

</tr>

<tr>

<td className="py-3">

Milk

</td>

<td>

2

</td>

<td>

KES 180

</td>

</tr>

</tbody>

</table>

</div>

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-xl font-semibold mb-5">

Low Stock Alert

</h2>

<div className="space-y-4">

<div className="flex justify-between">

<span>Sugar</span>

<span className="text-red-600">

3 Remaining

</span>

</div>

<div className="flex justify-between">

<span>Milk</span>

<span className="text-red-600">

2 Remaining

</span>

</div>

<div className="flex justify-between">

<span>Cooking Oil</span>

<span className="text-red-600">

1 Remaining

</span>

</div>

</div>

</div>

</div>

</div>

);

}