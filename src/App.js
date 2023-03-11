import React, { Component } from "react";
import "./scss/index.scss";
import { BrowserRouter, Route,  } from "react-router-dom";
import firebase from "firebase/compat/app";
import 'firebase/compat/storage'
import 'firebase/compat/analytics'
import 'firebase/compat/auth'

import Login from "./components/login/Login";
import SignUp from "./pages/SignUp";
// import Auth, {AuthContext} from "./components/Auth";
import MyPage from "./pages/MyPage";

import Main from "./pages/index";
import LifeStyle from "./pages/LifeStyle";
import Food from "./pages/Food";
import Trip from "./pages/Trip";
import Sports from "./pages/Sports";
import Goods from "./pages/Goods";

export const firebaseConfig = {
  apiKey: "AIzaSyBFt7MmjrhRpKo2T5yLqgPH1ZTeAQ-qy_E",
  authDomain: "yurulife-db.firebaseapp.com",
  databaseURL: "https://yurulife-db.firebaseio.com",
  projectId: "yurulife-db",
  storageBucket: "yurulife-db.appspot.com",
  messagingSenderId: "42764380340",
  appId: "1:42764380340:web:7b1baac028e7ce41ae8fe1",
  measurementId: "G-3LNS36TL5T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      authenticated: false,
      user: null
    };
  }


  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }


  render() {
    const { loading } = this.state;
    if (loading) return <p>loading...</p>;
    return (
        <BrowserRouter>
          <Route exact path="/" component={Main} />
          {this.state.currentUser ?
          <Route exact path="/mypage" component={MyPage} /> :
          <Route exact path="/" component={Main} />}


          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route exact path="/mypage" component={MyPage} /> */}

          <Route exact path="/lifestyle" component={LifeStyle} />
          <Route exact path="/trip" component={Trip} />
          <Route exact path="/Food" component={Food} />
          <Route exact path="/sports" component={Sports} />
          <Route exact path="/goods" component={Goods} />
        </BrowserRouter>
    );
  }
}
export default App;
