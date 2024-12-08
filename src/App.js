import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import HomePage from "./Components/HomePage/HomePage";
import OrderStatus from "./Components/OrderStatus/OrderStatus";
import ManageFoodItems from "./Components/ManageFoodItems/ManageFoodItems";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/order-status" element={<OrderStatus />} />
        <Route path="/manage-food-items" element={<ManageFoodItems />} />
      </Routes>
    </Router>
  );
}

export default App;