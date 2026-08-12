import { FaBell, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm px-8 py-5 flex items-center justify-between">

      <div className="relative w-96">

        <FaSearch className="absolute left-4 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-lg border pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
        />

      </div>

      <div className="flex items-center gap-6">

        <FaBell className="text-xl text-gray-600 cursor-pointer" />

        <div className="text-right">

          <p className="font-semibold">

            Brian Kirarei

          </p>

          <p className="text-sm text-gray-500">

            Administrator

          </p>

        </div>

      </div>

    </header>
  );
}