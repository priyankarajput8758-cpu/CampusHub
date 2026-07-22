import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import {
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  MessageSquare,
} from "lucide-react";

const Dashboard = () => {
  const user = {
    name: "Priyanka",
  };

const stats = [
  {
    title: "Notes Shared",
    value: 128,
    icon: BookOpen,
  },
  {
    title: "Companies Visiting",
    value: 12,
    icon: BriefcaseBusiness,
  },
  {
    title: "Upcoming Events",
    value: 6,
    icon: CalendarDays,
  },
  {
    title: "Discussions",
    value: 34,
    icon: MessageSquare,
  },
];

  return (
    <DashboardLayout>
      <section>
        <h1 className="text-4xl font-bold text-slate-800">
          Good Morning, {user.name} 👋
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          Welcome back to CampusHub. Here's what's happening today.
        </p>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;