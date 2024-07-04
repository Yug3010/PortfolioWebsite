import React from 'react';
import './Hero.css';
import profile from '../../assets/myprofile.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Hero = () => {
  const handleClick = () => {
    window.open("/YugSutariya.pdf", "_blank");
  }

  return (
    <div className="hero" id='home'>
      <img src={profile} alt="Logo" className="hero-logo" />
      <h1>I'm Yug Sutariya, a full-stack developer based in Canada.</h1>
      <p>I am a full-stack developer from Ontario, Canada with 4 months of internship experience.</p>
      <div className="hero-action">
        <button className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </button>
        <button className="hero-resume" onClick={handleClick}>
          My Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
