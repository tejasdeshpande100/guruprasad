import React, { useState, useEffect } from "react";
import { client } from "../../client";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [content, setContent] = useState([]);
  
  const getEntry = async () => {
    const entry = await client.getEntry(slug);
    setContent(entry);
  };
  useEffect(() => {
    getEntry();
  }, [slug]);

  const imageUrl = content?.fields?.image?.fields?.file?.url;
  const title = content?.fields?.title?.content[0]?.content[0]?.value;
  const topExplanation = content?.fields?.blogExplanation;
  const bottomExplanation = content?.fields?.blogExplanation2;
  const date = content?.fields?.date.slice(0, 10);
  const author = content?.fields?.author?.content[0]?.content[0].value;
  const centerImage = content?.fields?.centerImages;
  const url = `https:${imageUrl}`;
  let imagess =
    centerImage &&
    centerImage?.map((obj) => {
      return obj?.fields;
    });

  let centerImageFiltered = imagess?.map((obj) => {
    return obj?.file?.url;
  });
  const centerUrl = `https:${centerImageFiltered}`;

  console.log("firssst", centerUrl);
  if (!content) return <div>Loading..</div>;
  return (
    <section className="blog_details_section section_padding">
      {content ? (
        <Container>
          <Row>
            <Col lg={12}>
              <div>
                <div className="blog_left_box">
                  <div className="bl_share_img">
                    <Image
                      loader={() => url}
                      src={url ? url : ""}
                      alt={title}
                      width={50}
                      height={50}
                      layout="responsive"
                    />
                    <span className="blog_date">{date}</span>
                  </div>
                  <div className="blog_share_details blog_share_details__details">
                    <span className="comment_author">
                      by <a href="#">{author}</a> - <a href="#">3 Comments</a>
                    </span>
                    {title}
                    <p>{topExplanation}</p>
                    {imagess?.map((obj) => {
                      return (
                        <Image
                          loader={() => obj?.file?.url}
                          src={
                            obj?.file?.url ? `"https:"${obj?.file?.url}` : ""
                          }
                          alt={title}
                          width={200}
                          height={200}
                        />
                      );
                    })}

                    <p>{bottomExplanation}</p>
                  </div>
                </div>
                <div className="blog_social_share_box">
                  <div className="share_box_left">
                    <p>
                      Tags: <a href="#">Keratoconus,</a>{" "}
                      <a href="#"> Corneal transplantation,</a>
                    </p>
                  </div>
                  <div className="share_box_left text-end">
                    <ul>
                      <li>
                        <a href="">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-youtube-play"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        "Loading"
      )}
    </section>
  );
};

export default BlogPost;
