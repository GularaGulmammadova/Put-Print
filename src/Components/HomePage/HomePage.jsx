/* eslint-disable no-unused-vars */
import React from "react";
import "./HomePage.css";
import black_hoodie1 from "../newproducts/hoodieblack1.png";
import white_hoodie1 from "../newproducts/hoodiewhite1.png";
import black_hoodie2 from "../newproducts/hoodieblack2.png";
import white_hoodie2 from "../newproducts/hoodiewhite2.png";
import black_hoodie3 from "../newproducts/hoodieblack3.png";
import white_hoodie3 from "../newproducts/hoodiewhite3.png";
import black_hoodie4 from "../newproducts/hoodieblack4.png";
import white_hoodie4 from "../newproducts/hoodiewhite4.png";
import black_hoodie5 from "../newproducts/hoodieblack5.png";
import white_hoodie5 from "../newproducts/hoodiewhite5.png";
import black_hoodie6 from "../newproducts/hoodieblack6.png";
import white_hoodie6 from "../newproducts/hoodiewhite6.png";
import black_hoodie7 from "../newproducts/hoodieblack7.png";
import white_hoodie7 from "../newproducts/hoodiewhite7.png";
import black_hoodie8 from "../newproducts/hoodieblack8.png";
import white_hoodie8 from "../newproducts/hoodiewhite8.png";
import size from "./../../site assets/logo and icons/size.png";
import { Link } from "react-router-dom";
import homepageclothing from "../../../img/homepageclothing.png";
import homepagelogo from "../../../img/homepagelogo.png";

