import { MessageCircle, Clock } from "lucide-react";

const DiscussionCard = ({
  title,
  author,
  category,
  replies,
  time,
}) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
        {category}
      </span>

      <h2 className="mt-4 text-xl font-semibold text-slate-800">
        {title}
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Posted by <span className="font-medium">{author}</span>
      </p>

      <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <MessageCircle size={16} />
          {replies} Replies
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} />
          {time}
        </div>
      </div>

      <button className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700">
        Open Discussion
      </button>
    </div>
  );
};

export default DiscussionCard;