import React, { useState } from "react";
import "./style.css";
import { LeftPart } from "./LeftPart";
import { RightPart } from "./RightPart";

// const RightPart = () => {
//   return (
//     <section className="aboutMe__right">
//       <section className="aboutMe__skill">
//         <h1>Skill set</h1>
//         <article className="skill--card">
//           <h2>Languages: </h2>
//           <h4>JavaScript, TypeScript, HTML5, CSS3, Python</h4>
//         </article>
//         <article className="skill--card">
//           <h2>Database{" & "}Cloud: </h2>
//           <h4>MySQL, MongoDB, AWS</h4>
//         </article>
//         <article className="skill--card">
//           <h2>Web Development: </h2>
//           <h4>React, NodeJs, Material-UI, Jest, Bootstrap, jQuery</h4>
//         </article>
//         <article className="skill--card">
//           <h2>Deployment{" & "}Intergration: </h2>
//           <h4>Git, SVN, Jira, Docker</h4>
//         </article>
//         <article className="skill--card">
//           <h2>Others: </h2>
//           <h4>Lightroom, PhotoShop, DaVinci Resolve</h4>
//         </article>
//       </section>
//       <section className="aboutMe__contact">
//         <h1>Contact</h1>
//         <section className="contact__info">
//           <div>
//             <Phone></Phone>
//             <h3>: 480-454-8864 </h3>
//           </div>
//           <div>
//             <Email></Email>
//             <h3>: alvinchen668@gmail.com</h3>
//           </div>
//         </section>
//       </section>
//     </section>
//   );
// };

const initShow = {
  "ABOUT ME": false,
  "SKILL SET": false,
  "CONTACT": false,
};

export const Home = () => {
  const [showRight, setShowRight] = useState(initShow);

  return (
    <div className="aboutMe">
      <LeftPart showRight={showRight} setShowRight={setShowRight}></LeftPart>
      <RightPart showRight={showRight}></RightPart>
    </div>
  );
};
