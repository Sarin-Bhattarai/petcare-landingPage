import React from "react";
import "../../../utils/css/home.css";
import homePic from "../../../utils/assets/home-pic.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src={homePic} alt="dog" />
            </div>
          </div>
          <div className="right topMargin">
            <h1>
              WAGGING TAILS <br />
              SINCE 2008
            </h1>
            <div className="socialIcon">
              <FaFacebookF className="i facebook" />
              <FaInstagram className="i instagram" />
              <FaTwitter className="i twitter" />
              <FaYoutube className="i youtube" />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              odit velit in dicta vero quae amet, odio voluptas. Odit magnam eum
              quam? Rem adipisci mollitia aut numquam temporibus quasi vitae.
            </p>
            <button className="primary-btn">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
