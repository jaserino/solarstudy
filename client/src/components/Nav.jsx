import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import navStyles from '../../styles/Nav.module.css';
import logo from '../../public/logo2.png';
import { FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    toast('Logged out successfully');
    // navigate to the home screen for now until profile screen is created
    navigate('/');
  };

  return (
    <nav className={navStyles.nav}>
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
      {user ? (
        <button onClick={onLogout} className={navStyles.btnnav}>
          {' '}
          <FaSignOutAlt />
          Logout
        </button>
      ) : (
        <button style={{ display: 'none' }}></button>
      )}
    </nav>
  );
};

export default Nav;
