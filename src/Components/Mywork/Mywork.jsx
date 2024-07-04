import React from 'react';
import './Mywork.css';
import theme from '../../assets/theme_pattern.svg';
import workdata from '../../assets/mywork_data';
import arrow from '../../assets/arrow_icon.svg';

const Mywork = () => {
  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme} alt="Theme pattern" />
      </div>
      <div className="mywork-container">
        {workdata.map((work, index) => {
          return (
            <div className="mywork-card" key={index}>
              <h2>{work.w_name}</h2>
              <div dangerouslySetInnerHTML={{ __html: work.w_description }} />
            </div>
          );
        })}
      </div>
      <a href="https://github.com/Yug3010" className="mywork-showmore" target="_blank" rel="noopener noreferrer">
        <p>Show More</p>
        <img src={arrow} alt="Show more arrow" />
      </a>
    </div>
  );
}

export default Mywork;
