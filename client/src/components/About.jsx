import React from 'react'
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../styles/About.css"

function About() {
  return (
<div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to BrainGuardian, where we're dedicated to advancing brain health. Our platform offers predictive modeling, appointment scheduling, and secure video consultations for proactive neurology care. Our interdisciplinary team aims to revolutionize brain health with accessibility, comprehensiveness, and innovation. Join us on this transformative journey towards a healthier brain.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Specialist"
          description="Find your perfect specialist and book with ease at BrainGuardian. Expert doctors prioritize your health, offering tailored care."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        />
      </div>
    </div>
  )
}

export default About