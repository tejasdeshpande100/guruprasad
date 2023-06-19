import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import MenuContextProvider from "@/context/menu-context";
import cataractImg from "@/images/services/cataract.jpeg";
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

                    {cataractInfo.symptoms.map((symptom,index) => (
                      <li key={index}>
                        <i className="fa fa-check-circle"></i> {symptom}
                      </li>
                    ))}
                  </ul>
                  <h2 style={{ marginTop: "50px" }}>
                    {cataractInfo.treatment_title}
                  </h2>
                  <p>{cataractInfo.treatment_info}</p>

                </div>
                <Faq faqs={cataractInfo.faq} />
              </Col>
              <Col lg={4}>
                <div className="service_details_right">
                  <h1 className="text-center">Our Specialities</h1>
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
export default cataract;
