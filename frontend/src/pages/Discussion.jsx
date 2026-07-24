import DashboardLayout from "../layouts/DashboardLayout";
import DiscussionCard from "../features/discussions/DiscussionCard";
import { discussions } from "../data/discussionsData";

const Discussion = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-slate-800">
        Discussions
      </h1>

      <p className="mt-2 text-slate-500">
        Ask questions and interact with fellow students.
      </p>

      <div className="mt-8 space-y-5">
        {discussions.map((discussion) => (
          <DiscussionCard
            key={discussion.id}
            {...discussion}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Discussion;