import { AboutFourData } from "@/data";
import React from "react";
import GuruprasadSamarthnagar from "@/images/guruprasad-samarthnagar.jpg";
import Image from "next/dist/client/image";

const AboutFour = () => {
  const { blockTitle } = AboutFourData;
  const { title, text1, text2 } = blockTitle;
  function createMarkup() {
    return { __html: title };
  }
  return (
    <section className="about_style_3_area section_padding">
      <div className="container">
        <div className="row">
        <Image src={GuruprasadSamarthnagar} />

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

export default AboutFour;
