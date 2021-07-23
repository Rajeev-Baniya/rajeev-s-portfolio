import React, { Fragment } from "react";
import Typed from "react-typed";

const Home = () => {
  return (
    <Fragment>
      <div id="home" className="homee">
        <div className="main-info">
          <h2 className="myHeading">I AM RAJEEV BANIYA</h2>
          <br />
          <Typed
            className="typed-text"
            strings={["Web Developer", "FullStack Developer"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <br />
          <div className="link-icons">
            <a href="https://www.instagram.com/rajeev_baniya/" target="_blank">
              <i class="fab fa-instagram fa-3x"></i>
            </a>
            <a href="https://github.com/Rajeev-Baniya" target="_blank">
              <i class="fab fa-github fa-3x"></i>
            </a>
            <a href="https://www.facebook.com/rajeev.baniya.11" target="_blank">
              <i class="fab fa-facebook fa-3x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rajeev-baniya-72aa42217/"
              target="_blank"
            >
              <i class="fab fa-linkedin fa-3x"></i>
            </a>
          </div>

          <a href="#about" className="btnn">
            <i class="fas fa-angle-double-down fa-5x"></i>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
