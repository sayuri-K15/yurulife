import React, { Component } from "react";
import "./scss/index.scss";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Auth from "./components/Auth";
import User from "./pages/User";
import MyPage from "./pages/MyPage"

import Main from "./pages/index";
import LifeStyle from "./pages/LifeStyle";
import Food from "./pages/Food";
import Trip from "./pages/Trip";
import Sports from "./pages/Sports";
import Goods from "./pages/Goods";

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/lifestyle" component={LifeStyle} />
        <Route exact path="/trip" component={Trip} />
        <Route exact path="/Food" component={Food} />
        <Route exact path="/sports" component={Sports} />
        <Route exact path="/goods" component={Goods} />
        <Auth>
          <Switch>
            <Route exact path="/mypage" component={MyPage} />
            <Redirect from="/" to="mypage" />
          </Switch>
        </Auth>
      </Switch>
  );
}

export default App;
