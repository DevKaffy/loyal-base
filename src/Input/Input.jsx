import React from 'react'
import './Input.css'

const Input = () => {
  return (
    <form className='.form'>
      <div className="form-div">
        <img src="/profilecircle.png" alt="" />
        <input type="text" placeholder="Tell us your name" />
      </div>
      <div className="form-div top-[40rem]">
        <img src="/email.png" alt="" />
        <input type="text" placeholder="Enter your email address" />
      </div>
    </form>
  );
}

export default Input