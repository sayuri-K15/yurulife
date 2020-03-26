import React from "react";
import { NavLink} from "react-router-dom";
import firebase from "firebase";

import { Icon } from "react-icons-kit";
import {login} from 'react-icons-kit/ikons/login'
import {logout} from 'react-icons-kit/ikons/logout'
import {user_circle} from 'react-icons-kit/ikons/user_circle'

export const LogoutBtn = () => {
  return (
    <NavLink 
      to="/" 
      className="login-btn"
      onClick={() => firebase.auth().signOut()}
      >
      <Icon icon={logout} className="login-icon" />
      ログアウト
    </NavLink>
  );
};
export const GuestBtn = () => {
  return (
    <NavLink to="/login" className="login-btn">
      <Icon icon={login} className="login-icon" />
      ログイン
    </NavLink>
  );
};
export const MypageBtn = () => {
  return (
    <NavLink to="/mypage" className="signIn-btn">
      <Icon icon={user_circle} className="signIn-icon" />
      マイページへ
    </NavLink>
  );
};

