import React from "react";
import Button from '../Button/Button';
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <img src="/logo.png" alt="" />
      <div className="priority">
      <button>Get priority access</button>
      </div>
    </section>
  );
};

export default Navbar;
