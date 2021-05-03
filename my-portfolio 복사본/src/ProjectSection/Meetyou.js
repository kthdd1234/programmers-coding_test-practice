import { ProjectsHeaderBar, ProjectsIntro, GIF } from '../ProjectSection';

const MEET_YOU_EXPLAIN = () => {
  return (
    <div>
      이성간에 서로의 관심사에 맞춰 추천해주는
      <span style={{ color: 'tomato' }}> 소개팅 앱</span>
      입니다.
    </div>
  );
};

const project = {
  name: 'meet-you',
  next_path: '/projects/sf-cinema-web',
  backgroundImg:
    'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/couple.jpg',
  logo:
    'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/meet-youLogo(%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8).png',
  logoBorderRadious: '0px',
  explain: <MEET_YOU_EXPLAIN />,
  term: '2020년 6월 1일 ~ 6월 30일',
  tech: 'Node.js • Express • Sequelize',
  learn_more_path: 'https://github.com/kthdd1234/Meet-You_server/tree/master',
  gif_main:
    'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/meet-you-mainscreen.gif',
  gif_sub:
    'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/meet-you-chat.gif',
  gif_main_title: '메인 화면',
  gif_sub_title: '포인트 사용 및 채팅',
  gif_width: '20rem',
};

const Meetyou = ({ history }) => {
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

export default Meetyou;
