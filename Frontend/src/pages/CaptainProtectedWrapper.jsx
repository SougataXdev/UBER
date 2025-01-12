import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useEffect } from "react";
import React from "react";
import axios from "axios";


const CaptainProtectedWrapper = ({ children }) => {
    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = React.useState(true);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
        }
    }, [token])

    axios.get('/captains/profile', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        if(response.status === 200){
            setCaptain(response.data.captain);
            setIsLoading(false);
        }
    }).catch((error)=>{
        console.log(error);
        localStorage.removeItem('token');
        navigate('/captain-login')});

    if(isLoading){
        return <div>Loading...</div>
    }
    

    return (
        <div>{children}</div>
    );
};

export default CaptainProtectedWrapper