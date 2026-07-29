import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { login } from "../../services/authService";

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await login(formData);

    if (data.success) {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } else {
      console.log(data.message);
    }
  }
  return (
    
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="text-3xl font-bold text-slate-800">
        Welcome Back 👋
      </h2>

      <p className="mt-2 text-slate-500">
        Login to continue to CampusHub.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
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