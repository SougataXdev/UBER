import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get("/captains/logout" ,{
            Headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((response)=>{
            if(response.status===200){
                localStorage.removeItem("token");
                console.log("logout successfull")
                navigate("/captain-login");
            }
        }).catch((err)=>{
            console.log("error during logout");
            
        })});


  return <div>CaptainLogout</div>;
};

export default CaptainLogout;
