import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Wallet,
  Receipt,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Sales", icon: ShoppingCart, path: "/sales" },
  { name: "Products", icon: Package, path: "/products" },
  { name: "Customers", icon: Users, path: "/customers" },
  { name: "Expenses", icon: Wallet, path: "/expenses" },
  { name: "Debts", icon: Receipt, path: "/debts" },
  { name: "Reports", icon: BarChart3, path: "/reports" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-green-800 text-white flex flex-col">

      <div className="h-24 flex items-center px-8 border-b border-green-700">

        <h1 className="text-3xl font-bold">
          MaliTrack
        </h1>

      </div>

      <nav className="flex-1 p-6 space-y-3">

        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-xl px-5 py-4 text-lg transition ${
                isActive
                  ? "bg-green-900"
                  : "hover:bg-green-700"
              }`
            }
          >
            <item.icon size={22} />

            {item.name}
          </NavLink>
        ))}

      </nav>

      <div className="p-6 border-t border-green-700">

        <button className="flex items-center gap-4 text-lg hover:text-red-300">

          <LogOut />

          Logout

        </button>

      </div>

    </aside>
  );
}