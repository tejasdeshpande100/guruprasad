import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import AboutFive from "@/components/about-five";
import TestimonialsOne from "@/components/testimonials-one";
import AboutTwo from "@/components/about-two";

export default function gEyeCare() {
  return (
    <>
      <MenuContextProvider>
        <Layout PageTitle="Guruprasad Eye Care">
          <HeaderOne />
          <PageHeader title="Guruprasad Eye Care" name="Eye Care" />
          <AboutFive />
         
          <AboutTwo />
          <TestimonialsOne />
          <Footer />
        </Layout>
      </MenuContextProvider>
    </>
  );
}
