import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../features/dashboard/StatCard";
import NoticeCard from "../features/dashboard/NoticeCard";
import EventCard from "../features/dashboard/EventCard";
import { stats, notices, events } from "../data/dashboardData";


const Dashboard = () => {
  const user = {
    name: "Priyanka",
  };

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

  <section className="mt-10 grid gap-8 lg:grid-cols-2">
  {/* Notices */}
  <div>
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-slate-800">
        Recent Notices
      </h2>

      <button className="font-medium text-blue-600 hover:underline">
        View All
      </button>
    </div>

    <div className="space-y-4">
      {notices.map((notice) => (
        <NoticeCard
          key={notice.id}
          title={notice.title}
          date={notice.date}
        />
      ))}
    </div>
  </div>

  {/* Events */}
  <div>
    <h2 className="mb-5 text-2xl font-bold text-slate-800">
      Upcoming Events
    </h2>

    <div className="space-y-4">
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          date={event.date}
          time={event.time}
        />
      ))}
    </div>
  </div>
</section>

    </DashboardLayout>
  );
};

export default Dashboard;