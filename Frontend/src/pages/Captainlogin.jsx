import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Captainlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});
  const submitHandler = (e)=>{
    e.preventDefault();
    setCaptainData({
      email:email,
      password:password
    });
    console.log(captainData)
    setEmail("");
    setPassword("");
  }
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mt-2 mb-8"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form action="" onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
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
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            name=""
            id=""
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <button className="bg-[#10b461] text-white font-semibold  mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link to="/login"><button className="bg-[#111] text-white font-semibold  mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as User
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Captainlogin;