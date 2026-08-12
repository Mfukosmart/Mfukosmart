import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <h1 className="text-3xl font-bold text-green-700">
            MaliTrack
          </h1>

          <div className="space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-green-700"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
            >
              Get Started
            </Link>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Manage Your Business
            <span className="text-green-600"> Smarter.</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            MaliTrack helps small businesses manage inventory,
            record sales, track customer debts, monitor profits,
            and accept M-Pesa payments—all from one platform.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              to="/register"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Start Free
            </Link>

            <Link
              to="/login"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50"
            >
              Login
            </Link>

          </div>

        </div>

        <div className="flex justify-center">
          <img
            src="https://placehold.co/600x450?text=MaliTrack+Dashboard"
            alt="MaliTrack Dashboard"
            className="rounded-xl shadow-xl"
          />
        </div>

      </section>
    </div>
  );
}