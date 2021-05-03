import React, { useEffect } from 'react';
import { Button } from 'antd';
import './index.css';
import '../Main/Home.css';

export const ProjectsHeaderBar = ({ history, next_path }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [next_path]);

  useEffect(() => {
    let navbar = window.document.querySelector('.project-detail-header');
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset;
      if (scrollTop === 0) {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.color = 'whitesmoke';
      } else {
        navbar.style.backgroundColor = '#202a45';
      }
    });
  }, []);

  return (
    <div className='header-bar-container project-detail-header'>
      <div className='header-flex-box'>
        <div className='header-home' onClick={() => history.push('/')}>
          HOME
        </div>
        <div
          className='header-next-project'
          onClick={() => history.push(next_path)}
        >
          다음 프로젝트 →
        </div>
      </div>
    </div>
  );
};

export const ProjectsIntro = ({
  name,
  backgroundImg,
  logo,
  logoBorderRadious,
  explain,
  term,
  tech,
  learn_more_path,
}) => {
  return (
    <div className='projects-screen-intro'>
      <img className='background-Img' src={backgroundImg} alt='img' />
      <div className='screen-intro'>
        <img
          className={name === 'yourtube' ? 'yourtube-logo' : 'projects-logo'}
          src={logo}
          style={{ borderRadius: logoBorderRadious }}
        />

        <div className='projects-explain'>{explain}</div>
        <div className='projects-detail'>
          <div className='term-wrap'>
            <div className='term-title'>기간</div>
            <div className='term'>{term}</div>
          </div>
          <div className='tech-wrap'>
            <div className='tech-title'>사용 스택</div>
            <div className='tech'>{tech}</div>
          </div>

          <div className='learn-more'>
            <Button
              className='learn-more-btn'
              type='primary'
              onClick={() => window.open(learn_more_path, '_blank')}
              danger
            >
              더 알아보기 →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const GIF = ({ gif, gif_title, gif_width, backgroundColor }) => {
  return (
    <div className={`gif-container ${backgroundColor}`}>
      <div className='gif-wrap'>
        <div>
          <span className='gif-title'>{gif_title}</span>
        </div>
        <div className='gif-box'>
          <img
            src={gif}
            className='gif'
            alt='img'
            style={{ width: gif_width }}
          />
        </div>
      </div>
    </div>
  );
};
