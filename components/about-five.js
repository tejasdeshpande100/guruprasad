import { AboutFourData } from "@/data";
import React from "react";
import GuruprasadKhivansara1 from "@/images/guruprasad-khivansara-1.jpg";
import GuruprasadKhivansara2 from "@/images/guruprasad-khivansara-2.jpg";
import GuruprasadKhivansara3 from "@/images/guruprasad-khivansara-3.jpg";
import Image from "next/dist/client/image";

const AboutFive = () => {
  const { blockTitle } = AboutFourData;
  const { title, text1, text2 } = blockTitle;
  function createMarkup() {
    return { __html: title };
  }
  return (
    <section className="about_style_3_area section_padding">
      <div className="container">
        <div className="row">
        <div className="col-md-4 col-sm-6">
        <Image src={GuruprasadKhivansara1} />
        </div>
        <div className="col-md-4 col-sm-6">
        <Image src={GuruprasadKhivansara2} />
        </div>
        <div className="col-md-4 col-sm-6">
        <Image src={GuruprasadKhivansara3} />
        </div>

          <div className="col-md-4 col-sm-6">
            <div className="about_style_3_details">
              <h1 dangerouslySetInnerHTML={createMarkup()} />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="about_style_3_details">
              <div className="about_us_shape">
              </div>
              <p>{text1}</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="about_style_3_details">
              <p>{text2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFive;
