import React from 'react';
import { ProjectsHeaderBar, ProjectsIntro, GIF } from '../ProjectSection';

const SF_APP_EXPLAIN = () => {
  return (
    <div>
      사용자에게 다양한 <span className='pro-sf'>SF</span> 영화를 소개해주는{' '}
      <span style={{ color: 'tomato' }}>모바일 앱</span>
      입니다.
    </div>
  );
};

const project = {
  name: 'SF CINEMA APP',
  next_path: '/projects/your-tube',
  backgroundImg:
    'https://image.tmdb.org/t/p/original/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg',
  logo:
    'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/SFCINEMALogo.png',
  logoBorderRadious: '300px',
  explain: <SF_APP_EXPLAIN />,
  term: '2020년 12월 ~',
  tech: 'React Native • Expo • Node.js',
  learn_more_path: 'https://github.com/kthdd1234/SF-CINEMA-RN',
  gif_main:
    'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/sf-mobile-main.gif',
  gif_sub:
    'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/sf-mobile-detail.gif',
  gif_main_title: '메인 화면',
  gif_sub_title: '영화 정보 및 하단 텝',
  gif_width: '20rem',
};

const SFcinemaApp = ({ history }) => {
  return (
    <div>
      <ProjectsHeaderBar next_path={project.next_path} history={history} />
      <ProjectsIntro
        backgroundImg={project.backgroundImg}
        logo={project.logo}
        logoBorderRadious={project.logoBorderRadious}
        explain={project.explain}
        term={project.term}
        tech={project.tech}
        learn_more_path={project.learn_more_path}
      />
      <GIF
        gif={project.gif_main}
        gif_title={project.gif_main_title}
        gif_width={project.gif_width}
        backgroundColor='main-back-color'
      />
      <GIF
        gif={project.gif_sub}
        gif_title={project.gif_sub_title}
        gif_width={project.gif_width}
        backgroundColor='sub-back-color'
      />
    </div>
  );
};

export default SFcinemaApp;
