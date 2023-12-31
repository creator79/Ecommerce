// ConfigRoutes.js
import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Loading } from "../components";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage"; // Import other components as needed

const ProductsPage = React.lazy(() => import("../pages/ProductsPage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));
const SingleProductPage = React.lazy(() =>
  import("../pages/SingleProductPage")
);
const CartPage = React.lazy(() => import("../pages/CartPage"));
const CheckoutPage = React.lazy(() => import("../pages/CheckoutPage"));

const ConfigRoutes = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token is present in local storage
    const token = localStorage.getItem("token");
    if (token) {
      // You might want to validate the token here (e.g., check expiration)
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      navigate("/"); // Redirect to login if not logged in
    }
  }, [navigate]);

  const PrivateRoute = ({ element, ...props }) => {
    return isLoggedIn ? element : <Navigate to="/" />;
  };

  if (!isLoggedIn) {
  <Navigate to='/login' />
  }

  return (
    <React.Suspense fallback={<Loading lazy />}>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={() => setLoggedIn(true)} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products/:id" element={<PrivateRoute element={<SingleProductPage />} />} />
        <Route path="/products" element={<PrivateRoute element={<ProductsPage />} />} />
        <Route path="/about" element={<PrivateRoute element={<AboutPage />} />} />
        <Route path="/cart" element={<PrivateRoute element={<CartPage />} />} />
        <Route path="/checkout" element={<PrivateRoute element={<CheckoutPage />} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </React.Suspense>
  );
};

export default ConfigRoutes;
