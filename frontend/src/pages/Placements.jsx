import DashboardLayout from "../layouts/DashboardLayout";
import PlacementCard from "../features/placements/PlacementCard";
import { placements } from "../data/placementsData";

const Placements = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Placements
          </h1>

          <p className="mt-1 text-slate-500">
            Latest placement opportunities.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {placements.map((placement) => (
          <PlacementCard
            key={placement.id}
            {...placement}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Placements;