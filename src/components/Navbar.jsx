
export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          {/* Left - Image + Logo */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img
              src="./logo.png"
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover"
            />

            <h2 className="text-2xl font-bold">
              FITLOG
            </h2>
          </div>

          {/* Center - Two Buttons */}
          <div className="flex justify-center gap-3">
            <button className="px-5 py-2 rounded-lg hover:bg-gray-800 transition">
              Workouts
            </button>

            <button className="px-5 py-2 rounded-lg hover:bg-gray-800 transition">
              My Plan
            </button>
          </div>

          {/* Right - Two Buttons */}
          <div className="flex justify-center md:justify-end gap-3">
            <button className="px-5 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition">
              Plan
            </button>

            <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
              Saved
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

