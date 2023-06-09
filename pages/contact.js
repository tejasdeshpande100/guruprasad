import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import ContactThree from "@/components/contact-three";
import ContactMap from "@/components/contact-map";
import Footer from "@/components/footer";

const Contact = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Contact Page">
        <HeaderOne />
        <PageHeader
          name="Contact"
          title="Contact Us"
          BackgroundImage="http://www.guruprasadeyeclinics.com/images/contact_us.jpg"
        />
        <ContactThree />
        <ContactMap />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default Contact;
