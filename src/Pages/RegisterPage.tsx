import { useState } from "react";
import Register from "../assets/register.webp";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  // Placeholder for login functionality
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("user registered:", { name, email, password });
  };
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded-lg shadow-sm p-8 border"
        >
          <div className="flex justify-center mb-6">
            <h1 className="text-xl logo">Mivine Essentials</h1>
          </div>
          <h2 className="text-2xl text-center mb-6 hero-text">Register</h2>
          <p className="text-center mb-6">Enter your Details</p>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-extrabold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded-lg w-full"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-extrabold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded-lg w-full"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-extrabold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded-lg w-full"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Confirm password"
              className="block text-sm font-extrabold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded-lg w-full"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg cart hover:bg-blue-600"
          >
            Sign Up
          </button>
          <p className="mt-6 text-center text-sm justify-between flex">
            Already have an account?
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-gray-100">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={Register}
            alt="Login To Your Account"
            className="object-cover h-[750px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
