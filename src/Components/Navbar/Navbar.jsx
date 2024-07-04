import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../Logo';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menuOpen from '../../assets/menu_open.svg';
import menuClose from '../../assets/menu_close.svg';

const Navbar = () => {
  const [selected, setSelected] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (section) => {
    setSelected(section);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const handleButtonClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Logo />
      <img 
        src={isMenuOpen ? menuClose : menuOpen} 
        alt="menu toggle" 
        className="menu-icon" 
        onClick={toggleMenu} 
      />
      <ul className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
            <p onClick={() => handleLinkClick("home")}>Home</p>
          </AnchorLink>
          {selected === 'home' && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => handleLinkClick("about")}>About Me</p>
          </AnchorLink>
          {selected === 'about' && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#service'>
            <p onClick={() => handleLinkClick("service")}>Services</p>
          </AnchorLink>
          {selected === 'service' && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#mywork'>
            <p onClick={() => handleLinkClick("portfolio")}>Portfolio</p>
          </AnchorLink>
          {selected === 'portfolio' && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => handleLinkClick("contact")}>Contact</p>
          </AnchorLink>
          {selected === 'contact' && <img src={underline} alt="underline" />}
        </li>
      </ul>
      <button className="nav-button" onClick={handleButtonClick}>
        Connect with me
      </button>
    </div>
  );
};

export default Navbar;
