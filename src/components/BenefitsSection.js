import React from "react";
// import images
import homeIntro2 from "../img/home-intro2.jpg";

const BenifetsSection = () => {
  return (
    <div className="benifets">
      <div className="description">
        <h2>Hi quality learning systems</h2>
        <div className="benefit">
          <h3>Online Learning</h3>
          <h3>High experienced talented mentors</h3>
          <h3>Fast learning systems</h3>
          <h3>Offline school for children</h3>
        </div>
      </div>
      <img src={homeIntro2} alt="a girl in the library" />
    </div>
  );
};

export default BenifetsSection;
