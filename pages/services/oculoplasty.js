import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import ServiceDetails from "@/components/service-details";

import MenuContextProvider from "@/context/menu-context";
import servicedetails1 from "@/images/services/service-details.jpg";
import oculoplastyImg from "@/images/services/oculoplasty.jpeg";

import { allSpecialities, deta, ServiceSidebarOtherData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Img from "@/components/img";
import Faq from "@/components/faq";

const oculoplastyInfo = {
  title: "Oculoplasty",
  description:
    "Oculoplasty service at GNR caters to therapeutic disorders of the eyelids and lacrimal drainage system like droopy lids, watering of eyes, puffy lids etc. Broadly, the oculoplastic specialist at GNR treats the following group of eye disorders :",
  img: oculoplastyImg,
  descpoints: [
    "Ptosis : Dropping of eyelids",
    "Strabismuss, also known as crossed eyes, is a condition in which the eyes do not properly align with each other when looking at an object. Treatment depends on the type of strabismus and the underlying cause. This may include the use of glasses and possibly surgery.",
  ],
  allSpecialities,
  faq: [
    {
      question: "What are the problems faced by a patient with squint?",
      answer:
        "When the eyes are not aligned properly, each of the eyes is focusing on a different object and sends signal to the brain. These two different images reaching the brain lead to various problems that are different in children and adults. In children it can cause loss of depth perception (3D vision) and lazy Eye Disease (poor development of vision in the squinting eye). An adult can’t ignore the image from either eye, and therefore they can have double vision. This can be very annoying and may interfere with work. Certainly loss of 3D vision and cosmetic deformity are also causes of concern.",
    },
    {
      question: "When should the squint be treated?",
      answer:
        "In a child, the treatment of squint and any associated amblyopia should be started as soon as possible. Generally speaking, the younger the age at which amblyopia is treated; the better is the chance of recovery of vision. Remember that the child would never grow out of squint. A delay in treatment may decrease the chances of getting a good alignment and the vision.",
    },
  ],
};

const refractiveSurgery = (props) => {
  const [active, setActive] = useState(1);
  const [activeTwo, setActiveTwo] = useState(1);
  return (
    <MenuContextProvider>
      <Layout PageTitle="Oculoplasty Service">
        <HeaderOne />
        <PageHeader
          title={oculoplastyInfo.title}
          name="Specialities"
          // BackgroundImage="http://www.guruprasadeyeclinics.com/images/services-banner-3.jpg"
        />
        <section className="service_details_area section_padding">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="service_details_left">
                  <Img src={oculoplastyInfo.img} alt="Service Details Image" />
                  <h1>{oculoplastyInfo.title}</h1>
                  <p>{oculoplastyInfo.description}</p>
                  {/* <h2>Symptoms</h2> */}
                  <ul style={{ marginBottom: "50px" }}>
                    {/* <li>
          <i className="fa fa-check-circle"></i> The air conditioner won&apos;t
          turn on.
        </li> */}

                    {oculoplastyInfo.descpoints.map((symptom) => (
                      <li style={{ marginBottom: "10px" }}>
                        <i className="fa fa-check-circle"></i> {symptom}
                      </li>
                    ))}
                  </ul>
                  <Faq faqs={oculoplastyInfo.faq} />
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
                          {oculoplastyInfo.allSpecialities.map(
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
