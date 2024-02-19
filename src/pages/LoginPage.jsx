import React, { useState } from "react";
import Auth from "../assets/cart.gif";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <div className="min-w-screen min-h-screen h-full bg-gray-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: 1000 }}
        >
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
              <img src={Auth} alt="No Image " className=" h-auto w-[80%]" />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <form onSubmit={handleSubmit}>
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">Login</h1>
                  <p>Enter your information to login</p>
                </div>
                <div>
                  <div className="flex -mx-3"></div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label className="text-xl font-semibold px-1">
                        Username
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                        </div>
                        <input
                          type="text"
                          name="username"
                          className="w-full -ml-10 pl-10 pr-3 py-2 text-xl rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="johnsmith@example.com"
                          value={formData.username}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-12">
                      <label className="text-xl font-semibold px-1">
                        Password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                        </div>
                        <input
                          type="password"
                          name="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 text-xl rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="************"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  {error && (
                    <div className="text-red-500 text-center font-semibold text-xs mt-[-2rem]">
                      {error}
                    </div>
                  )}
                  <div className="flex mx-3 mt-5">
                    <div className="w-full px-3 mb-5">
                      <button
                        className="block w-full max-w-xs mx-auto text-xl bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                  <span className="flex justify-center text-centre gap-2 ">
                    <h4 className="text-black">Dummy username: kminchelle </h4>
                    <h4 className="text-black">Dummy Password: 0lelplR </h4>
                  </span>
                </div>
              </form>
              {/* <p className="flex text-center justify-center mx-auto">
                Need to Signup?{" "}
                <Link to="/signup">
                  <span className=" hover:text-blue-600">Create Account</span>
                </Link>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
