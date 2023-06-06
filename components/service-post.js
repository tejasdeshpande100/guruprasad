import React from "react";
import Img from "./img";

const ServicePost = ({ details }) => {
  return (
    <div className="service_details_left">
      {details?.img && <Img src={details.img} alt="Service Details Image" />}
      <h1>{details?.title}</h1>
      <p>{details?.description}</p>
      <h2>Symptoms</h2>
      <ul>
        {details?.symptoms.map((symptom) => (
          <li>
            <i className="fa fa-check-circle"></i> {symptom}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ServicePost;
