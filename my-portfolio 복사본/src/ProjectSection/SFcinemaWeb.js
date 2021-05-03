import React from 'react';
import { ProjectsHeaderBar, ProjectsIntro, GIF } from '../ProjectSection';

const SF_WEB_EXPLAIN = () => {
  return (
    <div>
      사용자에게 다양한 <span className='pro-sf'>SF</span> 영화를 소개해주는{' '}
      <span style={{ color: 'tomato' }}>웹사이트</span>
      입니다.
    </div>
  );
};

const project = {
  name: 'SF CINEMA WEB',
  next_path: '/projects/sf-cinema-app',
  backgroundImg:
    'https://image.tmdb.org/t/p/original/pZvZjxPFfWWIwtPQodsNygQ6u5Z.jpg',
  logo:
    'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/SFCINEMALogo.png',
  logoBorderRadious: '300px',
  explain: <SF_WEB_EXPLAIN />,
  term: '2020년 7월 ~',
  tech: 'React • Node.js • AWS',
  learn_more_path: 'https://github.com/kthdd1234/SF-CINEMA',
  gif_main:
    'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/sf-web-main.gif',
  gif_sub:
    'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/sf-web-detail.gif',
  gif_main_title: '메인 화면',
  gif_sub_title: '영화 정보 및 예고편',
  gif_width: '67.5vw',
};

const SFcinemaWeb = ({ history }) => {
  return (
    <div>
      <ProjectsHeaderBar next_path={project.next_path} history={history} />
      <ProjectsIntro
        name={project.name}
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

export default SFcinemaWeb;
