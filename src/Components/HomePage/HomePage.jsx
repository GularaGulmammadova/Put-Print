import React from 'react'
import "./homePage.css";
import { CiSearch } from "react-icons/ci";
import white_tshirt from "./../../site assets/t-shirt oversize/white/ui kart/tshirta.png";
import black_tshirt from "./../../site assets/t-shirt oversize/black/ui kart/tshirt.png";
import w_tshirt from './../../site assets/t-shirt/white/ui kart/W_UI.png'
import b_tshirt from './../../site assets/t-shirt/black/ui kart/B_UI.png'
import hoodie from "./../../site assets/hoody/white/ui kart/hoodie_w.png";
import black_hoodie from './../../site assets/hoody/black/ui kart/hoodie_B.png'
import sweater from "./../../site assets/sweater/black/ui kart/sweater_b_ui.png";
import white_sweater from './../../site assets/sweater/white/ui kart/sweater_w_ui.png'
import cap from "./../../site assets/cap/cap.png";
import bag from "./../../site assets/eco bag/ui cardd/eco-bag.png";
import needle from "./../../site assets/logo and icons/needle.png";
import size from "./../../site assets/logo and icons/size.png";
import { Link } from "react-router-dom";
import homepageclothing from "../../../img/homepageclothing.png";
import homepagelogo from "../../../img/homepagelogo.png"
function HomePage() {
    return (
        <>
            <div className='home-row'>
                <div className='home-row-text'>
                    <p>Sizin üçün <br /> keyfiyyətli dizaynlar</p>
                    <p>İstədiyiniz dizaynlarla öz üslubunuzu yaradın.</p>
                    <button className='home-page-btn'>Dizayna Başla</button>
                </div>
                <div className='home-row-images'>
                    <img src={homepageclothing} alt="" />
                </div>
            </div>
            <div className='home-page-part2'>
                <p>Hazır məhsullarımız</p>
                <div className="home-product-cards">
                    <Link to="/">  <div className="home-product-card">
                        <div className="image">
                            <img src={white_tshirt} alt="" />
                            <img src={black_tshirt} alt="" className="hover-img" />
                        </div>
                        <hr />
                        <div className="home-product-name">Oversize t-shirt</div>
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
                                <span>35₼</span>
                                <button className="home-design-button">Sifariş et</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/"><div className="home-product-card">
                        <div className="image">
                            <img src={b_tshirt} alt="" className="hover-img" />
                            <img src={w_tshirt} alt="" />
                        </div>
                        <hr />
                        <div className="home-product-name">T-shirt</div>
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
                                <span>35₼</span>
                                <button className="home-design-button">Sifariş et</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/"> <div className="home-product-card">
                        <div className="image">
                            <img src={hoodie} alt="" />
                            <img src={black_hoodie} alt="" className="hover-img" />
                        </div>
                        <hr />
                        <div className="home-product-name">Qalın sviter</div>
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
                                <span>35₼</span>
                                <button className="home-design-button">Sifariş et</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/"><div className="home-product-card">
                        <div className="image">
                            <img src={sweater} alt="" className="hover-img" />
                            <img src={white_sweater} alt="" />
                        </div>
                        <hr />
                        <div className="home-product-name">Nazik Sviter</div>
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
                                <span>35₼</span>
                                <button className="home-design-button">Sifariş et</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <div className="home-product-card">
                        <div className="image">
                            <img src={cap} alt="" />
                        </div>
                        <hr />
                        <div className="home-product-name">Kepka</div>
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
                                <span>35₼</span>
                                <button className="home-design-button">Sifariş et</button>
                            </div>
                        </div>
                    </div>
                    <div className="home-product-card">
                        <div className="image">
                            <img src={bag} alt="" />
                        </div>
                        <hr />
                        <div className="home-product-name" style={{ marginBottom: '50px' }}>Eko çanta</div>
                        
                        <div className="home-desc">
                            <div className="home-price">
                                <span>35₼</span>
                                <button className="home-design-button">Sifariş et</button>
                            </div>
                        </div>
                        

                    </div>
                    <Link to="/"><div className="home-product-card">
                        <div className="image">
                            <img src={sweater} alt="" className="hover-img" />
                            <img src={white_sweater} alt="" />
                        </div>
                        <hr />
                        <div className="home-product-name">Sviter</div>
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
                                <span>35₼</span>
                                <button className="home-design-button">Sifariş et</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/"><div className="home-product-card">
                        <div className="image">
                            <img src={sweater} alt="" className="hover-img" />
                            <img src={white_sweater} alt="" />
                        </div>
                        <hr />
                        <div className="home-product-name">Sviter</div>
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
                                <span>35₼</span>
                                <button className="home-design-button">Sifariş et</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                    
                </div>
            </div>
            <div className='home-page-part3'>
                <p>Bizə güvənən brendlər</p>
                <div className='home-page-logos'>
                    <img src={homepagelogo} alt="" />
                    <img src={homepagelogo} alt="" />
                    <img src={homepagelogo} alt="" />
                    <img src={homepagelogo} alt="" />
                    <img src={homepagelogo} alt="" />
                </div>

            </div>

        </>
    )
}

export default HomePage
