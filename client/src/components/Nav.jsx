import React from 'react';
import { Link } from 'react-router-dom';
import navStyles from '../../styles/Nav.module.css';
import logo from '../../public/logo2.png';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div>
        <Link to="/">
          <div>
            <img
              className={navStyles.logo}
              src={logo}
              alt="solar logo"
              width="120px"
              height="110px"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
