import { Link } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";

const LoginForm = () => {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="text-3xl font-bold text-slate-800">
        Welcome Back 👋
      </h2>

      <p className="mt-2 text-slate-500">
        Login to continue to CampusHub.
      </p>

      <form className="mt-8 space-y-5">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <Button type="submit">
          Login
        </Button>
      </form>

      <p className="mt-6 text-center text-slate-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-blue-600 hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;