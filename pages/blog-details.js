import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details-1";

const BlogDetailsPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Eat healthy">
        <HeaderOne />
        <PageHeader title="Blog Details" name="Blog" />
        <BlogDetails />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default BlogDetailsPage;
