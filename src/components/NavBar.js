// Navbar.js
import React, { useState, useEffect, useCallback } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleWheel = useCallback((e) => {
    const currentScrollTop = window.pageYOffset;
    if (e.deltaY < 0 && currentScrollTop < lastScrollTop) {
      setIsNavbarHidden(false);
    } else if (e.deltaY > 0 && currentScrollTop - lastScrollTop > 1) {
      setIsNavbarHidden(true);
    }
    setLastScrollTop(currentScrollTop);
    console.log('working...')
  }, [lastScrollTop]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [lastScrollTop, handleWheel]);

  return (
    <nav
      className={`coral-candy fixed top-0 w-full flex justify-center align-center z-10 h-16 bg-opacity-50 bg-pink-200 backdrop-blur-1 transition-all duration-300 ease-in-out navbar ${
        isNavbarHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container py-2 flex justify-between items-center">
        <div className="flex items-center">
            <img className="logo" src="/imgs/cropped-full-color-on-white.png" alt=""/>
          <h1 className="canasita">SidneyScones</h1>
        </div>

        <div className="hidden md:flex space-x-4 absolute right-0 transform justify-end -translate-x-1/2 navlinks-desktop">
          <Link to="/">Home</Link>
          <Link to="/about">Our Brand</Link>
          <Link to="/bakeshop">bake shop</Link>
          <Link to="/newsandevents">news & events</Link>
          <Link to="/contact">contact</Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <ShoppingBasketIcon/>
          <PersonIcon/>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <CloseIcon className="close-icon"/> : <MenuIcon className="menu-icon"/>}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden p-4 mobile-nav">
          <Link to="/">Home</Link>
          <Link to="/about">Our Brand</Link>
          <Link to="/bakeshop">bake shop</Link>
          <Link to="/newsandevents">news & events</Link>
          <Link to="/contact">contact</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;