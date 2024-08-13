import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const [passwordError, setPasswordError] = useState(""); // State to store password error message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;
    if (password !== cpassword) {
      setPasswordError("Passwords do not match"); // Display error message if passwords don't match
      return;
    }
    setPasswordError(""); // Clear error message if passwords match

    const response = await fetch(`http://localhost:4000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate('/login');
      props.showAlert("Account Created Successfully", "success");
    } else {
      const errorMsg = json.error ? json.error : "Invalid Credentials";
      props.showAlert(errorMsg, "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    
    // Check passwords match as user types in confirm password field
    if (e.target.name === "cpassword") {
      if (credentials.password !== e.target.value) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError("");
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://www.onelogin.com/blog/wp-content/uploads/2023/05/advanced-authentication-blog-image.jpg.optimal.jpg")', // Replace with your background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "80vh",
        width: "80vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem", // Adds padding around the container for better spacing on small screens
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)", // White background with transparency
          borderRadius: "10px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)", // Medium shadow
          padding: "2rem",
          maxWidth: "500px", // Maximum width of the form
          width: "100%", // Responsive width
          minHeight: "50vh", // Minimum height
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "0 auto", // Centers the form horizontally
        }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-dark block">User Name</label>
          <input
            type="text"
            className="form-control border-0 rounded"
            id="name"
            name="name"
            onChange={onChange}
            required
            style={{ borderColor: "transparent", outline: "none" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-dark block mb-2">Email Id</label>
          <input
            type="email"
            className="form-control border-0 rounded"
            id="email"
            name="email"
            onChange={onChange}
            required
            style={{ borderColor: "transparent", outline: "none" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-dark block">Password</label>
          <input
            type="password"
            className="form-control border-0 rounded"
            id="password"
            name="password"
            onChange={onChange}
            minLength={5}
            required
            style={{ borderColor: "transparent", outline: "none" }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cpassword" className="form-label text-dark block mb-2">Confirm Password</label>
          <input
            type="password"
            className="form-control border-0 rounded"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
            minLength={5}
            required
            style={{ borderColor: "transparent", outline: "none" }}
          />
          {passwordError && (
            <div className="text-danger mt-2" style={{ fontSize: "0.875rem" }}>
              {passwordError}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary rounded"
          style={{ fontSize: "16px" }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
