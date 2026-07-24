import LoginForm from "../features/auth/LoginForm";
const features = [
  "📚 Share Notes",
  "💼 Track Placements",
  "🎯 Join Events",
  "💬 Campus Discussions",
];
const Login = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      
      {/* Left Section */}
      <div className="hidden lg:flex bg-slate-900 text-white flex-col justify-center px-16">
        <h1 className="text-5xl font-bold mb-6">
          CampusHub
        </h1>

        <p className="text-xl text-slate-300 leading-9">
          Your all-in-one campus platform for notes, placements,
          events, discussions and collaboration.
        </p>

        <div className="mt-12 space-y-4 text-slate-400">
            {features.map((feature) => (
                <p key={feature}>{feature}</p>
            ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center bg-slate-100 p-8">
        <LoginForm />
      </div>

    </div>
  );
};

export default Login;