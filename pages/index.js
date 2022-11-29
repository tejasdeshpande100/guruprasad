import React from "react";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import CtaOne from "@/components/cta-one";
import BlogOne from "@/components/blog-one";
import TestimonialsOne from "@/components/testimonials-one";
import ServiceOne from "@/components/service-one";
import ContactTwo from "@/components/contact-two";
import VideoOne from "@/components/video-one";
import AboutTwo from "@/components/about-two";
import SponsorOne from "@/components/sponsor-one";
import TeamOne from "@/components/team-one";
import AboutThree from "@/components/about-three";
import HeaderOne from "@/components/header-one";
import SliderOne from "@/components/slider-one";
import FeatureOne from "@/components/feature-one";
import AboutOne from "@/components/about-one";
const HomeTwo = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Home">
        <HeaderOne />
        <SliderOne />
        <FeatureOne />
        <AboutOne />
        {/* <SponsorOne /> */}
        <ServiceOne />
        {/* <TeamOne /> */}
        <AboutTwo />
        <VideoOne />
        <TestimonialsOne />
        <BlogOne />
        {/* <ContactTwo /> */}
        <CtaOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default HomeTwo;
