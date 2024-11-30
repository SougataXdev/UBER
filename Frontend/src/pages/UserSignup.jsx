import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const submitHandler = (e)=>{
    e.preventDefault();
    setUserData({
      fullname:{
        firstname:firstname,
        lastname:lastname
      },
      email:email,
      password:password
    });
    console.log(userData)
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-20 mt-7 mb-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
          alt=""
        />
        <form action="" onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h3 className="text-lg font-medium mb-2">What's your name</h3>

          <div className='flex gap-4 mb-3'>
          <input
            className="bg-[#eeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            required
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            type="text"
            placeholder="First Name"
          />
          <input
            className="bg-[#eeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
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
            name=""
            id=""
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold  mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
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
        <Link to="/captain-signup"><button className="bg-[#10b461] text-white font-semibold  mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Sign up as Captain
        </button>
        </Link>
      </div>
    </div>
  )
}

export default UserSignup;