import logoDark from "@/images/guruprasad-logo.png";
import { FaFirstAid, FaEye, FaHospital, FaSyringe } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

export const Logo = {
  dark: logoDark,
};

export const NavLinksData = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "About Me",
    url: "/about",
  },
  {
    name: "Hospitals",
    url: "",
    subItems: [
      {
        name: "Guruprasad Eye Hospital",
        url: "/hospitals/gEyeHospital",
      },
      {
        name: "Guruprasad Eye Care",
        url: "/hospitals/gEyeCare",
      }
    ],
  },

  {
    name: "Specialities",
    url: "#",
    subItems: [
      {
        name: "Cataract",
        url: "/services/cataract",
      },
      {
        name: "Refractive Surgery",
        url: "/services/refractive-surgery",
      },
      {
        name: "Glaucoma",
        url: "/services/glaucoma",
      },
      {
        name: "Oculoplasty",
        url: "/services/oculoplasty",
      },
      {
        name: "Cornea",
        url: "/services/cornea",
      },
      {
        name: "Contact Lenses",
        url: "/services/contact-lenses",
      },
      {
        name: "Medical Retina",
        url: "/services/medical-retina",
      },
    ],
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Media",
    url: "/media",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export const TopbarInfos = [
  {
    icon: "icon-placeholder",
    tagLine: "Address",
    text: "66 Broklyn Street, New York",
    url: "#",
  },
  {
    icon: "icon-phone-call",
    tagLine: "Call Now",
    text: "666 888 000",
    url: "tel:666-888-000",
  },
  {
    icon: "icon-clock",
    tagLine: "Open Hours",
    text: " Mon-Sat: 9am - 6pm",
    url: "#",
  },
];

import slideOneImage1 from "@/images/slider/g-slider-3.jpg";
import slideOneImage2 from "@/images/slider/g-slider-2.jpg";
import slideOneImage3 from "@/images/slider/g-slider-1.jpg";

export const SlideOneData = [
  {
    backgroundImage: slideOneImage1,
    title: "Replace with meaningful text ",
    text: "Lorem Ipsum is simply",
    button: "GET A FREE QUOTE",
    url: "/contact",
  },
  {
    backgroundImage: slideOneImage2,
    title: "Lorem Ipsum is simply dummy ",
    text: "Lorem Ipsum is simply",
    button: "GET A FREE QUOTE",
    url: "/contact",
  },
  {
    backgroundImage: slideOneImage3,
    title: "Lorem Ipsum is simply dummy ",
    text: "Lorem Ipsum is simply",
    button: "GET A FREE QUOTE",
    url: "/contact",
  },
];

import slideOneImage4 from "@/images/slider/slider-4.jpg";
import slideOneImage5 from "@/images/slider/slider-5.jpg";

export const SlideTwoData = [
  {
    backgroundImage: slideOneImage4,
    title: "Heating and Air Conditioning Specialis",
    button: "GET A FREE QUOTE",
    url: "/contact",
  },
  {
    backgroundImage: slideOneImage5,
    title: "Keep your family happy this winter, and warm.",
    button: "GET A FREE QUOTE",
    url: "/contact",
  },
  {
    backgroundImage: slideOneImage4,
    title: "Heating and Air Conditioning Specialist",
    button: "GET A FREE QUOTE",
    url: "/contact",
  },
];

export const FeatureOneData = [
  {
    icon: <MdVerifiedUser />,
    title: "40+ Years of Experience",
  },
  {
    icon: <FaFirstAid />,
    title: "Over 80,000+ Treatments",
  },
  {
    icon: <FaEye />,
    title: "Advance Eye Care",
  },
  {
    icon: <FaHospital />,
    title: "4000 Sq. ft. Hospital",
  },
  {
    icon: <FaSyringe />,
    title: "50,000+ Cataract Services",
  },
];

export const AboutOneData = {
  title:
    "One stop solution for all eye care for all ages under one roof- advanced cataract surgery/refractive surgey LASIK /squint surgery/ oculoplasty",
  tagLine: "Welcome to Guruprasad",
  content:
    "Guruprasad Netra Rugnalaya Pvt Ltd. is the leading eyecare facility in Aurangabad and we have been managing our patients health since 1980. We offer various eye services you need in a comfortable and well equiped hospital premises",
  button: {
    url: "/about",
    label: "READ MORE",
  },
};

import serviceImage1 from "@/images/services/g-service-1.png";
import serviceImage2 from "@/images/services/g-service-2.png";
import serviceImage3 from "@/images/services/g-service-3.png";

export const ServiceOneData = {
  title: "Our Specialities",
  posts: [
    {
      image: serviceImage1,
      icon: "icon-snow",
      title: "Cataract Services",
      text: "",
      button: {
        label: "READ MORE",
        url: "/services/cataract",
      },
    },
    {
      image: serviceImage2,
      icon: "icon-snow",
      title: "Refractive Surgery",
      text: "",
      button: {
        label: "READ MORE",
        url: "/services/refractive-surgery",
      },
    },
    {
      image: serviceImage3,
      icon: "icon-snow",
      title: "Glaucoma",
      text: "",
      button: {
        label: "READ MORE",
        url: "/services/glaucoma",
      },
    },
    {
      image: serviceImage3,
      icon: "icon-snow",
      title: "Oculoplasty",
      text: "",
      button: {
        label: "READ MORE",
        url: "/services/oculoplasty",
      },
    },
    {
      image: serviceImage3,
      icon: "icon-snow",
      title: "Cornea",
      text: "",
      button: {
        label: "READ MORE",
        url: "/services/cornea",
      },
    },
    {
      image: serviceImage3,
      icon: "icon-snow",
      title: "Contact Lenses",
      text: "",
      button: {
        label: "READ MORE",
        url: "/services/contact-lenses",
      },
    },
    {
      image: serviceImage3,
      icon: "icon-snow",
      title: "Medical Retina",
      text: "",
      button: {
        label: "READ MORE",
        url: "/ervices/medical-retina",
      },
    },
  ],
};

export const CallToActionOneData = {
  title: "Avail expert consultation now",
  button: {
    url: "/contact",
    label: "GET IN TOUCH",
  },
};

export const CallToActionTwoData = {
  left: {
    text: "Air Conditioning Services",
    title: "Cool it down",
  },
  right: {
    text: "Heating Services",
    title: "Heat it up",
  },
};

export const FunfactOneData = {
  shapeImage: "#",
  title: "Numbers Speakers.",
  posts: [
    {
      count: 8870,
      text: "Air Conditioning Repairs and Install",
    },
    {
      count: 4760,
      text: "Air Conditioning Repairs and Install",
    },
    {
      count: 9032,
      text: "Air Conditioning Repairs and Install",
    },
  ],
};

import galleryOne1 from "@/images/gallery/gallery-1.jpg";
import galleryOne2 from "@/images/gallery/gallery-2.jpg";
import galleryOne3 from "@/images/gallery/gallery-3.jpg";
import galleryOne4 from "@/images/gallery/gallery-4.jpg";
import galleryOne5 from "@/images/gallery/gallery-5.jpg";
import galleryOne6 from "@/images/gallery/gallery-6.jpg";

export const GalleryOneData = [
  {
    title: "Maintenance and Repair",
    image: galleryOne1,
    url: "#",
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne2,
    url: "#",
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne3,
    url: "#",
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne4,
    url: "#",
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne5,
    url: "#",
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne6,
    url: "#",
  },
];

import testimonial1 from "@/images/testimonial/Anirudh-Bhosle.jpeg";
import testimonial2 from "@/images/testimonial/Divya-Kulkarni.jpeg";
import testimonial3 from "@/images/testimonial/Janet-Jithuri.jpeg";

export const TestimonialOneData = {
  title: "Testimonials",
  posts: [
    {
      image: testimonial1,
      content:
        "This is a great hospital with a very co-operative staff Dr. Sameer and Dr. Neha always respond to the calls and messages in case of emergencies.",
      name: "Anirudh Bhosle",

    },
    {
      image: testimonial2,
      content:
        "Dr. Neha operated my father for cataract with trifocal and now he is able to see clearly for distance and near vision both. Thanks for the great efforts taken by Guruprasad team.",
      name: "Divya Kulkarni",

    },
    {
      image: testimonial3,
      content:
        "I am taking treatment from Dr. A.A deshpande since my school days. I have a very big minus number and he shifted me on rigid gas permeable lenses which made my number stable and allowed me to go glass free.",
      name: "Janet Jithuri",

    },
  ],
};

export const FooterBottomData = {
  social: [
    {
      icon: "fa fa-twitter",
      url: "#",
    },
    {
      icon: "fa fa-facebook-f",
      url: "#",
    },
    {
      icon: "fa fa-linkedin",
      url: "#",
    },
    {
      icon: "fa fa-youtube-play",
      url: "#",
    },
  ],
};

export const FooterInfo = [
  [{
    icon: "icon-placeholder",
    tagLine: "Address",
    text: "Guruprasad Netra rugnalaya pvt Ltd Plot no 200, samarthnagar Aurangabad 431001 Ph no 9890080872",
    url: "#",
  },
  {
    icon: "icon-contact",
    tagLine: "Email",
    text: "guruprasadeyehospital@gmail.com",
    url: "mailto:guruprasadeyehospital@gmail.com",
  },
  {
    icon: "icon-clock",
    tagLine: "Open Hours",
    text: "Tuesday, Thursday, Saturday: Morning 10:30 am to 3:30 pm, Evening 6 pm to 8 pm",
    url: "#",
  }],
  [
    {
      icon: "icon-placeholder",
      tagLine: "Address",
      text: "Guruprasad eye care Khiwansara bussiness centre Near MIDC police station and SBI bankMore chowk, bajajnagar aurangabad 431005",
      url: "#",
    },
    {
      icon: "icon-contact",
      tagLine: "Email",
      text: "guruprasadeyehospital@gmail.com",
      url: "mailto:guruprasadeyehospital@gmail.com",
    },
    {
      icon: "icon-clock",
      tagLine: "Open Hours",
      text: "Monday and Friday: Morning 10:30 am to 3:00 pm, Evening 6 pm to 8 pm, Wednesday: only evening opd 6 pm to 8 pm",
      url: "#",
    }
  ]
];

export const FooterWidgets = {
  about: {
    title: "Get In Touch",
    contact1: { label: "+91 0240-2332450", url: "tel:+91 2402332450" },
    contact2: { label: "+91 0241-2329450", url: "tel:+91 2412329450" },
    phone: { label: "+91 9890080872", url: "tel:+91 9890080872" },
  },
  linkOne: {
    title: "Specialities",
    menu: [
      {
        lable: "Cataract",
        url: "#",
      },
      {
        lable: "Glaucoma",
        url: "#",
      },
      {
        lable: "Cornea",
        url: "#",
      },
      {
        lable: "Medical Retina",
        url: "#",
      },
    ],
  },
  linkTwo: {
    menu: [
      {
        lable: "Refractive Surgery",
        url: "#",
      },
      {
        lable: "Oculoplasty",
        url: "#",
      },
      {
        lable: "Contact Lenses",
        url: "#",
      },
    ],
  },
  address: {
    title: "Clinc Addresses",
    adresses: [
      {
        lable:
          "Guruprasad Netra rugnalaya pvt Ltd Plot no 200, samarthnagar Aurangabad 431001 Ph no 9890080872",
        url: "#",
      },
      {
        lable:
          "Guruprasad eye care Khiwansara bussiness centre Near MIDC police station and SBI bank More chowk, bajajnagar aurangabad 431005",
        url: "#",
      },
    ],
  },
};

import blog1 from "@/images/blog/eat_healthy.jpeg";
import blog2 from "@/images/blog/keratoconus.jpeg";

// export const BlogOneData = {
//   title: "Our latest blogs ( pick one from previous website )",
//   posts: [
//     {
//       image: blog1,
//       date: "07 Nov",
//       author: "admin",
//       commentCount: 3,
//       title: "Eye Health",
//       url: "/blog-details",
//       text: "Eating eggs is good for eyes as it contains lutein and zeaxanthin. Adding fish to your diet will give you omega 3 fatty acids which will prevent dry eye syndrome ...",
//     },
//     {
//       image: blog2,
//       date: "07 Nov",
//       author: "admin",
//       commentCount: 3,
//       title: "Keratoconus",
//       url: "/blog-details-2",
//       text: "Keratoconus (KC) is a non-inflammatory degenerative disorder of the eye in which the normally round dome-shaped cornea progressively ...",
//     },
//   ],
// };

export const BlogTwoData = {
  posts: [
    {
      image: blog1,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Eye Health",
      url: "/blog-details",
      text: "Eating eggs is good for eyes as it contains lutein and zeaxanthin. Adding fish to your diet will give you omega 3 fatty acids which will prevent dry eye syndrome ...",
    },
    {
      image: blog2,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Keratoconus",
      url: "/blog-details-2",
      text: "Keratoconus (KC) is a non-inflammatory degenerative disorder of the eye in which the normally round dome-shaped cornea progressively ...",
    },
  ],
};

export const VideoOneData = {
  title: "Watch how we work",
  id: "4pXMAK7rwyM",
};

export const AboutTwoData = {
  caption: " 20 <span>years experience</span> ",
  blockTitle: {
    title:
      "We pride ourselves in having the best, soothing and serene ambience and respectful staff who always welcome you with a warm smile and make u feel right at home. ",
    tagline: "Why choose us",
  },
  offer: {
    tagline: "10% off",
    text: "on our all services for senior citizens.",
  },
};

import team1 from "@/images/team/doc-1.png";
import team2 from "@/images/team/doc-2.png";
import team3 from "@/images/team/doc-3.png";

export const TeamOneData = {
  title: "Meet The Doctors ( This section should be removed )",
  posts: [
    {
      image: team1,
      name: "Dr. A A Deshpande",
      designation: "Founder Member & Director",
      social: [
        {
          icon: "fa-facebook",
          url: "#",
        },
        {
          icon: "fa-twitter",
          url: "#",
        },
        {
          icon: "fa-youtube-play",
          url: "#",
        },
      ],
    },
    {
      image: team2,
      name: "Dr. Neha Deshpande",
      designation: "Director & Eye Surgeon",
      social: [
        {
          icon: "fa-facebook",
          url: "#",
        },
        {
          icon: "fa-twitter",
          url: "#",
        },
        {
          icon: "fa-youtube-play",
          url: "#",
        },
      ],
    },
    {
      image: team3,
      name: "Dr. Sameer Deshpande",
      designation: "Director & Eye Surgeon",
      social: [
        {
          icon: "fa-facebook",
          url: "#",
        },
        {
          icon: "fa-twitter",
          url: "#",
        },
        {
          icon: "fa-youtube-play",
          url: "#",
        },
      ],
    },
    {
      image: team2,
      name: "Dr. Name",
      designation: "Ophthalmology",
      social: [
        {
          icon: "fa-facebook",
          url: "#",
        },
        {
          icon: "fa-twitter",
          url: "#",
        },
        {
          icon: "fa-youtube-play",
          url: "#",
        },
      ],
    },
  ],
};

export const AboutThreeData = {
  blockTitle: {
    tagline: "Our success story",
    title: "Experience quality air conditioning service in broklyn new york",
  },
  summery:
    "There are many variations of passages of lorem ipsum available, but the majorify have suffered alteration in some form by injected humour, or randmised words which don't look even slightly believable.",
  button: {
    lable: "LEARN MORE",
    url: "/about",
  },
  box: [
    {
      icon: "icon-maintenance",
      title: "We make as cool again",
    },
    {
      icon: "icon-big-ac",
      title: "Keep your business cool",
    },
  ],
};

export const AboutFourData = {
  blockTitle: {
    title: "We are trusted by more than <span>8900</span> clients",
    text1:
      "GURUPRASAD NETRA RUGNALAYA PVT. LTD. is the leading eye care facility in Aurangabad and we have been managing our patient's health since 1980. We offer various eye services you need in a comfortable and well equipped hospital premises. At GNR Pvt Ltd., your eyes are taken care by more than a decade experienced ophthalmic surgeon Dr. A A Deshpande (Founder Member), Dr. Neha Deshpande & Dr. Sameer Deshpande. This experienced team of ophthalmologists make optimum use of cutting-edge technology in healing diseased eyes with compassion to relieve every patient’s pain.",
    text2:
      " We practice the art of care in various subspecialties like Cataract, General Ophthalmology, Cornea & Refractive Surgery, Glaucoma & Oculoplasty. Patients love the ambience and the service experienced at the hospital.",
  },
};

export const BenefitOneData = {
  title: "Our benefits",
  posts: [
    {
      icon: "icon-big_clock",
      title: "Emergency Service",
      text: "There are many passages of lorem ipsum available but the majority have alteration.",
    },
    {
      icon: "icon-wallet",
      title: "No Upfront Payment",
      text: "There are many passages of lorem ipsum available but the majority have alteration.",
    },
    {
      icon: "icon-diploma",
      title: "Satisfaction Guarantee",
      text: "There are many passages of lorem ipsum available but the majority have alteration.",
    },
    {
      icon: "icon-mechanic",
      title: "8 Years Experience",
      text: "There are many passages of lorem ipsum available but the majority have alteration.",
    },
  ],
};
export const allSpecialities = [
  { label: "Cataract", url: "/services/cataract" },
  { label: "Refractive Surgery", url: "/services/refractive-surgery" },
  { label: "Glaucoma", url: "/services/glaucoma" },
  { label: "Oculoplasty", url: "/services/oculoplasty" },
  { label: "Cornea", url: "/services/cornea" },
  { label: "Contact Lenses", url: "/services/contact-lenses" },
  { label: "Medical Retina", url: "/services/medical-retina" },
];
export const ServiceSidebarListData = [
  {
    icon: "icon-snow",
    title: "Cooling Services",
    list: [
      {
        label: "Air Conditioner Maintenance",
        url: "#",
      },
      {
        label: "Air Conditioner Repair",
        url: "#",
      },
      {
        label: "Air Conditioner Replacement",
        url: "#",
      },
      {
        label: "Ductless Split AC Systems",
        url: "#",
      },
      {
        label: "Duct Cleaning & Installation",
        url: "#",
      },
    ],
  },
  {
    icon: "icon-fire",
    title: "Heating Services",
    list: [
      {
        label: "Air Conditioner Maintenance",
        url: "#",
      },
      {
        label: "Air Conditioner Repair",
        url: "#",
      },
      {
        label: "Air Conditioner Replacement",
        url: "#",
      },
      {
        label: "Ductless Split AC Systems",
        url: "#",
      },
      {
        label: "Duct Cleaning & Installation",
        url: "#",
      },
    ],
  },
];

export const ServiceSidebarOtherData = [
  {
    icon: "icon-ac",
    title: "Other Services",
    content: {
      icon: "icon-support",
      title: "<span>Contact with us </span>+2402332450",
    },
  },
  {
    icon: "icon-building",
    title: "Commercial Services",
    content: {
      icon: "icon-building",
      title: "<span>Contact with us </span>2402332450",
    },
  },
];

import comment1 from "@/images/comment-1.jpg";
import comment2 from "@/images/comment-2.jpg";

export const CommentPostData = [
  {
    name: "David Martin",
    image: comment1,
    time: "10 Nov, 2018 - 4:00 pm",
    text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet.",
  },
  {
    name: "Jessica Brown",
    image: comment2,
    time: "10 Nov, 2018 - 4:00 pm",
    text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet.",
  },
];
