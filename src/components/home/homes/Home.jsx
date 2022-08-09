import React from "react";
import "../../../utils/css/home.css";
import homePic from "../../../utils/assets/home-pic.jpg";
import food1 from "../../../utils/assets/food-1.png";
import food2 from "../../../utils/assets/food-2.png";
import food3 from "../../../utils/assets/food-3.png";
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
            <a href="/contact">
              <button className="primary-btn">Contact Us</button>
            </a>
          </div>
        </div>
      </section>

      <section className="home-second topMargin">
        <div className="container">
          <div className="heading">
            <h1>Featured Products</h1>
          </div>

          <div className="grid">
            <div className="box">
              <div className="image">
                <img src={food1} alt="shop-pic" />
              </div>
              <div className="text">
                <p>Price: $10</p>
                <p>Lorem ipsum dolor sit amet smet.</p>
                <h2>Pedigree</h2>
                <a href="/shop">
                  <button className="primary-btn ">Shop now</button>
                </a>
              </div>
            </div>
            {/* Box ends here */}
            <div className="box">
              <div className="image">
                <img src={food2} alt="shop-pic" />
              </div>
              <div className="text">
                <p>Price: $12</p>
                <p>Lorem ipsum dolor sit amet smet.</p>
                <h2>Mockup</h2>
                <a href="/shop">
                  <button className="primary-btn ">Shop now</button>
                </a>
              </div>
            </div>
            {/* Box ends here */}
            <div className="box">
              <div className="image">
                <img src={food3} alt="shop-pic" />
              </div>
              <div className="text">
                <p>Price: $15</p>
                <p>Lorem ipsum dolor sit amet smet.</p>
                <h2>Smartbones</h2>
                <a href="/shop">
                  <button className="primary-btn ">Shop now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-third topMargin">
        <div className="container">
          <div className="heading">
            <h2>Enumeration</h2>
          </div>

          <div className="grid-3">
            <div className="box" id="box90">
              <h4>
                Join thousands of Happy
                <br /> Dog owners who have
                <br /> Successfully completed
                <br /> Our courses.
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                odit dolor nemo velit expedita totam ad officiis voluptatum
                facilis perspiciatis, autem reprehenderit recusandae? Atque
                voluptatum minima cumque eligendi magni sint cupiditate
                obcaecati veniam perspiciatis voluptatibus repellat, provident
                quaerat asperiores suscipit, vitae perferendis. Quo nam ex
                itaque recusandae, sit sapiente provident!
              </p>
            </div>
            {/* box ends */}
            <div className="box">
              <div className="small-grid">
                <div className="sg-row">
                  <h2></h2>
                  <h3></h3>
                  <p></p>
                </div>
                <div className="sg-row">
                  <h2></h2>
                  <h3></h3>
                  <p></p>
                </div>
              </div>
              <div className="small-grid">
                <div className="sg-row">
                  <h2></h2>
                  <h3></h3>
                  <p></p>
                </div>
                <div className="sg-row">
                  <h2></h2>
                  <h3></h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
