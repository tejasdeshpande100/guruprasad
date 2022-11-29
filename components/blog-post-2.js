import React from "react";
import Img from "./img";
import blogDetails1 from "@/images/blog/keratoconus.jpeg";

const BlogPost = () => {
  return (
    <div>
      <div className="blog_left_box">
        <div className="bl_share_img">
          <Img src={blogDetails1} alt="blog details" layout="responsive" />
          <span className="blog_date">26 July</span>
        </div>
        <div className="blog_share_details blog_share_details__details">
          <span className="comment_author">
            by <a href="#">admin</a> - <a href="#">3 Comments</a>
          </span>
          <h1>Keratoconus</h1>
          <p>
            Keratoconus (KC) is a non-inflammatory degenerative disorder of the
            eye in which the normally round dome-shaped cornea progressively
            thins causing a cone like bulge to develop. If not treated the
            cornea can bulge to the extent that it perforates and needs corneal
            transplantation.
          </p>
          <p>
            It is generally first diagnosed in young people at puberty or in
            their late teen’s.
          </p>
          <p>
            Cornea is the clear window of the eye and is responsible for
            refracting most of the light coming into the eye. Therefore,
            abnormalities of the cornea severely affect the way we see the world
            making simple tasks like driving ,watching TV or reading a book
            difficult. In the earliest stages, KC causes slight blurring and
            distortion of vision and increased sensitivity to light .Patient
            typically presents with myopia and astigmatism. Patients vision will
            seem to fluctuate over a period of months driving them to change
            their lens prescriptions frequently but as the condition worsens
            contact lenses are required in majority of cases.
          </p>
          <p>
            Eye glasses, RGP and scleral fit contact lenses are prescribed to
            correct vision adequately. The contact lenses must be carefully
            fitted and frequent check up and lens changes may be needed to
            achieve and maintain good vision. INTACS, intracorneal rings are
            sometimes used to improve contact lens fit.
          </p>
          <p>
            Corneal crosslinking is a treatment option to halt the progression
            of keratoconus. In this procedure the cornea is strengthened by
            treating it with riboflavin and ultraviolet irradiation.
          </p>
          <p>
            Every myope with astigmatism and frequent change of spectacle power
            should undergo corneal topography examination so that early KC can
            be diagnosed, treated and future need of corneal transplantation be
            avoided.
          </p>
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
  );
};

export default BlogPost;
