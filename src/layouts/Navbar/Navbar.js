import React from "react";
import "./Navbar.css";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [show, setShow] = React.useState(false);

  const showSidebar = () => {
    setShow(!show);
  };

  return (
    <div className="navbar">
      <div className="container-wrapper">
        <div
          onClick={showSidebar}
          className={show ? "black_screen show" : "black_screen"}
        ></div>
        <Link>
          <img className="nav_img_1" src={logo} alt="" />
        </Link>
        <div className={show ? "navbar_wrapper open" : "navbar_wrapper"}>
          <Link>
            <img src={logo} alt="" className="navbar_logo" />
          </Link>
          <div className="navbar_links">
            <Link>Home</Link>
            <Link>Yachts</Link>
            <Link>Special Offers</Link>
            <Link>Blogs</Link>
            <Link>About</Link>
          </div>
          <div className="navbar_btns">
            <Link>Sign in</Link>
            <Link>Sign Up</Link>
          </div>
        </div>
        <div onClick={showSidebar} className="navbar_icon">
          <FaBars />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
