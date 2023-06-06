import { deta, ServiceSidebarOtherData } from "@/data";
import React, { useState } from "react";

const ServiceSidebar = ({ details }) => {
  const [active, setActive] = useState(1);
  const [activeTwo, setActiveTwo] = useState(1);
  return (
    <div className="service_details_right">
      <h1 className="text-center">Our Specialities</h1>

      <div className="tab-content">
        <div className="tab-pane show fade in active animated fadeIn">
          <div className="service_category">
            <ul>
              {details?.allSpecialities.map(({ label, url }, index) => (
                <li key={index}>
                  <a href={url}>
                    {label}
                    <i className="fa fa-angle-right"></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="tab-content">
        {ServiceSidebarOtherData.map(({ content }, index) => {
          const { icon, title } = content;
          function createMarkup() {
            return { __html: title };
          }
          return index === activeTwo ? (
            <div className="tab-pane show fade in active animated fadeIn">
              <div className="service_details_contact">
                <span className={icon}></span>
                <h2 dangerouslySetInnerHTML={createMarkup()} />
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ServiceSidebar;
