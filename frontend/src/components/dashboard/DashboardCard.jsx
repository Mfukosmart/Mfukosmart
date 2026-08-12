import React from "react";

export default function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  color,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 p-7">

      <div className="flex items-center justify-between">

        <div className="space-y-3">

          <p className="text-gray-500 text-base font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-gray-800">
            {value}
          </h2>

          <p className="text-gray-400 text-sm">
            {subtitle}
          </p>

        </div>

        <div
          className={`${color} h-20 w-20 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}