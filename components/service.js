import MenuContextProvider from "@/context/menu-context";

import ContactTwo from "./contact-two";
import Footer from "./footer";
import HeaderOne from "./header-one";
import Layout from "./layout";
import PageHeader from "./page-header";
import ServiceDetails from "./service-details";

const Service = (props) => {
  const details = props.details;
  console.log(details, props);
  if (!details) return <>Invalid slug</>;
  return (
    <MenuContextProvider>
      <Layout PageTitle="Service Details">
        <HeaderOne />
        <PageHeader title={details.title} name="Specialities" />
        <ServiceDetails details={details} />
        {/* <ContactTwo /> */}
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default Service;
