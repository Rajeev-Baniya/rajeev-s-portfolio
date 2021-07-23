import React from "react";
import Me from "../images/me.jpg";
import { Link } from "react-router-dom";
import rajeevcv from "./files/rajeevcv.pdf";

const About = () => {
  return (
    <section id="about" className="aboutt">
      <div className="about-content">
        <img src={Me} className="myImage" alt="Rajeev Baniya" />

        <div className=" container">
          <h2 className="myHeading edu">About Me</h2>
          <p className="description">
            {" "}
            Hi, I am Rajeev Baniya. I am from Pokhara. I am a Bsc.CSIT graduate.
            I am passionate about coding. I like to work in group projects as
            well as personal projects.
          </p>
          <hr />
          <h2 className="myHeading edu">Contact Details</h2>
          <p className="description">
            Rajeev Baniya <br />
            Batulechaur-16, Pokhara <br />
            Nepal <br />
            +9779805832174 <br />
            rajeevbaniya11@gmail.com
          </p>
          <br />
          <a href={rajeevcv} download target="_blank" title="click to download">
            <button className="btn btn-dark btn-lg">
              <i class="fas fa-download"></i> Download Resume
            </button>
          </a>
          <hr />

          <a href="#resume">
            <i class="fas fa-angle-double-down fa-3x fab"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
