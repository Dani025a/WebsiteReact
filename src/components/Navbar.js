import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const isLoggedIn = window.localStorage.getItem("loggedIn");

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";

  };

  return (
    <>
 <nav className='navbar'>
        <div className='navbar-container'>
        <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/menu'
                className='nav-links'
                onClick={closeMobileMenu}>
                Menu
              </Link>
            </li>
            <li>
            {isLoggedIn ? <Link to='/login'className='nav-links-mobile'onClick={logOut}>LOG OUT</Link>: <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>LOG IN</Link>}
            </li>
          </ul>{button && <div> {isLoggedIn ? <Button buttonStyle='btn--outline' onClick={logOut}>LOG OUT</Button> : <Button buttonStyle='btn--outline'>LOG IN</Button>}</div> }
        </div>
      </nav>
    </>
  );
}

export default Navbar;