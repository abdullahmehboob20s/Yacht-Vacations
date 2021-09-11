import React from "react";
import { Link } from "react-router-dom";
import logo_2 from "assets/images/logo-2.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import CurrencyDropdown from "components/Dropdowns/CurrencyDropdown/CurrencyDropdown";
import apple_icon from "assets/images/apple.png";
import playstore from "assets/images/playstore.png";

function Footer() {
  return (
    <div className="footer_wrapper">
      <div className="footer">
        <div className="footer_box">
          <img className="footer_web_logo" src={logo_2} alt="" />
          <p className="footer_web_logo_title">
            Booking services for International people.
          </p>
          <p className="footer_web_logo_subtitle">
            We offer yacht booking services in only greek islands while we are
            planing to expand our services to internalional in future.
          </p>
        </div>
        <div className="footer_box">
          <p className="footer_title">Greek Islands</p>
          <div className="footer_links_wrapper">
            <ul>
              <li>
                <Link>Crete</Link>
              </li>
              <li>
                <Link>Euboea</Link>
              </li>
              <li>
                <Link>Lesbos</Link>
              </li>
              <li>
                <Link>Rhodes</Link>
              </li>
              <li>
                <Link>Chíos</Link>
              </li>
              <li>
                <Link>Kefalonia</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link>Corfu</Link>
              </li>
              <li>
                <Link>Lemnos</Link>
              </li>
              <li>
                <Link>Samos</Link>
              </li>
              <li>
                <Link>Naxos</Link>
              </li>
              <li>
                <Link>Zakynthos</Link>
              </li>
              <li>
                <Link>Thassos</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link>Andros</Link>
              </li>
              <li>
                <Link>Lemnos</Link>
              </li>
              <li>
                <Link>Samos</Link>
              </li>
              <li>
                <Link>Naxos</Link>
              </li>
              <li>
                <Link>Zakynthos</Link>
              </li>
              <li>
                <Link>Thassos</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link>Andros</Link>
              </li>
              <li>
                <Link>Lemnos</Link>
              </li>
              <li>
                <Link>Samos</Link>
              </li>
              <li>
                <Link>Naxos</Link>
              </li>
              <li>
                <Link>Zakynthos</Link>
              </li>
              <li>
                <Link>Thassos</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link>Andros</Link>
              </li>
              <li>
                <Link>Lemnos</Link>
              </li>
              <li>
                <Link>Samos</Link>
              </li>
              <li>
                <Link>Naxos</Link>
              </li>
              <li>
                <Link>Zakynthos</Link>
              </li>
              <li>
                <Link>Thassos</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main_pages_support">
          <div className="footer_box">
            <p className="footer_title">Main Pages</p>
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Listing</Link>
              </li>
              <li>
                <Link>Special Offers</Link>
              </li>
              <li>
                <Link>Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="footer_box">
            <p className="footer_title">Support</p>
            <ul>
              <li>
                <Link>Contact us</Link>
              </li>
              <li>
                <Link>Terms & Services </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_box">
          <p className="footer_title">Follow Us</p>
          <div className="footer_social_links">
            <div className="footer_social_link">
              <FaFacebookF />
            </div>
            <div className="footer_social_link">
              <FaTwitter />
            </div>
            <div className="footer_social_link">
              <FaInstagram />
            </div>
          </div>
          <div>
            <p className="footer_title">Currency</p>
            <CurrencyDropdown />
          </div>
          <div className="get_app_btns">
            <Link className="get_app_btn">
              <img src={apple_icon} alt="" /> <p>App Store</p>{" "}
            </Link>
            <Link className="get_app_btn">
              <img src={playstore} alt="" /> <p>Google Play</p>{" "}
            </Link>
          </div>
          <p className="footer_web_rights">@CYAN2021 - All Right Reserved </p>
        </div>
      </div>

      {/* <p className="footer_web_rights">All Right Reserved - CYAN@2021</p> */}
    </div>
  );
}

export default Footer;
