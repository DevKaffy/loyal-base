import React from "react";
import Button from '../Button/Button';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="/logo.png" alt="" />
      <Button styleName="h-[1.37rem] w-[10rem] rounded" label="Request a Call"/>
    </div>
  );
};

export default Navbar;
// .button{
//     @apply h-[1.37rem] w-[10rem] rounded px-[1rem] py-[1rem] flex items-center justify-center ;
//     border-width: 1px;
//     border-style: solid;
//     background: linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%);
// }