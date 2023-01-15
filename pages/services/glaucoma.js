import Footer from "@/components/footer";
import HeaderOne from "@/components/header-one";
import Layout from "@/components/layout";
import PageHeader from "@/components/page-header";
import ServiceDetails from "@/components/service-details";
import MenuContextProvider from "@/context/menu-context";
import servicedetails1 from "@/images/services/service-details.jpg";
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
  const [active, setActive] = useState(1);
  const [activeTwo, setActiveTwo] = useState(1);
  return (
    <MenuContextProvider>
      <Layout PageTitle="Glaucoma Service">
        <HeaderOne />
        <PageHeader
          title={glaucomaInfo.title}
          name="Specialities"
          // BackgroundImage="http://www.guruprasadeyeclinics.com/images/services-banner-3.jpg"
        />
        <section className="service_details_area section_padding">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="service_details_left">
                  <Img src={glaucomaInfo.img} alt="Service Details Image" />
                  <h1>{glaucomaInfo.title}</h1>
                  <p>{glaucomaInfo.description}</p>
                  {/* <h2>Symptoms</h2> */}
                  <ul>
                    {/* <li>
          <i className="fa fa-check-circle"></i> The air conditioner won&apos;t
          turn on.
        </li> */}
                    <h2 style={{ marginTop: "30px" }}>
                      {glaucomaInfo.sub_title}
                    </h2>
                    <p>{glaucomaInfo.sub_desc}</p>
                    {glaucomaInfo.descpoints.map((symptom) => (
                      <li>
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
                    {glaucomaInfo.treatment_points.map((symptom) => (
                      <li>
                        <i className="fa fa-check-circle"></i> {symptom}
                      </li>
                    ))}
                  </ul>
                  <Faq faqs={glaucomaInfo.faq} />
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
