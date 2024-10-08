import React from "react";
import CV from "../../assets/GIRI Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn ">
        Download CV
      </a>
      <a href="#contact" className="btn btn-2">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
