import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import MenuContextProvider from "@/context/menu-context";
import contactLenses from "@/images/services/contact-lenses.jpeg";

import { allSpecialities, ServiceSidebarOtherData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Img from "@/components/img";
import Faq from "@/components/faq";

const contactLensesInfo = {
  title: "Contact Lenses",
  description:
    "Patients with any eye or vision related diseases undergo a detailed eye check-up at Guruprasad Netra Rugnalaya Pvt Ltd. after which our specialist team of eye doctors checks the patient and give the suitable advice. Those who cannot opt for LASIK, Implantable Contact Lenses or Phakic IOLs is one of the option. Some patients who do not want to undergo any surgery but want to have some freedom from glasses, contact lenses are a great option. Not just normal people, but a lot of people who have serious eye diseases like Keratoconus, Post Lasik Ectasia, Corneal Scars and High Astigmatism can benefit from specialised contact lenses. All different types of contact lenses are available at GNR. Soft contact lenses made of flexible plastics, Rigid Gas Permeable (RGP) lenses made of semi soft material BOSTON, are less likely to tear, extended wear contacts, Disposable (Replacement Schedule) Contacts, Cosmetic Contact Lenses, Mini Scleral and Scleral lenses.",
  img: contactLenses,
  allSpecialities,
  faq: [
    {
      question: "Can contact lenses harm my eyes?",
      answer:
        "No, but sometimes you can develop allergy to contact lenses after prolong use which can be taken care of with medicines and discontinuing lens use.",
    },
    {
      question: "Can i sleep with contacts?",
      answer:
        "No, if you sleep with the contacts you can get Oedema, as your transparent part of eye that is cornea gets deoxygenated.",
    },
  ],
};

const refractiveSurgery = (props) => {
  const [activeTwo, setActiveTwo] = useState(1);
  return (
    <MenuContextProvider>
      <Layout PageTitle="Contact Lenses Service">
        <HeaderOne />
        <PageHeader
          title={contactLensesInfo.title}
          name="Specialities"
        />
        <section className="service_details_area section_padding">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="service_details_left">
                  <Img
                    src={contactLensesInfo.img}
                    alt="Service Details Image"
                  />
                  <h1>{contactLensesInfo.title}</h1>
                  <p>{contactLensesInfo.description}</p>

                </div>
                <Faq faqs={contactLensesInfo.faq} />
              </Col>
              <Col lg={4}>
                <div className="service_details_right">
                  <h1 className="text-center">Our Specialities</h1>

                  <div className="tab-content">
                    <div className="tab-pane show fade in active animated fadeIn">
                      <div className="service_category">
                        <ul>
                          {contactLensesInfo.allSpecialities.map(
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
