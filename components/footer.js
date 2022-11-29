import React from "react";
import { FooterBottomData, FooterInfo, FooterWidgets } from "@/data";
import FooterShape from "@/images/shape/footer-shape.png";
import Img from "@/components/img";

const Footer = () => {
  return (
    <footer className="footer_area">
      <div className="footer_contact text-center">
        <div className="container">
          <div className="row">
            {FooterInfo.map((data, index) => (

              <div className="col-md-6 col-sm-6" key={`footer-info-${index}`}>
                {data.map(({ icon, tagLine, text }, index) => (
       <div className="footer_contact_width text-left">
       
        <p>
        <i className={icon}></i> {tagLine} <span>{text}</span>
      </p>
      
      </div>
                ))}
         
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer_content section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="footer_textwidget textwidget">
                <h2>{FooterWidgets.about.title}</h2>
                <a href={FooterWidgets.about.contact1.url}>
                  <i className="bi bi-telephone footer_icon"></i>
                  {FooterWidgets.about.contact1.label}
                </a>
                <a href={FooterWidgets.about.contact2.url}>
                  <i className="bi bi-telephone footer_icon"></i>
                  {FooterWidgets.about.contact2.label}
                </a>
                <a href={FooterWidgets.about.phone.url}>
                  <i class="bi bi-phone footer_icon"></i>{" "}
                  {FooterWidgets.about.phone.label}
                </a>
                {/* <h4>{FooterWidgets.about.tagLine}</h4> */}
                {/* <span className="number">{FooterWidgets.about.phone}</span> */}
              </div>
            </div>
            <div className="col-md-2 col-sm-3">
              <h2>{FooterWidgets.linkOne.title}</h2>
              <ul className="footer_link">
                {FooterWidgets.linkOne.menu.map(({ lable, url }, index) => (
                  <li key={`footer-link-one-${index}`}>
                    <a href={url}>{lable}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-2 col-sm-3">
              <ul className="footer_link extra_mt">
                {FooterWidgets.linkTwo.menu.map(({ lable, url }, index) => (
                  <li key={`footer-link-two-${index}`}>
                    <a href={url}>{lable}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-4 col-sm-6">
              <h2>{FooterWidgets.address.title}</h2>
              <ul className="footer_link">
                {FooterWidgets.address.adresses.map(({ lable, url }, index) => (
                  <li key={`footer-link-one-${index}`}>
                    <a href={url}>{lable}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="copyright_area">
            <div className="row">
              <div className="col-md-8 col-sm-6 copyright_text">
                <p>
                  &copy; copyright {new Date().getFullYear()} by Gururprasad
                  Netra Rugnalaya Pvt Ltd
                </p>
              </div>
              <div className="col-md-4 col-sm-6 copyright_social text-end">
                <ul>
                  {FooterBottomData.social.map(({ icon, url }, index) => (
                    <li key={`footer-social-link-${index}`}>
                      <a href={url}>
                        <i className={`fa ${icon}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_shape">
        {/* <Img src={FooterShape} alt="footer shape" /> */}
      </div>
    </footer>
  );
};

export default Footer;
