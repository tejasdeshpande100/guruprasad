import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import PageHeader from "@/components/page-header";
import ServiceInfo from "@/components/service-info";
import ServiceOne from "@/components/service-one";
import BenefitOne from "@/components/benefit-one";
import SponsorOne from "@/components/sponsor-one";
import Footer from "@/components/footer";
const Services = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Services">
        <HeaderOne />
        <PageHeader title="Services" name="Services" />
        <ServiceInfo />
        <ServiceOne />
        <BenefitOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};
export default Services;
