const Navbar = () => {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-8">
      <h2 className="text-2xl font-semibold text-slate-800">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <span className="text-slate-600">
          Welcome, Priyanka 👋
        </span>

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          P
        </div>
      </div>
    </header>
  );
};

export default Navbar;