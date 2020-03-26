import React from "react";
import { NavLink} from "react-router-dom";

import { Icon } from "react-icons-kit";
import {login} from 'react-icons-kit/ikons/login'
import {logout} from 'react-icons-kit/ikons/logout'

export const UserBtn = () => {
  return (
    <NavLink to="/" className="login-btn">
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
    <NavLink to="/mypage" className="login-btn">
      <Icon icon={login} className="login-icon" />
      マイページへ
    </NavLink>
  );
};

