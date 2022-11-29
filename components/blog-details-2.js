import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogPost from "./blog-post-2";

const BlogDetails = () => {
  return (
    <section className="blog_details_section section_padding">
      <Container>
        <Row>
          <Col lg={12}>
            <BlogPost />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
