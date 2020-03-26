import React, { Component } from "react";

import Header from "../components/Header";
import ContentTrip from "../components/content/ContentTrip";
import ContentArticlesData from "../components/firebase/ContentArticlesData"
import SideMenu from "../components/SideMenu";
import SideRanking from "../components/SideRanking";
import Footer from "../components/Footer";

const Trip = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <ContentTrip />
        <ContentArticlesData />
        <SideMenu />
        <SideRanking />
      </div>
      <Footer />
    </div>
  );
};

export default Trip;
