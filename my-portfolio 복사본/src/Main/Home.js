import React, { useEffect } from 'react';
import './Home.css';

const headerList = [
  { title: 'HOME', focus: 'home' },
  { title: 'ABOUT', focus: 'about' },
  { title: 'EDUCATION', focus: 'education' },
  { title: 'PROJECTS', focus: 'projects' },
  { title: 'CONTACT', focus: 'contact' },
];

const Video = () => {
  return (
    <video className='video-mp4' muted autoPlay loop>
      <source
        src='https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/Sea.mp4'
        type='video/mp4'
      />
    </video>
  );
};

const HeaderBar = () => {
  return (
    <div className='header-bar-container'>
      <ul className='header-bar-wrap'>
        {headerList.map((section, key) => (
          <li
            key={key}
            className='header-bar-section'
            onClick={() => (window.location.hash = `#${section.focus}`)}
          >
            {section.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Intro = () => {
  return (
    <div className='intro-container'>
      <div className='intro-wrap'>
        <div className='intro-title'>프론트엔드 개발자 김동현입니다.</div>
        <div className='intro-sub-title'>
          어제 보다는 오늘, 오늘 보다는 내일의{' '}
          <span className='middle-sub'>
            미래를 향해 달려가는 개발자 김동현입니다.
          </span>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    let lastScrollTop = 0;
    let navbar = window.document.querySelector('.header-bar-container');
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset;
      if (scrollTop === 0) {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.color = 'whitesmoke';
      } else {
        navbar.style.backgroundColor = 'whitesmoke';
        navbar.style.color = 'black';
      }
      lastScrollTop = scrollTop;
    });
  }, []);

  return (
    <div id='home' className='home-container'>
      <div className='video-container'>
        <HeaderBar />
        <Video />
        <Intro />
      </div>
    </div>
  );
};

export default Home;
