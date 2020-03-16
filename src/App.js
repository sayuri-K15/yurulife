import React from 'react';
import './scss/index.scss';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/index'
import LifeStyle from './pages/LifeStyle'
import Food from './pages/Food'
import Trip from './pages/Trip'
import Sports from './pages/Sports'
import Goods from './pages/Goods'



function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Main }/>
      <Route path="/lifestyle" component={ LifeStyle }/>
      <Route path="/trip" component={ Trip }/>
      <Route path="/Food" component={ Food }/>
      <Route path="/sports" component={ Sports }/>
      <Route path="/goods" component={ Goods }/>
    </Switch>
  );
}

export default App;
