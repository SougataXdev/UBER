import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../context/Usercontext'; // Correctly import UserDataContext
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    };

    try {
      const response = await axios.post("/user/register", newUser);

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user)
        console.log("Registration successful:", data);

        navigate("/home");
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mt-7 mb-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your name</h3>

          <div className="flex gap-4 mb-3">
            <input
              className="bg-[#eeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              required
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              type="text"
              placeholder="First Name"
            />
            <input
              className="bg-[#eeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              required
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              type="text"
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
          <input
            className="bg-[#eeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
            required
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Signup
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
      <div>
        <Link to="/captain-signup">
          <button className="bg-[#10b461] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Sign up as Captain
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
