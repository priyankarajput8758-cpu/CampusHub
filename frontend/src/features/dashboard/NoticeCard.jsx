const NoticeCard = ({ title, date }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <h3 className="font-semibold text-slate-800">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {date}
      </p>
    </div>
  );
};

export default NoticeCard;