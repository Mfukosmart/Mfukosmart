import {
  Bell,
  Search,
  UserCircle,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 h-24 px-10 flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back to MaliTrack
        </p>

      </div>

      <div className="flex items-center gap-8">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            placeholder="Search..."
            className="w-80 h-12 rounded-xl border border-gray-300 pl-11 pr-4 outline-none focus:ring-2 focus:ring-green-600"
          />

        </div>

        <Bell
          size={24}
          className="cursor-pointer text-gray-600"
        />

        <UserCircle
          size={42}
          className="text-green-700"
        />

      </div>

    </header>
  );
}