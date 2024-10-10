import React, { useRef } from "react";
import "./Testimonials.css";
import next from "../../assets/next.png";
import back from "../../assets/back.png";
import user_profile_1 from "../../assets/Profiles/einstine.jpg";
import user_profile_2 from "../../assets/Profiles/babar.jpg";
import user_profile_3 from "../../assets/Profiles/quaid.jpg";
import user_profile_4 from "../../assets/Profiles/arfa.jpg";
const Testimonials = () => {
 
    const Slider = useRef();
    let tx = 0;

  const slideForward = ()=>
  {
    if(tx > -50)
    {
        tx -= 25;
    }
    Slider.current.style.transform = `translateX(${tx}%)`
  }
 
  const slideBackward = ()=>
  {

    if(tx < 0)
        {
            tx += 25;
        }
        Slider.current.style.transform = `translateX(${tx}%)`
  }
 
 
    return (
    <div className="Testimonials">
      <img src={next} alt="" className="Next-btn" onClick={slideForward}/>
      <img src={back} alt="" className="Back-btn" onClick={slideBackward} />
      <div className="Slider">
        <ul ref={Slider}>
          <li>
            <div className="Slide">
              <div className="user-info">
                <img src={user_profile_1} />

                <div>
                  <h3>ALbert Einstine</h3>
                  <span>Germany</span>
                </div>
                </div>
                <p>
                  Albert Einstein born March 14, 1879, Ulm, Württemberg,
                  Germany—died April 18, 1955, Princeton, New Jersey, U.S was
                  a German-born physicist who developed the special and general
                  theories of relativity and won the Nobel Prize for Physics in
                  1921 for his explanation of the photoelectric effect.
                </p>
              
            </div>
          </li>
          <li>
            <div className="Slide">
              <div className="user-info">
                <img src={user_profile_3} />

                <div>
                  <h3>Muhammad Ali</h3>
                  <span>Asia</span>
                </div></div>
                <p>
                  Albert Einstein born March 14, 1879, Ulm, Württemberg,
                  Germany—died April 18, 1955, Princeton, New Jersey, U.S was
                  a German-born physicist who developed the special and general
                  theories of relativity and won the Nobel Prize for Physics in
                  1921 for his explanation of the photoelectric effect.
                </p>
              </div>
            
          </li>
          <li>
            <div className="Slide">
              <div className="user-info">
                <img src={user_profile_2} />

                <div>
                  <h3>Babar Azam</h3>
                  <span>Pakistan</span>
                </div></div>
                <p>
                  Albert Einstein born March 14, 1879, Ulm, Württemberg,
                  Germany—died April 18, 1955, Princeton, New Jersey, U.S was
                  a German-born physicist who developed the special and general
                  theories of relativity and won the Nobel Prize for Physics in
                  1921 for his explanation of the photoelectric effect.
                </p>
              </div>
            
          </li>
          <li>
            <div className="Slide">
              <div className="user-info">
                <img src={user_profile_4} />

                <div>
                  <h3>Arfa Kareem</h3>
                  <span>Pakistan</span>
                </div> </div>
                <p>
                  Albert Einstein born March 14, 1879, Ulm, Württemberg,
                  Germany—died April 18, 1955, Princeton, New Jersey, U.S was
                  a German-born physicist who developed the special and general
                  theories of relativity and won the Nobel Prize for Physics in
                  1921 for his explanation of the photoelectric effect.
                </p>
              </div>
           
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
