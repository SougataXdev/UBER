import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/Usercontext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate(); 
  const submitHandler = async (e) => {
    e.preventDefault();
    const loginData = { email, password }; 
    console.log(loginData);
    try {
      console.log("Login data being sent:", loginData);

      const result = await axios.post(
        "/user/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      if (result.status === 200) {
        const userdata = result.data.user;
        localStorage.setItem("token" , JSON.stringify(userdata.token));
        setUser(userdata);
        navigate("/home");
        alert("Login successful!");
        setEmail("");
        setPassword("");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (e) {
      console.error("invalid credentials", e);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mt-2 mb-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
          <input
            className="bg-gray-200 mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button
            className="bg-black text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create new account
          </Link>
        </p>
      </div>
      <div>
        <Link to="/captain-login">
          <button className="bg-green-500 text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg">
            Sign in as Captain
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
