import { useEffect } from 'react';
import './Education.css';

const DecorBottom = () => {
  return (
    <img
      className='decor-bottom'
      src='https://assets.website-files.com/5e56267ff063d5bd8357b5ee/5e562680e45560e05b9e13b5_decor-v1-haze.svg'
    />
  );
};

const CodeStateLogo = () => {
  return (
    <div className='codeStateLogo-container'>
      <img
        src='https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com/codestates.png'
        className='codeStateLogo'
        alt='img'
      />
    </div>
  );
};

const EducationIntro = () => {
  useEffect(() => {
    const educationIntroContainer = window.document.querySelector(
      '.education-intro-container'
    );

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            educationIntroContainer.style.opacity = 1;
            educationIntroContainer.style.transition = 'all 1s';
            educationIntroContainer.style.transform = 'translateX(-50px)';

            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.5 }
      );
    });
    observer.observe(educationIntroContainer);
  });

  return (
    <div className='education-intro-container'>
      <div className='education-sub-wrapper'>
        <span className='education-sub'>EDUCATION</span>
      </div>
      <div className='education-contents'>
        <div>
          코드스테이츠의 <span className='edu-course'>Immersive Course</span> 를
          수료한 경험을 가지고 있습니다.
        </div>
        <div>
          <span className='edu-stacks'>HTML, CSS, JavaScript, React</span> 와
          같은 개발 언어를 습득하였습니다.
        </div>
        <div>
          그리고 동기들과 함께 4주간의 팀 협업 프로젝트을 진행하였습니다.
        </div>
        <div>
          팀 프로젝트를 통해
          <span className='edu-skills'>
            {' '}
            협업능력 커뮤니케이션 문제해결능력{' '}
          </span>
          을 길렀습니다.
        </div>
        <div
          className='edu-link'
          onClick={() =>
            window.open(
              'https://www.codestates.com/course/software-engineering',
              '_blank'
            )
          }
        >
          {' '}
          https://www.codestates.com/course/software-engineering
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div id='education' className='education-container'>
      <div className='education-wrap'>
        <CodeStateLogo />
        <EducationIntro />
      </div>
      <DecorBottom />
    </div>
  );
};

export default Education;
