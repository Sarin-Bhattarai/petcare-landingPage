import React from "react";
import "../../utils/css/footer.css";
import logo from "../../utils/assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Faq from "react-faq-component";

const Footer = () => {
  const data = {
    rows: [
      {
        title: "Lorem Ipsum dolor sit",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit.`,
      },

      {
        title: "Lorem Ipsum dolor sit",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit.`,
      },

      {
        title: "Lorem Ipsum dolor sit",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit.`,
      },
    ],
  };

  const styles = {
    titleTextColor: "white",
    rowTitleColor: "white",
    bgColor: "#08071c",
    rowContentColor: "white",
    arrowColor: "white",
    transitionDuration: "0.8s",
  };

  const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
  };
  return (
    <>
      <footer>
        <div className="container grid1">
          <div className="box">
            <img src={logo} alt="footerLogo" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem ad optio qui.
            </p>
            <div className="socialIcon">
              <FaFacebookF className="i" />
              <FaInstagram className="i" />
              <FaTwitter className="i" />
              <FaYoutube className="i" />
            </div>
          </div>

          <div className="box">
            <h2>Quick Links</h2>
            <ul>
              <a href="/about">
                <li>About</li>
              </a>
              <a href="/blog">
                <li>Blog</li>
              </a>
              <li>Shop</li>
              <a href="/contact">
                <li>Contact</li>
              </a>
              <a href="/privacy">
                <li>Privacy</li>
              </a>
            </ul>
          </div>

          <div className="box">
            <h2>FAQs</h2>
            <div>
              <Faq data={data} styles={styles} config={config} />
            </div>
          </div>
          <div className="box">
            <h2>Get in Touch</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              expedita!
            </p>
            <div className="icon">
              <FaMapMarkerAlt className="ia" />
              <label>Location: 12 Bagale Tol, Kathmandu, Nepal</label>
            </div>
            <div className="icon">
              <FaPhoneAlt className="ia" />
              <label>Phone: +977 9800000000</label>
            </div>
            <div className="icon">
              <FaEnvelope className="ia" />
              <label>Email: wagging@gmail.com</label>
            </div>
          </div>
        </div>

        <div className="legal container">
          <p>Copyright @2022. All rights reserved.</p>
          <label>
            Design & Developed by <span>App Technologies</span>
          </label>
        </div>
      </footer>
    </>
  );
};

export default Footer;
