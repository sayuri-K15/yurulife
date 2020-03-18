import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components"
import { Icon } from "react-icons-kit"
import {plus} from 'react-icons-kit/fa/plus'
import {signIn} from 'react-icons-kit/fa/signIn'


const Header = () => {
  return (
    <HeaderContainer className="header-container">
      <div className="header-top">
        <Logo><Link to="/">YuruLife</Link></Logo>
        <NavLink to="/login" className="login-btn">
          <Icon icon={signIn} className="login-icon"/>
          ログイン
        </NavLink>
        <NavLink to="/signup" className="signIn-btn">
          <Icon icon={ plus } className="signIn-icon"/>
          新規登録
        </NavLink>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background: #f2f2f2;
  position: relative;

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
`

const Logo = styled.h1`
  margin: 35px auto 0;
`
