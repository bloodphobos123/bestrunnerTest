import React from 'react';

import './style.scss';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import Run from './components/Run';
import Cycling from './components/Cycling';
import Walking from './components/Walking';
import Skiing from './components/Skiing';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/home" component={Home} />
        <Route path="/run" component={Run} />
        <Route path="/cycling" component={Cycling} />
        <Route path="/walking" component={Walking} />
        <Route path="/skiing" component={Skiing} />
      </Switch>
    </div>
  );
}

export default App;
