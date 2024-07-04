import React from 'react';
import './About.css';
import theme from '../../assets/theme_pattern.svg';
import profile from '../../assets/myprofile.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>My name is Yug Sutariya, and I am a Full Stack Developer with a strong background in developing robust web applications and a passion for leveraging cutting-edge technologies. I am currently in my last semester of a Post-Graduate Certificate program in Full Stack Development at Humber College, where I have acquired comprehensive skills in both front-end and back-end technologies, including ReactJS, NextJS, TypeScript, NodeJS, ExpressJS, MongoDB, and more.</p>
            <p>One of my recent projects involved successfully leading a team in the development of a Cryptoscreener app, which demonstrated my project management skills and ability to deliver high-quality software solutions in a collaborative environment. Additionally, I am engaged in a capstone project developing a loan brokerage application sponsored by Leon Johnson. This project involves utilizing technologies such as NuxtJS, Prisma, VueJS, and SQL Server, and provides valuable experience in designing and implementing scalable solutions that meet specific industry needs.</p>
            <p>In my role as a Fullstack Developer Intern at The Sparks Foundation, I collaborated with a dynamic team to build scalable web applications. I designed and implemented responsive front-end interfaces using HTML, CSS, and JavaScript frameworks like ReactJS and NextJS. My experience includes integrating Bootstrap and Tailwind CSS to enhance UI/UX and ensure seamless data transmission across the stack.</p>
            <p>I am particularly passionate about contributing to innovative projects and leveraging my technical expertise, creativity, and collaborative spirit to deliver impactful solutions. I am excited to bring my skills and experiences to new challenges and opportunities.</p>
          </div>
        </div>
      </div>
      <div className="about-skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill">
            <p>HTML & CSS</p>
            <hr className="progress-bar html-css" />
          </div>
          <div className="skill">
            <p>JAVASCRIPT</p>
            <hr className="progress-bar javascript" />
          </div>
          <div className="skill">
            <p>REACTJS</p>
            <hr className="progress-bar reactjs" />
          </div>
          <div className="skill">
            <p>MONGODB</p>
            <hr className="progress-bar mongodb" />
          </div>
          <div className="skill">
            <p>NODEJS</p>
            <hr className="progress-bar nodejs" />
          </div>
          <div className="skill">
            <p>NEXTJS</p>
            <hr className="progress-bar nextjs" />
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
