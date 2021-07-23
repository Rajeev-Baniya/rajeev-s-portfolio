import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import Data from "../Data";

const Works = () => {
  return (
    <section id="works" className="workss">
      <div className="works-content">
        <div className="container">
          <h2 className="myHeading edu"> Experience</h2>
          <p className="description">
            BrandBuilder <br />
            Backend Developer <br />
            <small>
              <li> 2021|01|3 to 2021|07|03 </li>
            </small>
          </p>
          <hr />
          <h2 className="myHeading edu">Works</h2>
          <p className="description">
            I have also worked in some of my personal projects. Most of them are
            MERN stack. However, I havent deployed all of them. You can check my
            github account to know about the projects I have done.
          </p>
          <br />
          <div className="card-container">
            {Data.map((item) => {
              return (
                <Card
                  key={item.id}
                  bg="light"
                  text="dark"
                  style={{ width: "22rem", height: "25rem", marginLeft: "7px" }}
                  className="mb-2 ml-3"
                >
                  <Card.Header>Project {item.id}</Card.Header>
                  <Card.Body>
                    <Card.Title>{item.name} </Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <hr />
                    <Card.Title>Features</Card.Title>
                    <Card.Text>
                      {item.features.map((feature) => {
                        return (
                          <ul>
                            <li>{feature}</li>
                          </ul>
                        );
                      })}
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
          <hr />
          <a
            href="https://github.com/Rajeev-Baniya"
            target="_blank"
            title="link to my github"
          >
            <i class="fab fa-github fa-3x"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;
