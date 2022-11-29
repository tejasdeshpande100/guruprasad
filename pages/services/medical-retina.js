import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import ServiceDetails from "@/components/service-details";
import MenuContextProvider from "@/context/menu-context";
import servicedetails1 from "@/images/services/service-details.jpg";
import medicalRetinaImg from "@/images/services/medical-retina.jpeg";

import { allSpecialities, deta, ServiceSidebarOtherData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Img from "@/components/img";
import Faq from "@/components/faq";

const medicalRetinaInfo = {
  title: "Medical Retina",
  description:
    "Retinal diseases are first evaluated clinically with Indirect Ophthalmoloscopy and Slit Lamp Biomicroscopy. Then, if needed, advanced tests are performed.",
  sub_title: "DIABETIC RETINOPATHY",
  sub_desc:
    "It is one of the most common problems affecting vision in people having chronic diabetes where blood sugar is not well controlled. Diabetic retinopathy leads to swelling of the central part of the retina, resulting in blurring of reading vision. If neglected, it forms abnormal blood vessels on the surface of the retina which subsequently either bleed in front of the retina or cause pull on the retina. This ultimately results in profound loss of vision. Hence, every diabetic patient should have a periodic examination of his eyes and retina in particular to diagnose this problem at early stage to prevent major vision.",
  img: medicalRetinaImg,
  descpoints: [
    "Fundus Fluorescein Angiography: Examination of the retinal blood vessels in detail.",
    "Optical Coherence Tomography: Examination of the cross sectional structure of the retina.",
  ],
  allSpecialities,
  treatment_title: "AGE RELATED MACULAR DEGENERATION",
  treatment_info:
    "ARMD is a common cause of vision impairment in the elderly. It usually affects one after the age of 60. Commonly two types of problems are noted: Dry type and Wet type. ARMD usually affects the central part of the retina, hence reading, writing, recognizing faces becomes difficult. In the Dry type, progression of the problem is very gradual and presently no active treatment is available to halt the progression. In the Wet type, the drop in vision is sudden due to swelling and bleeding at the centre of the retina threatening problems later.",
  faq: [
    {
      question: "Can diabetes lead to blindness?",
      answer:
        "Yes diabetes is the leading cause of preventable blindness. So diabetics must have a complete eye check up every year and a detailed retinal workup.",
    },
    {
      question:
        "Can diet, exercise, supplements and other lifestyle changes help slow the progression of macular degeneration?",
      answer:
        "Supplemental vitamins, minerals and antioxidants may slow the progression of the dry form of AMD and stabilize the eye.",
    },
  ],
};

const refractiveSurgery = (props) => {
  const [active, setActive] = useState(1);
  const [activeTwo, setActiveTwo] = useState(1);
  return (
    <MenuContextProvider>
      <Layout PageTitle="Medical Retina Service">
        <HeaderOne />
        <PageHeader
          title={medicalRetinaInfo.title}
          name="Specialities"
          // BackgroundImage="http://www.guruprasadeyeclinics.com/images/services-banner-3.jpg"
        />
        <section className="service_details_area section_padding">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="service_details_left">
                  <Img
                    src={medicalRetinaInfo.img}
                    alt="Service Details Image"
                  />
                  <h1>{medicalRetinaInfo.title}</h1>
                  <p>{medicalRetinaInfo.description}</p>
                  {/* <h2>Symptoms</h2> */}
                  <ul>
                    {medicalRetinaInfo.descpoints.map((symptom) => (
                      <li>
                        <i className="fa fa-check-circle"></i> {symptom}
                      </li>
                    ))}
                  </ul>
                  {/* <li>
          <i className="fa fa-check-circle"></i> The air conditioner won&apos;t
          turn on.
        </li> */}
                  <h2 style={{ marginTop: "50px" }}>
                    {medicalRetinaInfo.sub_title}
                  </h2>
                  <p>{medicalRetinaInfo.sub_desc}</p>

                  <h2 style={{ marginTop: "30px" }}>
                    {medicalRetinaInfo.treatment_title}
                  </h2>
                  <p>{medicalRetinaInfo.treatment_info}</p>

                  {/* <p className="extra_mr">
        If you believe your air conditioning unit requires emergency service,{" "}
        <a href="#">click here</a> for information about our 24/7 repair
        services.
      </p>
      <h2>Should I Repair or Replace My Air Conditioner?</h2>
      <ul className="service_details_ac">
        <li>
          <i className="fa fa-check-circle"></i> Age - If your AC is more than
          10 years old and giving you trouble, it may be in your best interest
          of consider a replacement.
        </li>
        <li>
          <i className="fa fa-check-circle"></i> Investment const - Is a new
          system a better investment in the long run? An Aire Serv air
          conditioner technician can help you calculate your return on
          investment to determine if on upgrade in more beneficial than repair.
        </li>
        <li>
          <i className="fa fa-check-circle"></i> Utility rates - You may think
          you can&apos;t afford on air conditioner replacement, but a more
          efficient unit consumes less electricity and could save you big time
          on energy bills.
        </li>
      </ul>
      <p className="info_mr">
        Visit our <a href="#">air conditioner maintenance page</a> for helpful
        tips and information.
      </p> */}
                </div>
                <Faq faqs={medicalRetinaInfo.faq} />
              </Col>
              <Col lg={4}>
                <div className="service_details_right">
                  <h1 className="text-center">Our Specialities</h1>
                  {/* <div className="service_details_sv_cnt text-center service_cool_head">
        <ul className="nav nav-tabs">
          {ServiceSidebarListData.map(({ icon, title }, index) => (
            <li className={`${active === index ? "active" : " "}`} key={index}>
              <a
                href={`#service-sidebar-tab-${index}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(index);
                }}
              >
                <div className="service_center_left">
                  <i className={icon}></i>
                  <span>{title}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div> */}

                  <div className="tab-content">
                    <div className="tab-pane show fade in active animated fadeIn">
                      <div className="service_category">
                        <ul>
                          {medicalRetinaInfo.allSpecialities.map(
                            ({ label, url }, index) => (
                              <li key={index}>
                                <a href={url}>
                                  {label}
                                  <i className="fa fa-angle-right"></i>
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <div className="service_details_sv_cnt text-center service_class_remove mb-30">
        <ul className="nav nav-tabs">
          {ServiceSidebarOtherData.map(({ icon, title }, index) => (
            <li
              className={`${activeTwo === index ? "active" : " "}`}
              key={index}
            >
              <a
                href={`#service-sidebar-two-tab-${index}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTwo(index);
                }}
              >
                <div className="service_center_left">
                  <i className={icon}></i>
                  <span>{title}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div> */}

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
              </Col>
            </Row>
          </Container>
        </section>
        {/* <ContactTwo /> */}
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};
export default refractiveSurgery;
