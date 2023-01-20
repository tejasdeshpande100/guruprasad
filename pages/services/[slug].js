import Service from "@/components/service";
import { useRouter } from "next/router";
import servicedetails1 from "@/images/services/service-details.jpg";

const allSpecialities = [
  { label: "Cataract", url: "#" },
  { label: "Refractive Surgery", url: "#" },
  { label: "Glaucoma", url: "#" },
  { label: "Oculoplasty", url: "#" },
  { label: "Cornea", url: "#" },
  { label: "Contact Lenses", url: "#" },
  { label: "Medical Retina", url: "#" },
];
const details = {
  cataract: {
    title: "Cataract",
    description:
      "Cataract is the clouding of natural crystalline lens which gradually blurs your vision. It is an age related degenerative change that is the leading cause of preventable blindness in the world.",
    img: servicedetails1,
    symptoms: [
      "Cloudy or blurry vision.",
      "Colours seem faded.",
      "Glare. Headlights, lamps, or sunlight may appear too bright. A halo may appear around lights.",
      " Poor night vision.",
      "Double vision or multiple images in one eye. (This symptom may clear as the cataract gets denser.",
      "Frequent prescription changes in your eyeglasses or contact lenses.",
    ],
    allSpecialities,
  },
  "refractive-surgery": {
    title: "Refractive Surgery",
    description:
      "LASIK (Laser Assisted in Situ Keratomileusis) eye surgery is safe, quick and painless procedure under topical anaesthesia. This laser surgery for vision correction reduces the dependence on minus or plus numbered spectacles or contact lenses. To ensure, if LASIK is suitable for you or not, we conduct a pre-LASIK evaluation to analyse the health of your eyes.",
    img: servicedetails1,
    symptoms: [
      " Corneal Topography to study the surface map of the Cornea.",
      "Cornea Pachymetry and Anterior Segment OCT to assess the thickness of Cornea.",
      "Orthoptic check-up for an eye muscle balance check-up.",
      "BIOMETRY to assess disparity in length between the two eyes if any.",
      "Dry Eye Evaluation",
      "Detailed Refraction",
      "Evaluation of Eye Pressure",
      "Fundoscopy for Retina Evaluation",
    ],
    allSpecialities,
  },
  glaucoma: {
    title: "Glaucoma",
    description:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting industry has been the ndustry standard dummy text ever sincer they llam id condimentum purus In non ex at ligula fringilla bortis. Ut et mauris auctor, aliquet nulla sed, aliquam mauris. Vestibulum sed malesuada  dolor. Integer fringilla odio a dolor aliquet, eu euismod lectus porttitor. Proin et libero nec eros eleifend commodo Phasellus sodales des volutpat diam, id sagittis purus egestas dapibus.",
    img: servicedetails1,
    symptoms: [
      "Cloudy or blurry vision.",
      "Colours seem faded.",
      "Glare. Headlights, lamps, or sunlight may appear too bright. A halo may appear around lights.",
      " Poor night vision.",
      "Double vision or multiple images in one eye. (This symptom may clear as the cataract gets denser.",
      "Frequent prescription changes in your eyeglasses or contact lenses.",
    ],
    allSpecialities,
  },
  oculoplasty: {
    title: "Oculoplasty",
    img: servicedetails1,
    description:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting industry has been the ndustry standard dummy text ever sincer they llam id condimentum purus In non ex at ligula fringilla bortis. Ut et mauris auctor, aliquet nulla sed, aliquam mauris. Vestibulum sed malesuada  dolor. Integer fringilla odio a dolor aliquet, eu euismod lectus porttitor. Proin et libero nec eros eleifend commodo Phasellus sodales des volutpat diam, id sagittis purus egestas dapibus.",
    img: servicedetails1,
    symptoms: [
      "Cloudy or blurry vision.",
      "Colours seem faded.",
      "Glare. Headlights, lamps, or sunlight may appear too bright. A halo may appear around lights.",
      " Poor night vision.",
      "Double vision or multiple images in one eye. (This symptom may clear as the cataract gets denser.",
      "Frequent prescription changes in your eyeglasses or contact lenses.",
    ],
    allSpecialities,
  },
  cornea: {
    title: "Cornea",
    img: servicedetails1,
    description:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting industry has been the ndustry standard dummy text ever sincer they llam id condimentum purus In non ex at ligula fringilla bortis. Ut et mauris auctor, aliquet nulla sed, aliquam mauris. Vestibulum sed malesuada  dolor. Integer fringilla odio a dolor aliquet, eu euismod lectus porttitor. Proin et libero nec eros eleifend commodo Phasellus sodales des volutpat diam, id sagittis purus egestas dapibus.",
    img: servicedetails1,
    symptoms: [
      "Cloudy or blurry vision.",
      "Colours seem faded.",
      "Glare. Headlights, lamps, or sunlight may appear too bright. A halo may appear around lights.",
      " Poor night vision.",
      "Double vision or multiple images in one eye. (This symptom may clear as the cataract gets denser.",
      "Frequent prescription changes in your eyeglasses or contact lenses.",
    ],
    allSpecialities,
  },
  "contact-lenses": {
    title: "Contact Lenses",
    img: servicedetails1,
    description:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting industry has been the ndustry standard dummy text ever sincer they llam id condimentum purus In non ex at ligula fringilla bortis. Ut et mauris auctor, aliquet nulla sed, aliquam mauris. Vestibulum sed malesuada  dolor. Integer fringilla odio a dolor aliquet, eu euismod lectus porttitor. Proin et libero nec eros eleifend commodo Phasellus sodales des volutpat diam, id sagittis purus egestas dapibus.",
    img: servicedetails1,
    symptoms: [
      "Cloudy or blurry vision.",
      "Colours seem faded.",
      "Glare. Headlights, lamps, or sunlight may appear too bright. A halo may appear around lights.",
      " Poor night vision.",
      "Double vision or multiple images in one eye. (This symptom may clear as the cataract gets denser.",
      "Frequent prescription changes in your eyeglasses or contact lenses.",
    ],
    allSpecialities,
  },
  "medical-retina": {
    title: "Medical Retina",
    img: servicedetails1,
    description:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting industry has been the ndustry standard dummy text ever sincer they llam id condimentum purus In non ex at ligula fringilla bortis. Ut et mauris auctor, aliquet nulla sed, aliquam mauris. Vestibulum sed malesuada  dolor. Integer fringilla odio a dolor aliquet, eu euismod lectus porttitor. Proin et libero nec eros eleifend commodo Phasellus sodales des volutpat diam, id sagittis purus egestas dapibus.",
    img: servicedetails1,
    symptoms: [
      "Cloudy or blurry vision.",
      "Colours seem faded.",
      "Glare. Headlights, lamps, or sunlight may appear too bright. A halo may appear around lights.",
      " Poor night vision.",
      "Double vision or multiple images in one eye. (This symptom may clear as the cataract gets denser.",
      "Frequent prescription changes in your eyeglasses or contact lenses.",
    ],
    allSpecialities,
  },
};

const Services = (props) => {
  const router = useRouter();
  console.log(router.query.slug);
  return <Service details={details[router.query.slug]} />;
};
export default Services;
