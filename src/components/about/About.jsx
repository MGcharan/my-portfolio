import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image"></div>
        </div>

        <div className="about_content">
          <h4 className="heading"> Hello!...</h4>
          <h3 className="heading">
            {" "}
            I'm <span className="highlight">Giricharan</span>
          </h3>

          <p>
            I recently completed my MSc in Computer Science at Bishop Heber
            College. I am passionate about web development and have a strong
            proficiency in React.js. My short-term goal is to become a MERN
            Stack Developer, where I can leverage my skills in MongoDB,
            Express.js, React, and Node.js to build dynamic and responsive web
            applications. My long-term aspiration is to become a Full Stack
            Developer, continuously expanding my knowledge and expertise to
            handle both front-end and back-end development seamlessly. I am
            always eager to learn new technologies and stay updated with the
            latest trends in the tech industry. I believe in the power of
            collaboration and enjoy working in a team environment to solve
            complex problems and create innovative solutions. In my free time, I
            love watching movies, which helps me unwind and find inspiration for
            creative problem-solving. I am excited to bring my skills and
            enthusiasm to new challenges and opportunities in the field of web
            development.
          </p>

          <a href="#contact" className="btn  btn-2 btn-about">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
