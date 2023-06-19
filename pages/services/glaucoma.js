import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import MenuContextProvider from "@/context/menu-context";
import glaucomaImg from "@/images/services/glaucoma.jpeg";
import Faq from "@/components/faq";

import { allSpecialities, deta, ServiceSidebarOtherData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Img from "@/components/img";

const glaucomaInfo = {
  title: "Glaucoma",
  description:
    "Glaucoma is a condition that causes irreversible vision loss typically due to unusually high pressure in the eye. It is among the top three causes of blindness in India. Unfortunately, people do not notice any change in vision until the condition is in the advanced stages, which is why glaucoma is often referred to as a silent thief of vision. Awareness about this disease helps in early detection and prevention of major damage.",
  sub_title: "Glaucoma Workup",
  sub_desc:
    "A patient suspected to have Glaucoma or already diagnosed with the problem, needs to get a number of tests termed Glaucoma Workup. The tests include:",
  img: glaucomaImg,
  descpoints: [
    "Automated Perimetry",
    "Pachymetry",
    "Optic Disc photography",
    "Optical Coherence Tomography",
  ],
  allSpecialities,
  treatment_title: "Treatment",
  treatment_info:
    "Following diagnosis, there are several options available to treat Glaucoma:",
  treatment_points: [
    "Medical management",
    "Laser Photocoagulation:Laser Iridotomy with YAG Laser.",
    "Surgical management: - Standard Drainage procedures like Trabeculectomy or Advanced Glaucoma Drainage devices/implants",
  ],
  symptom_title: "Symptom",
  symptom_desc:
    "Glaucoma being a silent thief of sight, rarely has any symptoms. Very often, patients come to us with complete loss of vision in one eye. Sometimes, in cases of closed-angle glaucoma, patients complain of headaches which are more in the evenings or in the dark. They may also complain of seeing coloured haloes (rainbows) of light when their eye pressure rises. In case of an attack of acute angle closure the patient may complain of severe headache, redness of the eyes, and sudden blurring of vision. This may be associated with nausea and vomiting, and can mimic an abdominal emergency.",
  faq: [
    {
      question: "Do i need to put the eye drops for lifetime?",
      answer:
        "Glaucoma can be managed both medically that is with eye drops and surgically.If your target pressure is achieved with eyedrops you need to put them as per the doctors advice probably for lifetime.",
    },
    {
      question: "Can i sleep with contacts?",
      answer: (
        <>
          You are considered to be in a higher-than-normal risk category if you
          have any of the following: <br /> 1. High IOP.
          <br /> 2. Age {">"} 40 years.
          <br /> 3. Family history of glaucoma.
          <br /> 4. History of eye injury. <br />
          5. History of steroid use, topically / systemically.
          <br /> 6. Are near-sighted (myopia, need minus powered spectacles).
        </>
      ),
    },
  ],
};

const refractiveSurgery = (props) => {
  const [activeTwo, setActiveTwo] = useState(1);
  return (
    <MenuContextProvider>
      <Layout PageTitle="Glaucoma Service">
        <HeaderOne />
        <PageHeader
          title={glaucomaInfo.title}
          name="Specialities"
        />
        <section className="service_details_area section_padding">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="service_details_left">
                  <Img src={glaucomaInfo.img} alt="Service Details Image" />
                  <h1>{glaucomaInfo.title}</h1>
                  <p>{glaucomaInfo.description}</p>
                  <ul>
                    <h2 style={{ marginTop: "30px" }}>
                      {glaucomaInfo.sub_title}
                    </h2>
                    <p>{glaucomaInfo.sub_desc}</p>
                    {glaucomaInfo.descpoints.map((symptom,index) => (
                      <li key={index}>
                        <i className="fa fa-check-circle"></i> {symptom}
                      </li>
                    ))}
                  </ul>
                  <h2 style={{ marginTop: "50px" }}>
                    {glaucomaInfo.symptom_title}
                  </h2>
                  <p>{glaucomaInfo.symptom_desc}</p>

                  <h2 style={{ marginTop: "50px" }}>
                    {glaucomaInfo.treatment_title}
                  </h2>
                  <p>{glaucomaInfo.treatment_info}</p>
                  <ul style={{ marginBottom: "50px" }}>
                    {glaucomaInfo.treatment_points.map((symptom, index) => (
                      <li key={index}>
                        <i className="fa fa-check-circle"></i> {symptom}
                      </li>
                    ))}
                  </ul>
                  <Faq faqs={glaucomaInfo.faq} />

                </div>
              </Col>
              <Col lg={4}>
                <div className="service_details_right">
                  <h1 className="text-center">Our Specialities</h1>
                  <div className="tab-content">
                    <div className="tab-pane show fade in active animated fadeIn">
                      <div className="service_category">
                        <ul>
                          {glaucomaInfo.allSpecialities.map(
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
