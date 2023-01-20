import { useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiFillQuestionCircle,
} from "react-icons/ai";

const Faq = ({ faq }) => {
  console.log(faq);
  const [expand, setExpand] = useState(false);
  const clickHandler = (e) => {
    setExpand((state) => !state);
  };
  if (!faq) return <></>;
  return (
    <div style={{ width: "100%", marginBottom: "20px" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#13ADB8",
          color: "white",
          fontSize: "20px",
          padding: "10px",
          cursor: "pointer",
        }}
        onClick={clickHandler}
      >
        <span style={{ width: "5%", display: "flex", alignItems: "center" }}>
          <AiFillQuestionCircle />
        </span>
        <span style={{ width: "90%", display: "flex", alignItems: "center" }}>
          {faq.question}
        </span>
        <span style={{ width: "5%", display: "flex", alignItems: "center" }}>
          {!expand && <AiOutlineArrowDown />}
          {expand && <AiOutlineArrowUp />}
        </span>
      </div>
      {expand && (
        <div
          style={{
            width: "100%",
            fontSize: "16px",
            backgroundColor: "#eee",
            padding: "10px",
          }}
        >
          {faq.answer}
        </div>
      )}
    </div>
  );
};

const Faqs = (props) => {
  console.log(props);
  return (
    <div>
      {props.faqs.map((faq, idx) => (
        <Faq faq={faq} key={idx} />
      ))}
      <Faq />
    </div>
  );
};
export default Faqs;
