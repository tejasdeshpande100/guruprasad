import React from "react";
import { useFormik } from "formik";
import { datePickerToUST } from "utils/timeFunctions";

const ContactThree = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className="contact_form_area contact_us section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-right contact_details">
              <div className="hero-title-with-shape">
                <h4 className="heading_with_border">Contact with us</h4>
                <h1>We are available 24/7 by fax, e-mail or by phone</h1>
              </div>
              <p>
                You can also use our quick contact form to ask a question about
                our services that we regularly provide.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-right contact-right-style-2 responsive_mt">
              <form onSubmit={formik.handleSubmit}>
                <input
                  className="half_width input_m_right"
                  type="text"
                  name="first_name"
                  placeholder=" First name"
                  onChange={formik.handleChange}
                  value={formik.values.first_name}
                />
                <input
                  className="half_width "
                  type="text"
                  name="last_name"
                  placeholder=" Last name"
                  onChange={formik.handleChange}
                  value={formik.values.last_name}
                />
                <input
                  className="half_width input_m_right"
                  type="EMAIL"
                  name="email"
                  placeholder="Email address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <input
                  className="half_width "
                  type="tel"
                  name="mobile"
                  placeholder="Phone number"
                  onChange={formik.handleChange}
                  value={formik.values.mobile}
                />
                {/* <span className="select_icon_half">
                  <select name="select" id="select">
                    <option value="option0">Select Service</option>
                    <option value="option1">Optical Services</option>
                    <option value="option2">Contact Lenses</option>
                    <option value="option3">Pathology Laboratory</option>
                    <option value="option4">Oculoplasty Services</option>
                    <option value="option5">Medical Services</option>
                    <option value="option6">Glaucoma Services</option>
                    <option value="option7">Cornea Services</option>
                    <option value="option8">Refractive Surgery Services</option>
                    <option value="option9">Cataract Services</option>
                  </select>
                </span> */}
                <textarea
                  name="message"
                  id="content"
                  cols="20"
                  rows="5"
                  placeholder="Write message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                ></textarea>
                <button className="btn-yellow" value="SUBMIT NOW">
                  SUBMIT NOW
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="contact_location_box">
            <div className="contact__location_details">
              <div className="contact_location_map">
              <span className="icon-location"></span>
                <div>
                  <p>
                Guruprasad Netra rugnalaya pvt Ltd 
Plot no 200, samarthnagar 
Aurangabad 431001
Ph no 9890080872    
</p> 
                </div>
                <div>
                Timings:-
Tuesday, Thursday, Saturday: 
Morning 10:30 am to 3:30 pm
Evening 6 to 8 pm
                </div>
              </div>
              <div className="contact_location_map">
                <span className="icon-location"></span>
                <div>
                <p>
                Guruprasad eye care 
Khiwansara bussiness centre 
Near MIDC police station and SBI bank
More chowk, bajajnagar aurangabad
431005
                </p>
                </div>
                <div>Timings:-
Monday and Friday 
Morning 10.30 am to 3 pm evening 6 to 8 pm
Wednesday only evening opd 6 to 8 pm</div>
              </div>
            </div>
            
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactThree;
