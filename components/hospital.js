import MenuContextProvider from "@/context/menu-context";
import Footer from "./footer";
import HeaderOne from "./header-one";
import Layout from "./layout";
import PageHeader from "./page-header";

const Hospital = (props) => {
  console.log(props);
  return (
    <MenuContextProvider>
      <Layout PageTitle="Hospitals">
        <HeaderOne />
        <PageHeader title={props.details.title} name="Hospitals" />

        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};
export default Hospital;
