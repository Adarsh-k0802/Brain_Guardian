import React from 'react'
import Dcard from "./Dcard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../styles/Dr.css";
function Dr() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        <Dcard 
          img={profile1}
          name="Dr. Kathryn Murphy"
          title="General Surgeons"
          stars="4.9"
          reviews="1800"
        />
        <Dcard 
          img={profile2}
          name="Dr. Jacob Jones"
          title="Hematologists"
          stars="4.8"
          reviews="700"
        />
        <Dcard 
          img={profile3}
          name="Dr. Jenny Wilson"
          title="Endocrinologists"
          stars="4.7"
          reviews="450"
        />
        <Dcard 
          img={profile4}
          name="Dr. Albert Flores"
          title="Hematologists"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  )
}

export default Dr;