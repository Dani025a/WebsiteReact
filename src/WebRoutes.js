import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Login from "./components/pages/LogIn";
import Signup from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Booking from "./components/pages/Booking";
import Menu from "./components/pages/Menu";

function WebRoutes() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default WebRoutes;