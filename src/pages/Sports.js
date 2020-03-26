import React, { Component } from "react";

import Header from "../components/Header";
import ContentSports from "../components/content/ContentSports";
import ContentArticlesData from "../components/firebase/ContentArticlesData"
import SideMenu from "../components/SideMenu";
import SideRanking from "../components/SideRanking";
import Footer from "../components/Footer";

const Sports = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <ContentSports />
        <ContentArticlesData />
        <SideMenu />
        <SideRanking />
      </div>
      <Footer />
    </div>
  );
};

export default Sports;
