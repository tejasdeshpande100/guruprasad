import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "@/components/blog-card";
import { BlogTwoData } from "@/data";
import { client } from "../client";
const BlogTwo = () => {
  const [content, setContent] = useState([]);
  const getAllentries = async () => {
    try {
      await client.getEntries({ content_type: "blog" }).then((entries) => {
        if (!!entries) {
          setContent(entries);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllentries();
  }, []);
  let filterdData =
    !!content?.items &&
    content?.items?.map((obj) => {
      return obj;
    });

  return (
    <section className="blog_share_area section_padding blog-page">
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            {filterdData &&
              filterdData?.map((data) => {
                return <BlogCard data={data} />;
              })}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogTwo;
