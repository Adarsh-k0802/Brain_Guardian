import "../styles/hero.css";
import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-group.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <div className="section-container">
    <div className="hero-section">
      <div className="text-section">
        <p className="text-headline">❤️ Empowering Health</p>
        <h2 className="text-title">
         MRI-based Brain Tumor Prediction & Doctor Appointment Booking
        </h2>
        <p className="text-descritpion">
        Our platform utilizes advanced Machine Learning Models to analyze MRI images, predicting brain tumors with precision. Plus, easily schedule appointments with top doctors.
        </p>
        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button>
        
        <div className="text-stats">
          <div className="text-stats-container">
            <p>145k+</p>
            <p>Receive Patients</p>
          </div>

          <div className="text-stats-container">
            <p>50+</p>
            <p>Expert Doctors</p>
          </div>

          <div className="text-stats-container">
            <p>10+</p>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>

      <div className="hero-image-section">
        <img className="hero-image1" src={Doctor} alt="Doctor" />
      </div>
    </div>

    <div
      onClick={scrollToTop}
      className={`scroll-up ${goUp ? "show-scroll" : ""}`}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </div>
  </div>
  );
};

export default Hero;
