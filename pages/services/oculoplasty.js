import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";

import MenuContextProvider from "@/context/menu-context";
import oculoplastyImg from "@/images/services/oculoplasty.jpeg";

import { allSpecialities, ServiceSidebarOtherData } from "@/data";
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
        />
        <section className="service_details_area section_padding">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="service_details_left">
                  <Img src={oculoplastyInfo.img} alt="Service Details Image" />
                  <h1>{oculoplastyInfo.title}</h1>
                  <p>{oculoplastyInfo.description}</p>
                  <ul style={{ marginBottom: "50px" }}>
                    {oculoplastyInfo.descpoints.map((symptom, index) => (
                      <li key={index} style={{ marginBottom: "10px" }}>
                        <i className="fa fa-check-circle"></i> {symptom}
                      </li>
                    ))}
                  </ul>
                  <Faq faqs={oculoplastyInfo.faq} />
                </div>
              </Col>
              <Col lg={4}>
                <div className="service_details_right">
                  <h1 className="text-center">Our Specialities</h1>

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
