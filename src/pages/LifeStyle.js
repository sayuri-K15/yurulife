import React, { Component, useEffect } from "react";
import firebase from "firebase";
import Header from "../components/Header";
import ContentLife from "../components/content/ContentLife";
import ContentArticlesData from "../components/firebase/ContentArticlesData"
import SideMenu from "../components/SideMenu";
import SideRanking from "../components/SideRanking";
import Footer from "../components/Footer";

const LifeStyle = (props) => {
  useEffect(() => {
    window.scrollTo(0,0)
  })

  return (
    <div>
      <div className="wrapper">
        <Header />
        <ContentLife />
        <ContentArticlesData />
        <SideMenu />
        <SideRanking />
      </div>
      <Footer />
    </div>
  );
};

export default LifeStyle;
