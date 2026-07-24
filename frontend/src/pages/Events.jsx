import DashboardLayout from "../layouts/DashboardLayout";
import EventCard from "../features/events/EventCard";
import { events } from "../data/eventsData";

const Events = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Events
        </h1>

        <p className="mt-2 text-slate-500">
          Discover upcoming campus events and workshops.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Events;