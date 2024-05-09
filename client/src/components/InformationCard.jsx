import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformationCard(props) {
  return (
    <div className="info-cards">
    <span className="info-card-icon">
      <FontAwesomeIcon className="info-fa-icon" icon={props.icon} />
    </span>
    <p className="info-card-title">{props.title}</p>
    <p className="info-card-description" style={{textAlign: "left"}}>
  <span style={{color: "#c90016"}}>Origin:</span>
  {props.origin}
</p>
<p className="info-card-description" style={{textAlign: "left"}}>
  <span style={{color: "#c90016"}}>Behaviour:</span>
  {props.behaviour}
</p>
<p className="info-card-description" style={{textAlign: "left"}}>
  <span style={{color: "#c90016"}}>Symptoms:</span>
  {props.symptoms}
</p>
<p className="info-card-description" style={{textAlign: "left"}}>
  <span style={{color: "#c90016"}}>Treatment:</span>
  {props.treatment}
</p>
  </div>
  )
}

export default InformationCard