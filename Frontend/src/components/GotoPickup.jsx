
import React, { useState } from "react";
import { Link } from "react-router-dom";

const GotoPickup = (props) => {
  const [otp, setOtp] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    console.log("OTP Submitted: ", otp);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-2xl font-semibold mb-2">Passenger Details </h3>
        <h2
          onClick={() => {
            props.setRidePopupPanel(false);
          }}
          className="text-3xl"
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h2>
      </div>

      <div className="flex flex-col justify-between items-center gap-">
        <div className=" w-full rounded-lg mt-2 bg-gray-100 flex items-center gap-5 p-3 border-b-2 justify-between">
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9uhC1nWjcVet7LME8DTu9VAZ3qxbjKahF-w&s"
              alt=""
            />
            <div className="flex flex-col gap-1">
              <h5 className="text-xl font-semibold">Esther Berry</h5>
              <div className="flex gap-2">
                <p className="text-sm bg-yellow-300 pl-3 pr-3 rounded-full">
                  Applepay
                </p>
                <p className="text-sm bg-yellow-300 pl-3 pr-3 rounded-full">
                  Discount
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h3 className="text-xl font-semibold">$25.00</h3>
            <p className="text-lg font-thin text-gray-500">2.2 km</p>
          </div>
        </div>

        <div className="w-full mt-2 ">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-line text-2xl"></i>
            <div>
              <h2 className="text-sm font-medium text-gray-400 ">PICK UP</h2>
              <h3 className="text-lg font-semibold">303 Pine St</h3>
              <p className="-mt-1 text-base text-gray-600">
                Kolkata, West Bengal 700006, India
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-line text-2xl"></i>
            <div>
              <h2 className="text-sm font-medium text-gray-400">DORP OFF</h2>
              <h3 className="text-lg font-semibold">303 Pine St</h3>
              <p className="-mt-1 text-base text-gray-600">
                Kolkata, West Bengal 700006, India
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col  mt-5">
          <form onSubmit={(e)=>{submitHandler(e)}}>
            <input value={otp} onChange={(e)=>setOtp(e.target.value)} className="bg-[#eee] px-12 py-3 font-mono text-lg rounded-lg w-full mt-3" type="text" placeholder="Enter OTP" />
            <Link
              to="/captain-riding"
              className="w-full mt-5 flex justify-center bg-green-600 text-2xl text-white font-semibold p-2 rounded-lg"
            >
              Goto Pickup
            </Link>

            <button
              onClick={() => {
                props.setRidePopupPanel(false);
                props.setGotoPickupPanel(false);
              }}
              className="w-full mt-3 bg-red-600 text-2xl text-white font-semibold p-2 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GotoPickup;
