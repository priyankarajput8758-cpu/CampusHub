import { CalendarDays, Clock } from "lucide-react";

const EventCard = ({ title, date, time }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <h3 className="font-semibold text-slate-800">
        {title}
      </h3>

      <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
        <CalendarDays size={16} />
        <span>{date}</span>
      </div>

      <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
        <Clock size={16} />
        <span>{time}</span>
      </div>
    </div>
  );
};

export default EventCard;