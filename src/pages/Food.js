import React, { Component } from "react";

import Header from "../components/Header";
import ContentFood from "../components/content/ContentFood";
import SideMenu from "../components/SideMenu";
import SideRanking from "../components/SideRanking";
import Footer from "../components/Footer";

const Food = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <ContentFood />
        <SideMenu />
        <SideRanking />
      </div>
      <Footer />
    </div>
  );
};

export default Food;
