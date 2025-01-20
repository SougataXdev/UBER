import React, { useRef } from "react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDrivers from "../components/LookingForDrivers";
import WaitingForDivers from "../components/WaitingForDiver";
import WaitingForDriver from "../components/WaitingForDiver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelCloseRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const [ridePanelOpen, setRidePanelOpen] = useState(false);
  const [ waitingForDriver, setWaitingForDriver ] = useState(false);
  const ridepanelRef = useRef(null);
  const [vehicleFound, setVehicleFound] = useState(false); 
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  

  const submitHandler = (e) => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      gsap.to(panelRef.current, {
        height: panelOpen ? "70%" : "0%",
        duration: 0.5,
        padding: panelOpen ? 24 : 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: panelOpen ? 1 : 0,
        pointerEvents: panelOpen ? "all" : "none",
      });
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      gsap.to(vehiclePanelRef.current, {
        y: vehiclePanelOpen ? 0 : "100%",
        duration: 0.5,
      });
    },
    [vehiclePanelOpen]
  );

  useGSAP(
    function () {
      gsap.to(ridepanelRef.current, {
        y: ridePanelOpen ? 0 : "100%",
        duration: 0.5,
      });
    },
    [ridePanelOpen]
  );

  useGSAP(
    function () {
      gsap.to(vehicleFoundRef.current, {
        y: vehicleFound ? 0 : "100%",
        duration: 0.5,
      });
    },
    [vehicleFound]
  );
  useGSAP(function () {
    if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(waitingForDriverRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ waitingForDriver ])

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover pointer-events-none"
          src="https://storage.googleapis.com/support-forums-api/attachment/thread-5374933-2852463376184676745.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute top-6 right-10 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[38%] left-10 bg-gray-900  rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-lg w-full mt-5"
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              type="text"
              placeholder="Add a pickup location"
            />
            <input
              className="bg-[#eee] px-12 py-2 text-lg w-full mt-3"
              value={destination}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelRef} className="h-[0%] bg-white  ">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 p-2 translate-y-full bg-white px-3 py-8 pt-12"
      >
        <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setRidePanelOpen={setRidePanelOpen} />
      </div>

      <div
        ref={ridepanelRef}
        className="fixed w-full z-10 bottom-0 p-2 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <ConfirmRide setRidePanelOpen={setRidePanelOpen} setVehicleFound={setVehicleFound} />
      </div>


      <div ref={vehicleFoundRef}
       
        className="fixed w-full z-10 bottom-0 p-2 translate-y-full bg-white px-3 py-6 pt-12"
      >
       <LookingForDrivers  setVehicleFound={setVehicleFound} />
      </div>

      <div ref={waitingForDriverRef} className='fixed w-full  z-10 bottom-0  bg-white px-3 py-6 pt-12'>
                <WaitingForDriver
                    
                    setVehicleFound={setVehicleFound}
                    setWaitingForDriver={setWaitingForDriver}
                    waitingForDriver={waitingForDriver} />
            </div>

    </div>
  );
};

export default Home;
