import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaShoppingCart,
  FaHistory,
  FaBox,
  FaUsers,
  FaMoneyBill,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaTags,
  FaTruck,
} from "react-icons/fa";

const menus = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FaHome />,
  },
  {
    name: "Point of Sale",
    path: "/sales",
    icon: <FaShoppingCart />,
  },
  {
    name: "Sales History",
    path: "/sales/history",
    icon: <FaHistory />,
  },
  {
    name: "Products",
    path: "/products",
    icon: <FaBox />,
  },
  {
    name: "Categories",
    path: "/categories",
    icon: <FaTags />,
  },
  {
    name: "Suppliers",
    path: "/suppliers",
    icon: <FaTruck />,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: <FaUsers />,
  },
  {
    name: "Expenses",
    path: "/expenses",
    icon: <FaMoneyBill />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <FaChartBar />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <FaCog />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <FaSignOutAlt />,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-green-700 text-white min-h-screen flex flex-col shadow-xl">

      {/* Logo */}
      <div className="text-center py-8 border-b border-green-600">
        <h1 className="text-3xl font-extrabold tracking-wide">
          MaliTrack
        </h1>

        <p className="text-sm text-green-200 mt-2">
          Smart Business Manager
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-2">

        {menus.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-white text-green-700 shadow-lg font-semibold"
                  : "hover:bg-green-800 hover:translate-x-1"
              }`
            }
          >
            <span className="text-xl">{menu.icon}</span>

            <span className="text-base">{menu.name}</span>
          </NavLink>
        ))}

      </nav>

      {/* Footer */}
      <div className="border-t border-green-600 p-5 text-center text-sm text-green-200">
        Version 1.0.0
      </div>

    </aside>
  );
}