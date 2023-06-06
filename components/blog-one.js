import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostPreview from "./blog/post-preview"; 

const BlogOne = ({allPosts}) => {
  
  return (
    <section className="blog_share_area section_padding">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="hero-section-title text-center">
              <h1>Some essential and interesting blogs</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32 mt-6">
        {allPosts?.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default BlogOne;
