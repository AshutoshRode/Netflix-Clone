import React, { useEffect, useState } from 'react';
import "../css/Nav.css";
import Logo from "../Images/Logo.png";
import firebase from '../firebase.js';

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        {/* ✅ Added alt attribute for accessibility */}
        <img src={Logo} alt="Netflix logo" className="logo" />
        
        {/* ✅ Added alt and kept onClick sign-out handler */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User avatar"
          onClick={() => firebase.auth().signOut()}
          className="nav_avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
