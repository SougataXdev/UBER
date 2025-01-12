import React from "react";
import {Link} from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="h-screen bg-cover bg-[url(https://images.unsplash.com/photo-1554672408-730436b60dde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dWJlcnxlbnwwfHwwfHx8MA%3D%3D)] flex pt-8 justify-between flex-col w-ful">
        <img className="w-20 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />
        <div className="bg-white py-5 px-10 items-center">
          <h1 className="text-2xl font-bold">Get started with Uber</h1>
          <Link to="/login"><button className="w-full bg-black text-white py-3">Continue</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
