import React from 'react'
import Button from '../Button/Button';
import './GetstartedForm.css'

const GetstartedForm = () => {
  return (
    <form className="max-w-lg flex flex-col items-center mx-auto gap-4">
      <div className="form-div">
        <img
          className="w-[0.8rem] h-[0.8rem] lg:w-auto lg:h-auto"
          src="/profilecircle.png"
          alt=""
        />
        <input type="text" placeholder="Tell us your name" />
      </div>
      <div className="form-div">
        <img
          className="w-[0.8rem] h-[0.8rem] lg:w-auto lg:h-auto"
          src="/email.png"
          alt=""
        />
        <input type="text" placeholder="Enter your email address" />
      </div>
      <Button
        className="second-button outline-none border-none font-bold"
        label="Get early access"
      />
    </form>
  );
}

export default GetstartedForm