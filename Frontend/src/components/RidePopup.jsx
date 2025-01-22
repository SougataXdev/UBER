import React from "react";

const RidePopup = (props) => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-2xl font-semibold mb-2">A new ride avilable</h3>
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
        <div className="w-full flex justify-between gap-5 items-center mb-2">
          <button
            onClick={() => {props.setRidePopupPanel(false)}}
            className="w-full mt-5 bg-red-600 text-white font-semibold p-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={() => {props.setRidePopupPanel(false);
            props.setGotoPickupPanel(true)
            }}
            className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopup;
