import React from "react";
import { ProgressBar } from "react-bootstrap";

const Resume = () => {
  return (
    <section id="resume" className="resumee">
      <div className="resume-content">
        <div className="eduction container">
          <h2 className="myHeading edu">Education</h2>
          <p className="description">
            Mount Annapurna Campus <br />
            Bachelor's Degree, Bsc. CSIT <br />
            <small>
              <li> 2016-2021 </li>
            </small>
          </p>
          <hr />
          <h2 className="myHeading edu"> Skills </h2>
          <p className="description">HTML:</p>
          <ProgressBar now={80} style={{ height: "7%" }} />
          <br />
          <p className="description">CSS:</p>
          <ProgressBar now={70} style={{ height: "7%" }} />
          <br />
          <p className="description">Javascript:</p>
          <ProgressBar now={80} style={{ height: "7%" }} />
          <br />
          <p className="description">NodeJs:</p>
          <ProgressBar now={80} style={{ height: "7%" }} />
          <br />
          <p className="description">MongoDB:</p>
          <ProgressBar now={85} style={{ height: "7%" }} />
          <br />
          <p className="description">ReactJs:</p>
          <ProgressBar now={70} style={{ height: "7%" }} />
          <br />
          <p className="description">Git/Github:</p>
          <ProgressBar now={80} style={{ height: "7%" }} />
        </div>
      </div>
    </section>
  );
};

export default Resume;
