import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import ServiceDetails from "@/components/service-details";
import MenuContextProvider from "@/context/menu-context";
import servicedetails1 from "@/images/services/service-details.jpg";
import { allSpecialities, deta, ServiceSidebarOtherData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Img from "@/components/img";
import refractiveimg from "@/images/services/refractive-surgery.jpeg";
import Faq from "@/components/faq";

const refractiveSurgeryInfo = {
  title: "Refractive Surgery",
  description:
    "LASIK (Laser Assisted in Situ Keratomileusis) eye surgery is safe, quick and painless procedure under topical anaesthesia. This laser surgery for vision correction reduces the dependence on minus or plus numbered spectacles or contact lenses. To ensure, if LASIK is suitable for you or not, we conduct a pre-LASIK evaluation to analyse the health of your eyes.",
  img: refractiveimg,
  descpoints: [
    "Corneal Topography to study the surface map of the Cornea.",
    "Cornea Pachymetry and Anterior Segment OCT to assess the thickness of Cornea.",
    "Orthoptic check-up for an eye muscle balance check-up.",
    "BIOMETRY to assess disparity in length between the two eyes if any.",
    "Dry Eye Evaluation",
    "Detailed Refraction",
    "Evaluation of Eye Pressure",
    "Fundoscopy for Retina Evaluation,",
  ],
  allSpecialities,
  treatment_title: "A HAPPIER HEALTHIER GLASS FREE YOU",
  treatment_info:
    "At GNR Pvt Ltd. we provide you with a very unique and the first of its kind Smart Pulse Laser Technology Schwind Amaris 500 that we have sourced from partner company Elite Lasik Laser Center. See the world without glasses with abladeless and flapless technique",
  faq: [
    {
      question: "Will my spectacle number be gone for lifetime?",
      answer:
        "Laser vision correction reduces your dependency on spectacles and enables you to remain spectacle free till you become presbyopic.",
    },
    {
      question: "Will i get my number back after surgery?",
      answer:
        "Laser vision correction is targeted to achieve emmetropia but it may fluctuate for a minor correction in future for which spectacles are not needed.",
    },
  ],
};

const refractiveSurgery = (props) => {
  const [active, setActive] = useState(1);
  const [activeTwo, setActiveTwo] = useState(1);
  return (
    <MenuContextProvider>
      <Layout PageTitle="Service Details">
        <HeaderOne />
        <PageHeader title={refractiveSurgeryInfo.title} name="Specialities" />
        <section className="service_details_area section_padding">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="service_details_left">
                  <Img
                    src={refractiveSurgeryInfo.img}
                    alt="Service Details Image"
                  />
                  <h1>{refractiveSurgeryInfo.title}</h1>
                  <p>{refractiveSurgeryInfo.description}</p>
                  {/* <h2>Symptoms</h2> */}
                  <ul>
                    {/* <li>
          <i className="fa fa-check-circle"></i> The air conditioner won&apos;t
          turn on.
        </li> */}
                    {refractiveSurgeryInfo.descpoints.map((symptom,index) => (
                      <li key={index}>
                        <i className="fa fa-check-circle"></i> {symptom}
                      </li>
                    ))}
                  </ul>
                  <h2 style={{ marginTop: "50px" }}>
                    {refractiveSurgeryInfo.treatment_title}
                  </h2>
                  <p>{refractiveSurgeryInfo.treatment_info}</p>
                  <Faq faqs={refractiveSurgeryInfo.faq} />
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
                          {refractiveSurgeryInfo.allSpecialities.map(
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
