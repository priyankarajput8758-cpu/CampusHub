import { MapPin, CalendarDays } from "lucide-react";

const PlacementCard = ({
  company,
  role,
  package: salary,
  deadline,
  eligibility,
  location,
}) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-bold text-slate-800">
        {company}
      </h2>

      <p className="mt-2 text-blue-600 font-medium">
        {role}
      </p>

      <div className="mt-5 space-y-2 text-sm text-slate-600">
        <p>
          💰 <strong>Package:</strong> {salary}
        </p>

        <p className="flex items-center gap-2">
          <MapPin size={16} />
          {location}
        </p>

        <p className="flex items-center gap-2">
          <CalendarDays size={16} />
          Deadline: {deadline}
        </p>

        <p>
          🎓 Eligibility: {eligibility}
        </p>
      </div>

      <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition">
        Apply
      </button>
    </div>
  );
};

export default PlacementCard;