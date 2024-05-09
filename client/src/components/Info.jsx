import React from 'react'
import InformationCard from "./InformationCard";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import "../styles/info.css"

function Info() {
  return (
    <div className="info-section" id="services">
    <div className="info-title-content">
      <h3 className="info-title">
        <span>What We Do</span>
      </h3>
      <p className="info-description">
      We redefine brain health management by providing a comprehensive suite of on-demand services tailored to your specific needs. Our platform enables seamless connections with specialized online professionals, offering expert consultations, personalized insights, and convenient access to necessary resources whenever you need them.
      <br />
      The three types of Brain tumor are as follows:
      </p>
    </div>

    <div className="info-cards-content">
      <InformationCard
        title="Glioma"
        origin="Develop from glial cells, which support and nourish neurons in the brain."
        behaviour="Can be benign (slow-growing and non-invasive) or malignant (aggressive and fast-growing). Glioblastoma is the most common and aggressive type of malignant glioma."
        symptoms="Vary depending on tumor location and size, but can include headaches, seizures, vision problems, numbness, weakness, and balance issues."
        treatment="Depends on tumor type and grade, but may involve surgery, radiation therapy, chemotherapy, and targeted therapies."
        icon={faBrain}
      />

      <InformationCard
        title="Meningioma"
        origin="Develop from the meninges, the protective membranes surrounding the brain and spinal cord."
        behaviour="Almost always benign (non-cancerous) and slow-growing."
        symptoms="Can cause headaches, seizures, vision problems, hearing loss, and cognitive issues depending on location and size."
        treatment="Often monitored if asymptomatic, but surgery or radiation might be necessary for larger or symptomatic tumors."
        icon={faBrain}
        
      />

      <InformationCard
        title="Pituitary Tumor"
        origin="Develop in the pituitary gland, a small gland at the base of the brain responsible for hormone production."
        behaviour="Can be benign or malignant, but most are benign (adenomas)."
        symptoms="Depend on the type of hormone affected, but can include vision problems, headaches, hormonal imbalances, and menstrual irregularities."
        treatment="Often involves surgery or medication to manage hormone production, and radiation for aggressive tumors."
        icon={faBrain}
      />
    </div>
  </div>
  )
}

export default Info