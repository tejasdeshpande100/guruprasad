import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import MenuContextProvider from "@/context/menu-context";
import { allSpecialities, ServiceSidebarOtherData } from "@/data";
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
                  <ul>

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
                </div>
              </Col>
              <Col lg={4}>
                <div className="service_details_right">
                  <h1 className="text-center">Our Specialities</h1>
              
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
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};
export default refractiveSurgery;
