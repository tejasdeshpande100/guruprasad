import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import AboutFour from "@/components/about-four";
import VideoOne from "@/components/video-one";
import TestimonialsOne from "@/components/testimonials-one";
import TeamOne from "@/components/team-one";
import SponsorOne from "@/components/sponsor-one";
import AboutTwo from "@/components/about-two";
import { Row, Col } from "react-bootstrap";
import FeatureOne from "@/components/feature-one";
import AboutUsImage from "@/images/aboutUsImage.jpg";
import Image from "next/dist/client/image";

const About = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="About Me">
        <HeaderOne />
        <PageHeader title="About Me" name="About" />
        {/* <AboutFour />
        <VideoOne />
        <AboutTwo /> */}
        {/* <TestimonialsOne /> */}
        {/* <TeamOne extraClassName="section_border" /> */}
        {/* <SponsorOne /> */}

        <div className="mt-4 p-4">
          <Row>
            <Col lg={6} md={6} sm={12} xs={12}>
              {/* <img
                src="http://www.guruprasadeyeclinics.com/images/about-us.jpg"
                width="100%"
                alt=""
              /> */}
              <Image src={AboutUsImage} />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="pl-5">
                
                <p
                  style={{
                    // color: "#000000",
                    marginTop: "30px",
                    // lineHeight: "28px",
                    // fontWeight: "400",
                    // fontSize: "18px",
                  }}
                >
                  Dr. Neha Deshpande is a promising eye surgeon who has more
                  than 5000 surgeries to her credit and 18 years of experience
                  in Ophthalmic practice. She delegated to various state and
                  national conferences to learn and incorporate the advances in
                  her private practice. Born on 5th of jan 1975 she emerged as a
                  meritorious student ranking 10th in Maharashtra in std 12th.
                  Working as a director of Guruprasad Eye Hospital Aurangabad
                  since 2004 . She has performed more than 5000
                  phacoemusification cataract surgeries. Apart from cataract
                  also working as a Squint, Glaucoma, Oculoplasty and Lasik
                  surgeon. The most common surgeries performed by Dr. Neha
                  include basic and complex cataract surgeries by
                  Phacoemulsification with Monofocals, Multifocals, Trifocals
                  and torics.
                </p>
                <p>
                  <ul style={{ listStyleType: "circle" }}>
                    <li>
                      {" "}
                      Director & Eye Surgeon of Guruprasad Netra Rugnalaya Pvt.
                      Ltd.samarthnagar Aurangabad
                    </li>
                    <li>
                      Director Guruprasad eye care Khiwansara bussiness centre
                      MIDC waluj{" "}
                    </li>

                    <li>
                      Assistant Director of Elite Lasik Laser Centre Aurangabad
                    </li>
                  </ul>
                </p>
              </div>
            </Col>
            <Col md={12}>
              <p className="mt-2">
                EDUCATIONAL PROFILE Undergraduation from Govt Medical College
                Nagpur in 1998. Post Graduation from CPS Mumbai in 2002. Worked
                as Director Aurangabad Ophthalmological Association during
                2010-2012 and 2020-2022 2 year fellowship from 2002 TO 2004 in H
                V Desai Eye Hospital Hadapsar Pune to pursue further skills in
                Ophthalmology. Worked as Hon. Treasurer for Marathwada
                Ophthalmological Society during 2015-2016. Small incision
                training for one month in Lions Nab Hospital Miraj 2004.
                Phacoemulsification Traning in Amar Agarwal's Eye Hospital
                Chennai and Vaduwala Eye Hospital, Baroda. Lasik Training in
                Centre for Sight Hospital, Baroda. Visiting Ophthalmic surgeon
                at Dr. Hawale's Hospital, Bidkin. Visiting Ophthalmologist at
                Sai Hospital and Critical Care Aurangabad, Neha Hospital
                Pandharpur, Sai Hospital Bajaj nagar, Suman Hospital Waluj.
                Ex-official Aurangabad Ophthalmological Society. Faculty for
                State Level Ophthalmology Conferences.
              </p>
            </Col>

            <div className="mb-5">
              <FeatureOne />
            </div>
          </Row>
        </div>
        <section
          className="breadcrumb_section text-center section_padding"
          style={{
            backgroundImage: `url("http://www.guruprasadeyeclinics.com/images/bg-13.jpg")`,
            padding: "60px 30px",
          }}
        >
          <Row>
            <Col
              lg={6}
              md={6}
              sm={12}
              xs={12}
              style={{ borderRight: "1px solid gray" }}
            >
              <div
                style={{
                  padding: "40px",
                  backgroundColor: "rgba(82, 98, 125, 0.8)",
                }}
              >
                <img
                  src="http://www.guruprasadeyeclinics.com/images/vision.png"
                  alt=""
                />
                <h5
                  style={{ margin: "20px 0", fontSize: "24px", color: "white" }}
                >
                  Vision
                </h5>
                <p style={{ fontSize: "20px", color: "#b4bbc7" }}>
                  We strive to be recognized for our expert staff, cutting edge
                  medical technology, outstanding service to the community and
                  the region’s employer of choice.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div
                style={{
                  padding: "40px",
                  backgroundColor: "rgba(82, 98, 125, 0.8)",
                }}
              >
                <img
                  src="http://www.guruprasadeyeclinics.com/images/mission.png"
                  alt=""
                />
                <h5
                  style={{ margin: "20px 0", fontSize: "24px", color: "white" }}
                >
                  Mission
                </h5>
                <p style={{ fontSize: "20px", color: "#b4bbc7" }}>
                  We strive to be recognized for our expert staff, cutting edge
                  medical technology, outstanding service to the community and
                  the region’s employer of choice.
                </p>
              </div>
            </Col>
          </Row>
        </section>

        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default About;
