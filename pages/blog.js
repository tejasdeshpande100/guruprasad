import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";

const Blog = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Blog Page">
        <HeaderOne />
        <PageHeader
          title="A directory of essential & interesting information"
          name="Blog"
        />
        Hi
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default Blog;
