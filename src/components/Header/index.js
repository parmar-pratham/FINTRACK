import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import userSvg from "../../assets/user.svg";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  function logout() {
    auth.signOut();
    navigate("/");
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <nav className="navbar">
     {user ? (<div className={`hamburger-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
      <span></span>
        <span></span>
        <span></span>
      </div>
      ) : (
        <></>
      )}
      
      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        {/* Add your menu items here */}
        <a href="/">Home</a>
        <a href="/">Dashboard</a>
        <a href="/">Profile</a>
      </div>
      

      <p className="navbar-heading">FINTRACK</p>
      {user ? (
        <p className="navbar-link" onClick={logout}>
          <span style={{ marginRight: "1rem" }}>
            <img
              src={user.photoURL ? user.photoURL : userSvg}
              width={user.photoURL ? "32" : "24"}
              style={{ borderRadius: "50%" }}
            />
          </span>
          Logout
        </p>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default Header;
