import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex justify-between items-center gap-6">

      <div className="relative flex-1">

        <FaSearch
          className="absolute left-4 top-4 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search product..."
          className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-green-700"
        />

      </div>

      <button className="bg-gray-100 px-6 py-3 rounded-xl">

        Filter

      </button>

      <button className="bg-green-700 text-white px-6 py-3 rounded-xl">

        Export

      </button>

    </div>
  );
}