import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import Placements from "./pages/Placements";
import Events from "./pages/Events";
import Discussion from "./pages/Discussion";
import Profile from "./pages/Profile";
function App() {
  return (
    <Routes>
      {/* Redirect home to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/placements" element={<Placements />} />
      <Route path="/events" element={<Events />} />
      <Route path="/discussion" element={<Discussion />} />

      {/* Profile */}
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;