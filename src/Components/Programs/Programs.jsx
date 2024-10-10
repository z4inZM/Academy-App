import React from "react";
import "./program.css";
import program_1 from "../../assets/img (4).jpg";
import program_2 from "../../assets/img (5).jpg";
import program_3 from "../../assets/img (6).jpg";
import hover_1 from "../../assets/secure.png";
import hover_2 from "../../assets/code.png";
import hover_3 from "../../assets/settings.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="captions">
          <img src={hover_1} alt="" />
          <a href="#">
            <div class="box">CyberSecurity</div>
          </a>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="captions">
          <img src={hover_2} alt="" />
          <a href="#">
            <div class="box">App Development</div>
          </a>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="captions">
          <img src={hover_3} alt="" />
          <a href="#">
            <div class="box">Website Development</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Programs;
