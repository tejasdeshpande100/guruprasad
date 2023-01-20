import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import AboutFour from "@/components/about-four";
import VideoOne from "@/components/video-one";
import TestimonialsOne from "@/components/testimonials-one";
import AboutTwo from "@/components/about-two";

export default function gEyeHospital() {
  return (
    <>
      <MenuContextProvider>
        <Layout PageTitle="Guruprasad Eye Hospital">
          <HeaderOne />
          <PageHeader 
         
          title="Guruprasad Eye Hospital" name="Eye Hospital" />
          <AboutFour />
         
          <AboutTwo />
          <TestimonialsOne />
          <Footer />
        </Layout>
      </MenuContextProvider>
     
    </>
  );
}
