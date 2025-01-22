import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import GotoPickup from "../components/GotoPickup";

const CaptainHome = () => {


  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const ridePopupRef = useRef(null);

  
  const [gotoPickupPanel, setGotoPickupPanel] = useState(false);
  const gotoPickupPanelRef = useRef(null);

  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupRef.current, { y: 0, duration: 0.5 });
    } else {
      gsap.to(ridePopupRef.current, { y: "100%", duration: 0.5 });
    }
  }, [ridePopupPanel]);


  useGSAP(() => {
    if (gotoPickupPanel) {
      gsap.to(gotoPickupPanelRef.current, { y: 0, duration: 0.5 });
    } else {
      gsap.to(gotoPickupPanelRef.current, { y: "100%", duration: 0.5 });
    }
  }, [gotoPickupPanel]);

  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-full">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-home-5-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://storage.googleapis.com/support-forums-api/attachment/thread-5374933-2852463376184676745.jpg"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div ref={ridePopupRef}
        
        className="fixed w-full z-10 bottom-0 p-2 translate-y-full  bg-white px-3 py-8 pt-12"
      >
        <RidePopup setRidePopupPanel={setRidePopupPanel} setGotoPickupPanel={setGotoPickupPanel}/>
      </div>
      
      <div ref={gotoPickupPanelRef}
        
        className="fixed w-full h-screen z-10 bottom-0 p-2 translate-y-full  bg-white px-3 py-8 pt-12"
      >
        <GotoPickup setGotoPickupPanel={setGotoPickupPanel} setRidePopupPanel={setRidePopupPanel}/>
      </div>
      
    </div>
  );
};

export default CaptainHome;
