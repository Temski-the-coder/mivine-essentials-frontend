import {useState} from "react";
import login from '../assets/login.webp'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // Placeholder for login functionality
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("user Logged in:", { email, password });
   // navigate to home page after logging in
    navigate('home');
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
          <h2 className="text-2xl text-center mb-6 hero-text">
            Login to your account
          </h2>
          <p className="text-center mb-6">Enter your Username and Password</p>
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
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg cart hover:bg-blue-600"
          >
            Login
          </button>
          <p className="mt-6 text-center text-sm justify-between flex">Don't have an account?
            <Link to="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-gray-100">
        <div className="h-full flex flex-col justify-center items-center">
            <img src={login} alt="Login To Your Account" className="object-cover h-[750px] w-full" />
        </div>
      </div>
    </div>
  );
};

export default Login;
