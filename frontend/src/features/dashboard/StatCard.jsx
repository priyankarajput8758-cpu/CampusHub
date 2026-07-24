const StatCard = ({ title, value, icon: Icon }) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
        <Icon size={28} />
      </div>

      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-800">
        {value}
      </h2>
    </div>
  );
};

export default StatCard;