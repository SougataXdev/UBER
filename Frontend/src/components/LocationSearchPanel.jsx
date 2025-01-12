import React from 'react';
const LocationSearchPanel = (props) => {
    const locations = [
        { id: 1, address: '123 Main St, Kolkata, West Bengal 700001, India' },
        { id: 2, address: '456 Park Ave, Kolkata, West Bengal 700002, India' },
        { id: 3, address: '789 Elm St, Kolkata, West Bengal 700003, India' },
        { id: 4, address: '101 Maple Rd, Kolkata, West Bengal 700004, India' },
        { id: 5, address: '202 Oak St, Kolkata, West Bengal 700005, India' },
        { id: 6, address: '303 Pine St, Kolkata, West Bengal 700006, India' }
    ];

    return (
        <div>
            {locations.map((location) => (
                <div onClick={()=>{
                    props.setVehiclePanelOpen(true);
                    props.setPanelOpen(false);
                }} key={location.id} className='border-2 rounded-xl p-3 border-gray-100 active:border-black flex items-center my-2 justify-start gap-4'>
                    <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'>
                        <i className="ri-map-pin-line text-xl"></i>
                    </h2>
                    <h4 className='font-medium'>{location.address}</h4>
                </div>
            ))}
        </div>
    );
}

export default LocationSearchPanel;