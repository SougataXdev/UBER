import React from "react";
import { Link } from "react-router-dom";
import CompleteRide from "../components/CompleteRide";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, { y: 0, duration: 0.5 });
    } else {
      gsap.to(finishRidePanelRef.current, { y: "100%", duration: 0.5 });
    }
  }, [finishRidePanel]);

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
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://storage.googleapis.com/support-forums-api/attachment/thread-5374933-2852463376184676745.jpg"
          alt=""
        />
      </div>
      <CompleteRide setFinishRidePanel={setFinishRidePanel} />
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 p-2 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
      ;
    </div>
  );
};

export default CaptainRiding;
