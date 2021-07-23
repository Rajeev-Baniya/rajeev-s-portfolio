import React, { Fragment } from "react";
import NavbarC from "./components/NavBarC";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Works from "./components/Works";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <Fragment>
      <NavbarC />
      <Home />
      <About />
      <Resume />
      <Works />
      <Contacts />
    </Fragment>
  );
};

export default App;
