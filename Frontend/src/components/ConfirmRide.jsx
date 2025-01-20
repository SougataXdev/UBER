import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-2xl font-semibold mb-3">Confirm you Ride</h3>
        <h2
          onClick={() => {
            props.setRidePanelOpen(false);
          }}
          className="text-3xl"
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h2>
      </div>

      <div className="flex flex-col justify-between items-center gap-2">
        <img
          className="h-36"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1635756461/assets/36/e053ef-e935-4549-a10e-9d97ef38116f/original/uber-van.png"
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
              <h3 className="text-lg font-semibold">₹{" "}160.42</h3>
              <p className="-mt-1 text-base text-gray-600">
                Cash Cash
              </p>
            </div>
          </div>
        </div>

        <button onClick={() => {
            props.setVehicleFound(true);
            props.setRidePanelOpen(false);
          }} className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
