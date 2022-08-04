import React from "react";
import Header from "./components/home/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/homes/Home";
import About from "./components/home/about/About";
import Services from "./components/home/services/Service";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Privacy from "./components/privacy/Privacy";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/privacy" exact component={Privacy} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
