import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import ServiceDetails from "@/components/service-details";
import MenuContextProvider from "@/context/menu-context";
import servicedetails1 from "@/images/services/service-details.jpg";
import cataractImg from "@/images/services/cataract.jpeg";
import specialityHero from "@/images/SpecialityHero.jpg";
import { allSpecialities, deta, ServiceSidebarOtherData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Img from "@/components/img";
import Faq from "@/components/faq";

const cataractInfo = {
  title: "Cataract",
  description:
    "Cataract is the clouding of natural crystalline lens which gradually blurs your vision. It is an age related degenerative change that is the leading cause of preventable blindness in the world.",
  img: cataractImg,
  symptoms: [
    "Cloudy or blurry vision.",
    "Colours seem faded.",
    "Glare. Headlights, lamps, or sunlight may appear too bright. A halo may appear around lights.",
    " Poor night vision.",
    "Double vision or multiple images in one eye. (This symptom may clear as the cataract gets denser.",
    "Frequent prescription changes in your eyeglasses or contact lenses.",
  ],
  allSpecialities,
  treatment_title: "Treatment:- Quality Care",
  treatment_info:
    "If you are looking for quality refractive cataract surgery then Guruprasad Netra Rugnalaya Pvt Ltd. is the Eyecare facility for you. Our professional team is here to guide you for crystal clear vision with the correct choice of lenses right from monofocals to multifocals and toric by the most advanced Phacoemulsification technique MICS (MICRO-INCISION CATARACT SURGERY)in which removal of the cataract is done through 2mm incision with the implantation of foldable intraocular lens is a regular feature of GNR. We have a well equipped operation theatre with the best Phaco machine from ALCON.",
  faq: [
    {
      question: "Will the cataract get dissolved by eyedrops and medication?",
      answer:
        "No, cataract is clouding of lens. Hence the lens has to be removed and replaced with artificial lens implant.",
    },
    {
      question: "Can i develop cataract again after removal?",
      answer:
        "No, only the postrior capsule which encloses the artificial lens can become cloudy which is called after cataract It can be removed by yag laser.",
    },
  ],
};

const cataract = (props) => {
  const [active, setActive] = useState(1);
  const [activeTwo, setActiveTwo] = useState(1);
  return (
    <MenuContextProvider>
      <Layout PageTitle="Cataract Service">
        <HeaderOne />
        <PageHeader
          title={cataractInfo.title}
          name="Specialities"
          // BackgroundImage="http://www.guruprasadeyeclinics.com/images/services-banner-3.jpg"
        />
        <section className="service_details_area section_padding">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="service_details_left">
                  <Img src={cataractInfo.img} alt="Service Details Image" />
                  <h1>{cataractInfo.title}</h1>
                  <p>{cataractInfo.description}</p>
                  <h2>Symptoms</h2>
                  <ul>
                    {/* <li>
          <i className="fa fa-check-circle"></i> The air conditioner won&apos;t
          turn on.
        </li> */}
                    {cataractInfo.symptoms.map((symptom) => (
                      <li>
                        <i className="fa fa-check-circle"></i> {symptom}
                      </li>
                    ))}
                  </ul>
                  <h2 style={{ marginTop: "50px" }}>
                    {cataractInfo.treatment_title}
                  </h2>
                  <p>{cataractInfo.treatment_info}</p>
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
                <Faq faqs={cataractInfo.faq} />
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
                          {cataractInfo.allSpecialities.map(
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
export default cataract;
