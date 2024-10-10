import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
import play from "../../assets/play.png";
const About = () => {
  return (
    <div className="about">
      <div className="About-left">
        <img src={about_img} alt="" className="about-img" />
      </div>

      <div className="About-Right">
        <h3>ABOUT US</h3>
        <h2>IGNITING INNOVATION AND LEARNING</h2>
        <p>
          At Our Academy, we are committed to empowering learners with top-tier
          skills through our cutting-edge e-learning platform.
        </p>
        <p>
          Whether you're advancing in tech, business, or creative fields, we
          provide tailored courses, expert instructors, and real-world projects
          to ensure you're prepared for success.
        </p>
        <p>
          Unlock your potential with flexible, hands-on learning experiences
          designed to take your skills to the next level.
        </p>
      </div>
    </div>
  );
};

export default About;
