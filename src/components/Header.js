import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components"
import { Icon } from "react-icons-kit"
import {plus} from 'react-icons-kit/fa/plus'

import { LogoutBtn, GuestBtn, MypageBtn} from "./login/LoginButton"
import firebase from "firebase/compat/app";


const Header = () => {
  const user = firebase.auth().currentUser
  console.log(user)
  const AcountName = () => {
    if (!user) return null
    if (user != null) {
      const userName = user.email
      return (
        <div className="acount-name">ようこそ {userName} さん</div>
      )
    }
  }
  return (
    <HeaderContainer className="header-container">
      <div className="header-top">
        <Logo><Link to="/"className="logo">YuruLife</Link></Logo>
        {user ? <LogoutBtn/> : <GuestBtn />}
        {user ? <MypageBtn /> :
        <NavLink to="/signup" className="signIn-btn">
          <Icon icon={ plus } className="signIn-icon"/>
          新規登録
        </NavLink>}
      </div>
      <AcountName />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: relative;

  .logo:hover {
      text-decoration: none;
  }

  .header-top {
    display: frex;
    text-align: center;
  }

  .login-btn ,.signIn-btn{
    width: 106px;
    height: 90px;
    line-height: 3.7;
    margin: auto;
    position: absolute;
    display: flex;
    flex-direction: column;
    font-size: 11px;
    border-left: 1px solid #e1e1e1;

    &:hover {
      text-decoration: none;
      color: #707070;
      background: #e2e2e2;
    }
  }

  .login-btn {
    right: 107px;
  }
  .signIn-btn {
    right: 0;
  }

  .acount-name {
    font-size: 13px;
    color: #666;
    padding: 10px 0;
    overflow: hidden;
  }
`

const Logo = styled.h1`
  margin: 35px auto 0;
  font-family: 'Dancing Script', cursive;
  color: #000;

`
