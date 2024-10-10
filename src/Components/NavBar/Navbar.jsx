import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import nav_icon from '../../assets/bar.png'
const Navbar = () => {
  
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : sticky(false);
    })
  }, []);
  const [mobileMenu , setmobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu? setmobileMenu(false) : setmobileMenu(true);

  }

  return (
    <nav className={`container ${sticky? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? '':'hidden-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>{" "}
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-420} duration={500}>
            Courses
          </Link>{" "}
        </li>
        <li>
          <Link to="about" smooth={true} offset={-80} duration={500}>
            About
          </Link>{" "}
        </li>
        <li>
          <Link to="reviews" smooth={true} offset={-240} duration={500}>
            Gallery
          </Link>{" "}
        </li>
        <li>
          <Link to="Testimonials" smooth={true} offset={-300} duration={500}>
            Testimonials
          </Link>{" "}
        </li>


        <li>
          <Link to="Contact" smooth={true} offset={0} duration={500} className="btn"> Contact Us</Link>
        </li>
      </ul>
      <img src={nav_icon} alt="" className="menu-icon"  onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
