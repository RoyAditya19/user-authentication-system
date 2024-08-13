import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const [userdetails, setUserdetails] = useState("");
  const navigate = useNavigate();

  const fetchUserDetails = async () => {
    const response = await fetch(`http://localhost:4000/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token'),
      },
    });
    const userdata = await response.json();
    console.log("got output", userdata);
    setUserdetails(userdata.user);
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      fetchUserDetails();
    } else {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/008/058/793/small/abstract-blur-with-bokeh-light-for-background-usage-vector.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh", // Full viewport height
        width: "100%", // Full viewport width
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Center vertically
        padding: "1rem", // Add some padding for smaller screens
        animation: "fadeIn 2s ease-in-out", // Animation for fading in
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Light white background with transparency
          borderRadius: "10px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)", // Medium shadow
          padding: "1rem",
          maxWidth: "400px", // Maximum width of the container
          width: "90%", // Responsive width
          textAlign: "center",
          animation: "slideIn 1s ease-out", // Animation for sliding in
          margin: "0 auto", // Center horizontally
        }}
      >
        <h1 className="text-2xl font-bold text-gray-800">Welcome,</h1>
        <h3 className="text-xl font-semibold text-gray-700 mt-2">{userdetails.name}</h3>
        <h4 className="text-lg text-gray-600 mt-2">Email: {userdetails.email}</h4>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Notes;
