import { ProjectsHeaderBar, ProjectsIntro, GIF } from '../ProjectSection';

const YOUR_TUBE_EXPLAIN = () => {
  return (
    <div>
      <span style={{ fontFamily: 'Roboto' }}>YouTube</span> 의 좋아요 동영상들을
      관리해주는
      <span style={{ color: 'tomato' }}> 웹사이트</span>
      입니다.
    </div>
  );
};

const project = {
  name: 'yourtube',
  next_path: '/projects/meet-you',
  backgroundImg:
    'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/youtube-img.jpg',
  logo:
    'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/yourtube-small.png',
  logoBorderRadious: '0px',
  explain: <YOUR_TUBE_EXPLAIN />,
  term: '2020년 5월 18일 ~ 5월 29일',
  tech: 'HTML • CSS • JS • React',
  learn_more_path: 'https://github.com/your-tube/client',
  gif_main:
    'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/yourtube-login.gif',
  gif_sub:
    'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/yourtube-search.gif',
  gif_main_title: '로그인 화면',
  gif_sub_title: '검색 기능',
  gif_width: '45vw',
};

const Yourtube = ({ history }) => {
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

export default Yourtube;
