import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const StyledSignupPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 40%;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  h2 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    aling-items: center;
    justify-content: center;

    label {
      margin-bottom: 10px;
      font-weight: bold;

      input {
        padding: 8px;
        width: 100%;
        box-sizing: border-box;
        margin-top: 5px;
      }
    }

    button {
      background-color: #007bff;
      color: #fff;
      padding: 10px;
      cursor: pointer;
      width: 100%;
    }
  }
`;

const SignupPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token;

      // Save the token to local storage
      localStorage.setItem("token", token);
      alert("You have successfully logged in");
      // Navigate to the home page
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <StyledSignupPage>
      <Link to="/login"></Link>
      <h2 className="text-white">Signup Page</h2>
      <form onSubmit={handleSubmit} className=" text-white">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className="text-white">
          Signup
        </button>
      </form>
      <h4 className="text-white">Dummy username: kminchelle </h4>
      <h4 className="text-white">Dummy Password: 0lelplR </h4>
    </StyledSignupPage>
  );
};

export default SignupPage;
