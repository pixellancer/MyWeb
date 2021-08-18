import React from "react";
import "./style.css";
import { data } from "../../data";

export const Work = () => {
  return (
    <div className="works">
      {data.map((work) => (
        <article key={work.id} className="works__card">
          <header className="card--header">
            <div>
              <h2>
                {work.company}, <span> {work.title} </span>{" "}
              </h2>
            </div>
            <h3> {work.time} </h3>
          </header>

          <ul>
            {work.list.map((ele) => (<li>{ele}</li>))}
          </ul>
        </article>
      ))}
    </div>
  );
};
