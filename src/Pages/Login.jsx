import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import image1 from "../assets/images/loginbackground.5ad1adb02f73f4ac865e.webp";
import image2 from "../assets/images/cdplc_logo.png";
import { loginUser } from "../apiService";
import { useAuth } from "../../src/Context/AuthContext"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");
    const { success, token, message } = await loginUser(username, password);
  
    if (success) {
      login(token); 
      localStorage.setItem("username", username);
  
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Redirecting to your dashboard...",
      }).then(() => {
        navigate("/executive"); 
      });
  
    } else {
      setError(message);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: message,
      });
    }
    setIsLoading(false);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex items-end justify-start p-10"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="w-96 p-6 bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-md mb-10 ml-10">
        <div className="text-center mb-16">
          <img src={image2} alt="Logo" className="w-64 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-6">Sign-In</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Powered by Dockyard Total Solutions. Copyright © 2023
        </p>
      </div>
    </div>
  );
};
export default Login;
