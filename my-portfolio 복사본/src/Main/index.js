import Home from './Home';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

const Main = ({ history }) => {
  return (
    <div>
      <Home />
      <About />
      <Education />
      <Projects history={history} />
      <Contact />
    </div>
  );
};

export default Main;
