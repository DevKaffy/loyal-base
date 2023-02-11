import React from "react";
import Button from '../Button/Button';
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <img src="/logo.png" alt="" />
      {/* <Button
        styleName="h-[1.37rem] w-[10rem] rounded"
        label="Get priority access"
      /> */}
      <button className="priority">Get priority access</button>
    </section>
  );
};

export default Navbar;
