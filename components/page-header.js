import React, { Fragment } from "react";
import Link from "./link";

const PageHeader = ({
  title,
  name,
  BackgroundImage = "http://www.guruprasadeyeclinics.com/images/about-us-banner.png",
}) => {
  return (
    <section
      className="breadcrumb_section text-center section_padding"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <ul className="breadcrumb">
        <li style={{ color: "#09aeb8!important" }}>
          <Link href="/">Home</Link>
        </li>
        <li>{name}</li>
      </ul>
      <h1 className="text-white  ">{title}</h1>
    </section>
  );
};

export default PageHeader;
