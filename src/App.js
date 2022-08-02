import React from "react";
import Header from "./components/home/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePages from "./components/pageContent/HomePages";
import "./App.css";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePages} />
        </Switch>
        <br />
        <br />
        <Footer />
      </Router>
    </>
  );
};

export default App;
