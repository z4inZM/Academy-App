import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/title/Title";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="ENROLL NOW" Title="Courses We Offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" Title="Students" />
        <Gallery />
        <Title subTitle="Testimonials" Title="Students Reviews" />

        <Testimonials />
        <Title subTitle="Contact us" Title="Get In Touch" />
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
