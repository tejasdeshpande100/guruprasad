import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BlogOne = () => {
  
  return (
    <section className="blog_share_area section_padding">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="hero-section-title text-center">
              <h1>Some essential and interesting Blogs</h1>
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default BlogOne;
