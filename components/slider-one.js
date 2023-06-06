import React from "react";
import Link from "@/components/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { SlideOneData } from "@/data";
SwiperCore.use([Autoplay, Navigation, EffectFade]);
const SliderOne = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <section className="main-slider header_slider_area ">
      <Swiper {...mainSlideOptions}>
        {SlideOneData.map(
          ({ backgroundImage, title, text, button, url }, index) => (
            <SwiperSlide key={index}>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${backgroundImage.src})` }}
              ></div>

              <Container>
                <Row>
                  <Col lg="6">
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default SliderOne;
