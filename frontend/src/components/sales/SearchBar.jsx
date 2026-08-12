import { Search } from "lucide-react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 mb-6">
      <div className="flex items-center border rounded-lg px-4 py-3">
        <Search className="text-gray-500 mr-3" size={20} />

        <input
          type="text"
          placeholder="Search product by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none"
        />
      </div>
    </div>
  );
}