import React from 'react'
import Button from '../Button/Button';
import Footer from '../Button/Footer/Footer';
import './About.css'

const About = () => {
  return (
    <section className="about">
      <img className="about-img" src="/Highlight 1.png" alt="" />
      <div
        style={{
          background: "linear-gradient(92.7deg, #5404FF 7.9%, #BA2AD1 88.1%)",
          width: "6.37rem",
          height: "6.37rem",
          borderRadius: "50%",
          boxShadow: "inset 1.02px 2.04px 51px #001D6E",
          position: "absolute",
          left: "8.62rem",
          top: "6.25rem",
        }}
      ></div>
      <img className="highlight" src="/Highlight 2.png" alt="" />
      <div className="about-container">
        <div className="left-section">
          <img className="star-five" src="/Star.png" alt="" />
          <div className="title-flex">
            <h1 className="about-title">Priority Access</h1>
            <img src="/Line.png" alt="" />
            <p className="paragraph">
              Get ready to revolutionize the way you interact with your
              customers and drive sales with Loyalbaze. Skip the waitlist and
              get exclusive priority access to LoyalBaze. Limited slots
              available. Please tell us a bit about your business and needs and
              of our consultants will be in touch Immediately!
            </p>
            <img className="star-six" src="/Star.png" alt="" />
          </div>
        </div>
        <form className="second-form">
          <p>Book a consultation with us</p>
          <div className="form-input">
            <input type="text" placeholder="Enter your full name" />
            <input type="text" placeholder="Enter your work email" />
            <input type="text" placeholder="Mobile Number" />
            <input type="text" placeholder="Company Name" />
            <select name="country" id="country">
              <option value="">Select your country</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
            </select>
            <textarea
              name=""
              id=""
              placeholder="Drop a message..."
              cols="20"
              rows="5"
            ></textarea>
          </div>
          <Button
            className="third-button outline-none border-none font-bold"
            label="Send Request"
          />
        </form>
        <img className="star-seven" src="/Star.png" alt="" />
      </div>
    </section>
  );
}

export default About