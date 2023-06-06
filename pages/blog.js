import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import Container from '../components/blog/container'
import MoreStories from '../components/blog/more-stories'
import HeroPost from '../components/blog/hero-post'
import Intro from '../components/blog/intro'
import BlogLayout from '../components/blog/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

const Blog = ({ allPosts }) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <MenuContextProvider>
      <Layout PageTitle="Blog Page">
        <HeaderOne />
        <PageHeader
          title="A directory of essential & interesting information"
          name="Blog"
        />
        
        <BlogLayout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </BlogLayout>

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


export default Blog;
