import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  MessageSquare,
  User,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Notes",
      path: "/notes",
      icon: BookOpen,
    },
    {
      name: "Placements",
      path: "/placements",
      icon: BriefcaseBusiness,
    },
    {
      name: "Events",
      path: "/events",
      icon: CalendarDays,
    },
    {
      name: "Discussion",
      path: "/discussion",
      icon: MessageSquare,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-900 p-6 text-white">
      <h1 className="mb-10 text-3xl font-bold text-blue-400">
        🎓 CampusHub
      </h1>

      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`
                  }
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;