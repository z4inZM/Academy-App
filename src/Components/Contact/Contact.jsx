import React from "react";
import "./Contact.css";
import mail_img from "../../assets/email.png";
import phone_img from "../../assets/phone.png";
import location_img from "../../assets/location.png";
const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e25e6877-8ced-495e-bb3d-349d5a37e24d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Message Sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className="Contact">
      <div className="contact-col">
        <h3>Send us a Message </h3>
        <p>
          Talk with our sales team Fill out your information and an
          representative will reach out to you. If you're looking for product
          support, visit our new Help Center.
        </p>
        <ul>
          <li>
            <img src={phone_img} alt="" />
            03135438910
          </li>
          <li>
            <img src={mail_img} alt="" />
            uzain9661@gmail.com
          </li>
          <li>
            <img src={location_img} alt="" />
            Faisal Town Taxila,Punjab , Pakistan
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Enter Your Name</label>
            <input type="text" name = 'name' placeholder="Enter your name" required/>
            <label>Enter Your Number</label>
            <input type="tel" name = 'phone' placeholder="Phone Number" required/>
            <label>Enter Your Email</label>
            <input type="text" name = 'email' placeholder="Email Address" required/>
            <label>Enter Your Message</label>
            <textarea type="message" rows="6" placeholder="Your Message Here" required></textarea>
            <button type="Submit" className="btn dark-btn">Submit</button>
        </form>
<span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
