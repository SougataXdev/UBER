import React from "react";

const LookingForDrivers = (props) => {
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold mb-3">Looking for a Driver</h3>
          <h2
            onClick={() => {
              props.setVehicleFound(false);
            }}
            className="text-3xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h2>
        </div>

        <div className="flex flex-col justify-between items-center gap-2">
          <img
            className="h-36"
            src="https://i.pinimg.com/originals/9e/9c/68/9e9c68435731c23c00573a1544d539b3.gif"
            alt=""
          />

          <div className="w-full mt-5 ">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="ri-map-pin-2-line text-2xl"></i>
              <div>
                <h3 className="text-lg font-semibold">303 Pine St</h3>
                <p className="-mt-1 text-base text-gray-600">
                  Kolkata, West Bengal 700006, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="ri-map-pin-2-line text-2xl"></i>
              <div>
                <h3 className="text-lg font-semibold">303 Pine St</h3>
                <p className="-mt-1 text-base text-gray-600">
                  Kolkata, West Bengal 700006, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-3 ">
              <i className="ri-cash-line text-2xl"></i>
              <div>
                <h3 className="text-lg font-semibold">₹ 160.42</h3>
                <p className="-mt-1 text-base text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDrivers;
