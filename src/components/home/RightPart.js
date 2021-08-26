import "./style.css";
import { Phone, Email, LocationOn } from "@material-ui/icons";
import { useState } from "react";
import image from "../../bgimages/WechatIMG633.jpeg";
import { useRef } from "react";

const Selfie = () => {
  return <img className="aboutMe__selfie" src={image} alt="selfie" />;
};

const AboutMe = () => {
  return (
    <section className="aboutMe__context">
      <h1> About Me </h1>{" "}
      <p>
        I am a Web developer with 5 years of experience building websites and
        web applications for both business and consumer use. I specialize in
        JavaScript and have professional experience working with React, Node.js,
        and Express. Also familiar with phases of Software Development Life
        Cycle and highly experienced in Agile development. I'm quietly
        confident, naturally curious, and perpetually working on improving my
        life.{" "}
      </p>{" "}
    </section>
  );
};

const Skills = () => {
  return (
    <section className="aboutMe__skill">
      <h1> Skill set </h1>{" "}
      <article className="skill--card">
        <h2> Languages: </h2>{" "}
        <h4> JavaScript, TypeScript, HTML5, CSS3, Python </h4>{" "}
      </article>{" "}
      <hr />
      <article className="skill--card">
        <h2>
          {" "}
          Database {" & "}
          Cloud:{" "}
        </h2>{" "}
        <h4> MySQL, MongoDB, AWS </h4>{" "}
      </article>{" "}
      <hr />
      <article className="skill--card">
        <h2> Web Development: </h2>{" "}
        <h4> React, NodeJs, Material - UI, Jest, Bootstrap, jQuery </h4>{" "}
      </article>{" "}
      <hr />
      <article className="skill--card">
        <h2>
          {" "}
          Deployment {" & "}
          SDLC management:{" "}
        </h2>{" "}
        <h4> Git, SVN, Jira </h4>{" "}
      </article>{" "}
      <hr />
      <article className="skill--card">
        <h2> Others: </h2> <h4> Lightroom, PhotoShop, DaVinci Resolve </h4>{" "}
      </article>{" "}
    </section>
  );
};

const Contaction = () => {
  return (
    <section className="aboutMe__contact">
      <h1> Contact </h1>{" "}
      <section className="contact__info">
        <div>
          <Phone> </Phone> <h3>: 480 - 454 - 8864 </h3>{" "}
        </div>{" "}
        <div>
          <Email> </Email> <h3>: alvinchen668 @gmail.com </h3>{" "}
        </div>{" "}
        <div>
          <LocationOn> </LocationOn> <h3>: Phoenix, Arizona </h3>{" "}
        </div>{" "}
      </section>{" "}
    </section>
  );
};

export const RightPart = ({ showRight }) => {
  // const [showSelfie, setShowSelfie] = useState(true);
  const showSelfie = useRef(true);

  const show = () => {
    let selector = "";
    for (const [key, value] of Object.entries(showRight)) {
      if (value === true) {
        selector = key;
      }
    }
    console.log("render?", selector);
    if (selector === "ABOUT ME") {
      return <AboutMe> </AboutMe>;
    } else if (selector === "SKILL SET") {
      return <Skills> </Skills>;
    } else if (selector === "CONTACT") {
      return <Contaction> </Contaction>;
    }
    showSelfie.current = false;
  };

  return (
    <section className="aboutMe__right">
      {" "}
      {showSelfie.current ? <Selfie /> : ""} {show()}{" "}
    </section>
  );
};