const HomePage = () => {
  const Show = () => {
    const editorModal = document.getElementById("editorModal");
    editorModal.style.display = "block";
  };


  return (
    <div className="container">
      <div className="home-row">
        <div className="home-row-text">
          <p>
          Öz  tərzini <br/> yarat
          </p>
          <p>Etdiyin dizaynlarla fərqini göstər!
          </p>
          <button onClick={() => Show()} className="home-page-btn">Dizayna Başla</button>
        </div>
        <div className="home-row-images">
          <img src={homepageclothing} alt="" />
        </div>
      </div>
      <div className="home-page-part2" >
        <p>AtlazWear – dan kolleksiyalar</p>
        <div className="home-product-cards">
          <Link to="/">
            <div className="home-product-card">
              <div className="image">
              <img src={black_hoodie1} alt="" className="hover-img" />
              <img src={white_hoodie1} alt="" />
              </div>
              <hr />
              <div className="home-product-name">Kapşonlu Sviter</div>
              <div className="home-detail">
                <div className="home-colors">
                  <div
                    data-color="white"
                    className="color"
                    style={{ backgroundColor: "#DEDEDE" }}
                  ></div>
                  <div
                    className="color"
                    data-color="black"
                    style={{ backgroundColor: "#000000" }}
                  ></div>
                </div>
                <div className="size">
                  <span>/</span> <img src={size} alt="" />
                  S-2XL
                </div>
              </div>
              <div className="home-desc">
                <div className="home-price">
                  <span>48₼</span>
                  <button className="home-design-button">Sifariş et</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="home-product-card">
              <div className="image">
              <img src={black_hoodie2} alt="" className="hover-img" />
              <img src={white_hoodie2} alt="" />
              </div>
              <hr />
              <div className="home-product-name">Kapşonlu Sviter</div>
              <div className="home-detail">
                <div className="home-colors">
                  <div
                    className="color"
                    style={{ backgroundColor: "#DEDEDE" }}
                  ></div>
                  <div
                    className="color"
                    style={{ backgroundColor: "#000000" }}
                  ></div>
                </div>
                <div className="home-size">
                  <span>/</span> <img src={size} alt="" /> S-2XL
                </div>
              </div>
              <div className="home-desc">
                <div className="home-price">
                  <span>48₼</span>
                  <button className="home-design-button">Sifariş et</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/">
            {" "}
            <div className="home-product-card">
              <div className="image">
              <img src={black_hoodie3} alt="" className="hover-img" />
              <img src={white_hoodie3} alt="" />
              </div>
              <hr />
              <div className="home-product-name">Kapşonlu Sviter</div>
              <div className="home-detail">
                <div className="home-colors">
                  <div
                    className="color"
                    style={{ backgroundColor: "#DEDEDE" }}
                  ></div>
                  <div
                    className="color"
                    style={{ backgroundColor: "#000000" }}
                  ></div>
                </div>
                <div className="size">
                  <span>/</span> <img src={size} alt="" />
                  S-2XL
                </div>
              </div>
              <div className="home-desc">
                <div className="home-price">
                  <span>48₼</span>
                  <button className="home-design-button">Sifariş et</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="home-product-card">
              <div className="image">
                <img src={black_hoodie4} alt="" className="hover-img" />
                <img src={white_hoodie4} alt="" />
              </div>
              <hr />
              <div className="home-product-name">Kapşonlu Sviter</div>
              <div className="home-detail">
                <div className="home-colors">
                  <div
                    className="color"
                    style={{ backgroundColor: "#DEDEDE" }}
                  ></div>
                  <div
                    className="color"
                    style={{ backgroundColor: "#000000" }}
                  ></div>
                </div>
                <div className="home-size">
                  <span>/</span> <img src={size} alt="" /> S-2XL
                </div>
              </div>
              <div className="home-desc">
                <div className="home-price">
                  <span>48₼</span>
                  <button className="home-design-button">Sifariş et</button>
                </div>
              </div>
            </div>
          </Link>
          <div className="home-product-card">
            <div className="image">
            <img src={black_hoodie5} alt="" className="hover-img" />
            <img src={white_hoodie5} alt="" />
            </div>
            <hr />
            <div className="home-product-name">Kapşonlu Sviter</div>
            <div className="home-detail">
              <div className="home-colors">
                <div
                  className="color"
                  style={{ backgroundColor: "#DEDEDE" }}
                ></div>
                <div
                  className="color"
                  style={{ backgroundColor: "#000000" }}
                ></div>
              </div>
              <div className="home-size">
                <span>/</span>
                <img src={size} alt="" /> S-2XL
              </div>
            </div>
            <div className="home-desc">
              <div className="home-price">
                <span>48₼</span>
                <button className="home-design-button">Sifariş et</button>
              </div>
            </div>
          </div>
          <div className="home-product-card">
            <div className="image">
            <img src={black_hoodie6} alt="" className="hover-img" />
            <img src={white_hoodie6} alt="" />
            </div>
            <hr />
            <div className="home-product-name" style={{ marginBottom: "50px" }}>
            Kapşonlu Sviter
            </div>
            <div className="home-desc">
              <div className="home-price">
                <span>48₼</span>
                <button className="home-design-button">Sifariş et</button>
              </div>
            </div>
          </div>
          <Link to="/">
            <div className="home-product-card">
              <div className="image">
                <img src={black_hoodie7} alt="" className="hover-img" />
                <img src={white_hoodie7} alt="" />
              </div>
              <hr />
              <div className="home-product-name">Kapüşonlu Sviter</div>
              <div className="home-detail">
                <div className="home-colors">
                  <div
                    className="color"
                    style={{ backgroundColor: "#DEDEDE" }}
                  ></div>
                  <div
                    className="color"
                    style={{ backgroundColor: "#000000" }}
                  ></div>
                </div>
                <div className="home-size">
                  <span>/</span> <img src={size} alt="" /> S-2XL
                </div>
              </div>
              <div className="home-desc">
                <div className="home-price">
                  <span>48₼</span>
                  <button className="home-design-button">Sifariş et</button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="home-product-card">
              <div className="image">
              <img src={black_hoodie8} alt="" className="hover-img" />
              <img src={white_hoodie8} alt="" />
              </div>
              <hr />
              <div className="home-product-name">Kapşonlu Sviter</div>
              <div className="home-detail">
                <div className="home-colors">
                  <div
                    className="color"
                    style={{ backgroundColor: "#DEDEDE" }}
                  ></div>
                  <div
                    className="color"
                    style={{ backgroundColor: "#000000" }}
                  ></div>
                </div>
                <div className="home-size">
                  <span>/</span> <img src={size} alt="" /> S-2XL
                </div>
              </div>
              <div className="home-desc">
                <div className="home-price">
                  <span>48₼</span>
                  <button className="home-design-button">Sifariş et</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="home-page-part3">
        <p>Bizə güvənən brendlər</p>
        <div className="home-page-logos">
          <img src={homepagelogo} alt="" />
          <img src={homepagelogo} alt="" />
          <img src={homepagelogo} alt="" />
          <img src={homepagelogo} alt="" />
          <img src={homepagelogo} alt="" />
        </div>
      </div>
    </div>
    
  );
};

export default HomePage;