import React, { Component } from "react";

import Header from "../components/Header";
import ContentLife from "../components/content/ContentLife";
import Article from "../components/Articles"
import SideMenu from "../components/SideMenu";
import SideRanking from "../components/SideRanking";
import Footer from "../components/Footer";

const LifeStyle = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <ContentLife />
        <Article />
        <SideMenu />
        <SideRanking />
      </div>
      <Footer />
    </div>
  );
};

export default LifeStyle;
