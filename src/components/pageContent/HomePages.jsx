import React from "react";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";
import About from "../home/about/About";
import Home from "../home/homes/Home";
import Service from "../home/services/Service";
import Wrapper from "../home/wrapper/Wrapper";

const HomePages = () => {
  return (
    <>
      <Home />
      <About />
      <Service />
      <Wrapper />
      <Blog />
      <Contact />
    </>
  );
};

export default HomePages;
