import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Us</span>
          <span className="secondaryText">
          We Believe that  Every person deserves more than a mud hut with athatched roof.
          <br/>
          We believe that everyone should have a safe place to sleep and a strong door to lock.
          <br/> 
          This special place we call home gives us dignity and hope.
          <br/>
          </span>
            <button className="button">
                <a href="mailto:1208pragatii@gmail.com">
                    Get Started
                </a>
            </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
