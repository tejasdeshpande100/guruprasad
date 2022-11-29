import React from "react";
import Img from "./img";
import blogDetails1 from "@/images/blog/eat_healthy.jpeg";

const BlogPost = () => {
  return (
    <div>
      <div className="blog_left_box">
        <div className="bl_share_img">
          <Img src={blogDetails1} alt="blog details" layout="responsive" />
          <span className="blog_date">1 July</span>
        </div>
        <div className="blog_share_details blog_share_details__details">
          <span className="comment_author">
            by <a href="#">admin</a> - <a href="#">3 Comments</a>
          </span>
          <h1>Eat healthy</h1>
          <p>
            Eating eggs is good for eyes as it contains lutein and
            zeaxanthin.Adding fish to your diet will give you omega 3 fatty
            acids which will prevent dry eye syndrome.If you are vegetarian eat
            lot of spinach,green leafy vegetables,carrots and fuits.These foods
            will provide you with lot of vitamin A and antioxidants which will
            help you prevent degenerative eye diseases
          </p>
          <h4 className="mb-2">Regular eye check up</h4>
          <p>
            Consult your ophthalmologist at least once in a year even if you do
            not have any eye related problems.This will help you detect various
            eye related ailments and help to treat preventable diseases.patients
            having systemic illness like diabetes ,hypertension should have
            their retinal examination done frequently.Conditions like glaucoma
            can be detected early and thus can prevent visual loss.
          </p>
          <h4 className="mb-2">Keep blinking</h4>
          <p>
            Keep blinking frequently so that the tear film spreads evenly and
            keeps your eyes fresh. Computer users and mobile users blink less
            frequently and lead to dry eye syndrome.Give rest to the eye by
            looking at a distance when you are sitting infront of the screen for
            a long time.Do relaxation exercises and you can use ice packs to
            give rest to your eyes.
          </p>
          <h4 className="mb-2">Stay hydrated</h4>
          <p>
            Keep siping lots of water at regular intervals to keep your cornea
            healthy and prevent dry eye.Avoid dry air air and sitting for long
            hours in airconditioned rooms as they take away all the moisture
            from the eyes.
          </p>
          <h4 className="mb-2">Wear safety glasses</h4>
          <p>
            Wear safety glasses to protect your eyes from ultraviolet radiation
            ,eye injuries ,chemicals and allergic manifestations due to air
            pollutants.
          </p>
          <h4 className="mb-2">Remove eye make up</h4>
          <p>
            Make a habit to remove eye make up at night so that you do not get
            allergic manifestations later on.Maintain a good lid hygiene by
            rubbing them with baby shampoo thus preventing blepharitis.
          </p>
          <h4 className="mb-2">Quit smoking and alcohol</h4>
          <p>
            Smoking and alcohol can damge your optic nerve,macula and cause
            cataract.so quit habbit of smoking and drinking alcohol.
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
