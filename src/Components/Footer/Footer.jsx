// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Footer.css";
import logo from '../../site assets/logo and icons/1x/Asset 131x.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-column">
                <img src={logo} alt="Logo" className="footer-logo" />
            </div>
            <div className="footer-column">
                <ul>
                    <li><a href="#">Ana səhifə</a></li>
                    <li><a href="#">Dizayn et</a></li>
                    <li><a href="#" >Populyar Məhsullar</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <ul>
                    <li><a href="#">Məhsullar</a></li>
                    <li><a href="#">T-shirt</a></li>
                    <li><a href="#">Kapüşonlu Sviter</a></li>
                    <li><a href="#">Sviter</a></li>
                    <li><a href="#">Ekoçanta</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <ul>
                    <li><a href="#">Haqqımızda</a></li>
                    <li><Link to="/about">Missiyamız</Link></li>
                </ul>
            </div>
            <div className="footer-column" id='contact'>
                <ul >
                    <li><a href="">Əlaqə</a></li>
                    <li><a href="#">+994506976357</a></li>
                    <li><a href="#">putandprint@gmail.com </a></li>
                </ul>
            </div>
            <div className="footer-column">
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/putandprint/?igsh=cnJ2aHI1czgzNnRr"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.tiktok.com/@put_and_print?_t=8r2SyccKy4g&_r=1"><i className="fab fa-tiktok"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
