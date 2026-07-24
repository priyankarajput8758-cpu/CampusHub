import { CalendarDays, Clock, MapPin } from "lucide-react";

const EventCard = ({ title, date, time, venue, organizer }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h2 className="text-xl font-bold text-slate-800">
        {title}
      </h2>

      <p className="mt-2 text-blue-600 font-medium">
        Organized by {organizer}
      </p>

      <div className="mt-5 space-y-3 text-sm text-slate-600">
        <p className="flex items-center gap-2">
          <CalendarDays size={16} />
          {date}
        </p>

        <p className="flex items-center gap-2">
          <Clock size={16} />
          {time}
        </p>

        <p className="flex items-center gap-2">
          <MapPin size={16} />
          {venue}
        </p>
      </div>

      <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
        Register
      </button>
    </div>
  );
};

export default EventCard;