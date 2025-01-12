import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
      axios
        .get("/user/logout", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.removeItem("token");
            console.log("logout successfull")
            navigate("/login");
          }
        })
        .catch((err) => {
          console.error("Logout failed:", err);
          console.log("there is an error in logout")
          navigate("/login");
        });
  }, [navigate]);

  return <div>Logging you out...</div>;
};

export default UserLogout;
