import React from 'react'

const CompleteRide = (props) => {
  return (
    <div onClick={()=>props.setFinishRidePanel(true)} className="h-1/5 p-6 bg-yellow-400 relative overflow-hidden">
    <h5 className=' p-1 text-center w-[93%] absolute top-0' onClick={() => {
        props.d(false);
      }}><i className="text-4xl  text-black ri-arrow-up-wide-line"></i></h5>
      <h4 className='text-center text-2xl pt-7 text-black'>4 mins away</h4>
      <button className=" absolute bottom-8  w-[90%] mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Complete Ride</button>
    </div>
  )
}

export default CompleteRide