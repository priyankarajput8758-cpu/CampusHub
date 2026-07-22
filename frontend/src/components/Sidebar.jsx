const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold text-blue-400 mb-10">
        CampusHub
      </h1>

      <nav>
        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-blue-400 transition">
            Dashboard
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            Notes
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            Placements
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            Events
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            Discussion
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            Profile
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;