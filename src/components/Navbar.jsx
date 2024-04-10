import React, { useState } from 'react';
import { FaGripHorizontal, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
// import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <header className={toggleMenu ? 'open' : ''}>
        <nav>
          <ul>
            <li>
              <NavLink to="/">login-1</NavLink>
            </li>
            <li>
              <NavLink to="/login-two">login-2</NavLink>
            </li>
            <li>
              <NavLink to="/login-three">login-3</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <span onClick={toggleNav} className="menu">
        {!toggleMenu ? (
          <FaGripHorizontal className="toggle__menu" />
        ) : (
          <FaTimes className="toggle__menu" />
        )}
      </span>
    </>
  );
};

export default Navbar;
