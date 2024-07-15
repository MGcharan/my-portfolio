import React from "react";
import "./experience.css";

import { IoLogoHtml5 } from "react-icons/io";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5> Skills & Abilities</h5>

      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoHtml5 size="1.5em" color="#ff5722" />
              <h4>HTML</h4>
              <small className="text-light">Advanced</small>
            </article>

            <article className="experience__details">
              <SiCss3 size="1.5em" color="#0027ff" />
              <h4>CSS</h4>
              <small className="text-light">Advanced</small>
            </article>

            <article className="experience__details">
              <SiBootstrap size="1.5em" color="##8b23c5" />
              <h4>Bootstrap</h4>
              <small className="text-light">Advanced</small>
            </article>

            <article className="experience__details">
              <FaReact size="1.5em" color="#00A3FF" />
              <h4>ReactJs</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience__details">
              <IoLogoJavascript size="1.5em" color="#FFEF06" />
              <h4>Javascript </h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="experience__details">
              <IoLogoNodejs size="2em" color="#0EEA11" />
              <h4>Node.js</h4>
              <small className="text-light">Basic</small>
            </article>

            <article className="experience__details">
              <SiExpress size="2em" color="black" />
              <h4>Javascript </h4>
              <small className="text-light">Basic</small>
            </article>

            <article className="experience__details ">
              <SiMongodb size="2em" color="#0EEA11" />
              <h4>MongoDB</h4>
              <small className="text-light">Basic</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
