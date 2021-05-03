import { Switch, Route } from 'react-router-dom';
import Home from './Main';
import SFcinemaWeb from './ProjectSection/SFcinemaWeb';
import SFcinemaApp from './ProjectSection/SFcinemaApp';
import Meetyou from './ProjectSection/Meetyou';
import Yourtube from './ProjectSection/Yourtube';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/projects/sf-cinema-web' component={SFcinemaWeb} />
      <Route exact path='/projects/sf-cinema-app' component={SFcinemaApp} />
      <Route exact path='/projects/meet-you' component={Meetyou} />
      <Route exact path='/projects/your-tube' component={Yourtube} />
    </Switch>
  );
};

export default App;
