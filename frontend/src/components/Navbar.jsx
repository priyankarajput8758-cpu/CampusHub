import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
  logout();
  navigate("/login");
};
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-8">
      <h2 className="text-2xl font-semibold text-slate-800">
        Dashboard
      </h2>

        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition"
          >
            Logout
          </button>

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