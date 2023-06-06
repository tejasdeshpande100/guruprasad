import React from "react";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import Footer from "@/components/footer";
import CtaOne from "@/components/cta-one";
import BlogOne from "@/components/blog-one";
import TestimonialsOne from "@/components/testimonials-one";
import ServiceOne from "@/components/service-one";
import VideoOne from "@/components/video-one";
import AboutTwo from "@/components/about-two";
import HeaderOne from "@/components/header-one";
import SliderOne from "@/components/slider-one";
import FeatureOne from "@/components/feature-one";
import AboutOne from "@/components/about-one";
import { getAllPosts } from '../lib/api'

const HomeTwo = ({ allPosts }) => {

  return (
    <MenuContextProvider>
      <Layout PageTitle="Home">
        <HeaderOne />
        <SliderOne />
        <FeatureOne />
        <AboutOne />
       
        <ServiceOne />
       
        <AboutTwo />
        <VideoOne />
        <TestimonialsOne />
        <BlogOne allPosts={allPosts} />
       
        <CtaOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}


export default HomeTwo;
