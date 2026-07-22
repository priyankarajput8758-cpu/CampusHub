const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="block mb-2 font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Input;