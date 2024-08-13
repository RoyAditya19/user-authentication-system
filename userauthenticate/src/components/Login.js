import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:4000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Logged In Successfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://www.onelogin.com/blog/wp-content/uploads/2023/05/advanced-authentication-blog-image.jpg.optimal.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem", // Added padding to ensure responsiveness on smaller screens
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "rgba(128, 128, 128, 0.8)", // Slightly darker grey color with transparency
          borderRadius: "10px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // More prominent shadow
          width: "100%",
          maxWidth: "400px", // Maximum width of the form
          minHeight: "50vh", // Minimum height of the form
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "1rem",
          gap: "1rem",
          margin: "0 auto", // Center the form horizontally
        }}
      >
        <div className="mb-4">
          <label htmlFor="email" className="form-label text-white mb-2">
            Email
          </label>
          <input
            type="email"
            className="form-control border-0 rounded"
            id="email"
            value={credentials.email}
            name="email"
            onChange={onChange}
            aria-describedby="emailHelp"
            style={{ borderColor: "transparent", outline: "none" }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label text-white mb-2">
            Password
          </label>
          <input
            type="password"
            className="form-control border-0 rounded"
            id="password"
            value={credentials.password}
            name="password"
            onChange={onChange}
            style={{ borderColor: "transparent", outline: "none" }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary rounded-md"
          style={{ padding: "10px 20px" }} // Adjust button padding for better appearance on smaller screens
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
