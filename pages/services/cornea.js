import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import ServiceDetails from "@/components/service-details";
import MenuContextProvider from "@/context/menu-context";
import servicedetails1 from "@/images/services/service-details.jpg";
import corneaImg from "@/images/services/cornea.png";
import { allSpecialities, deta, ServiceSidebarOtherData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Img from "@/components/img";
import Faq from "@/components/faq";

const corneaInfo = {
  title: "Cornea",
  description:
    "Cornea is the front protective clear layer of the eye covering the coloured iris. Physical or microbial attack on cornea can cause scratches, cuts, infections, etc. leading to eye pain, redness, blurred vision, tearing, discharge, and sensitivity to light. Acute or chronic conditions like corneal abrasions, corneal erosions, corneal ulcers, corneal scar, corneal infections, keratoconus, corneal dystrophies, Limbal stem cell deficiency, Stevens Johnson syndrome, chemical or thermal burns are being routinely treated by our specialist team of eye doctors. Advanced Keratoconus treatments like Corneal Collagen Cross Linking, surgery for Pterygium, treatment for common problems related to Contact lens like Peripheral Ulcer, along with niche diseases like Chemical Burns, Thermal Burns, Stevens Johnson Syndrome, Ocular Cicatricial Pemphigoid (OCP) etc. are successfully treated.",
  img: corneaImg,
  allSpecialities,
  faq: [
    {
      question: "What is pterygium?",
      answer:
        "Pterygium is a degenerative condition of the conjunctiva that proliferates as a fibrovascular growth to invade the cornea. Pterygium does not always lead to visual impairment but if it is in an advanced form, it can certainly cause significant distortion.",
    },
    {
      question: "Can pterygium make anyone blind?",
      answer:
        "Pterygium does not cause blindness. However, if it grows large due to neglect, it can seriously interfere with vision.",
    },
    {
      question:
        "Is it true that Dry Eye symptoms seem to more severe in winter than in warmer spring and summer months?",
      answer:
        "Dry eyes are most commonly caused from an individual not being able to produce healthy tears. This is NOT affected by a change of seasons. Many people feel more symptoms during allergy season, or warmer months when they are in a dry air conditioned environment.",
    },
    {
      question:
        "Do you have any recommendation for people to help them avoid Dry Eyes issues?",
      answer:
        "Consistent “eye breaks” for those who work on a computer for more than 4 hours a day is good practice. These breaks should be taken every 20 minutes taking time away from the screen for at least 20 seconds. It is vital that people have an annual eye exam, even if they don’t wear glasses. Our eyes are precious and it’s important that they are well taken care of.",
    },
  ],
};

const refractiveSurgery = (props) => {
  const [active, setActive] = useState(1);
  const [activeTwo, setActiveTwo] = useState(1);
  return (
    <MenuContextProvider>
      <Layout PageTitle="Cornea Service">
        <HeaderOne />
        <PageHeader
          title={corneaInfo.title}
          name="Specialities"
          // BackgroundImage="http://www.guruprasadeyeclinics.com/images/services-banner-3.jpg"
        />
        <section className="service_details_area section_padding">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="service_details_left">
                  <Img src={corneaInfo.img} alt="Service Details Image" />
                  <h1>{corneaInfo.title}</h1>
                  <p>{corneaInfo.description}</p>
                  {/* <h2>Symptoms</h2> */}

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
                <Faq faqs={corneaInfo.faq} />
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
                          {corneaInfo.allSpecialities.map(
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
