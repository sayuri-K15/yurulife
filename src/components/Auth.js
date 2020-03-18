import React from 'react';
import { Redirect } from 'react-router-dom';
import User from '../pages/User';

const Auth = props =>
  User.isLoggedIn() ? props.children : <Redirect to={'/'} />;

export default Auth;