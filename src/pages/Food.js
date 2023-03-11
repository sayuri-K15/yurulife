import React from "react";

import Header from "../components/Header";
import ContentFood from "../components/content/ContentFood";
import ContentArticlesData from "../components/firebase/ContentArticlesData"
import SideMenu from "../components/SideMenu";
import SideRanking from "../components/SideRanking";
import Footer from "../components/Footer";

const Food = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <ContentFood />
        <ContentArticlesData />
        <SideMenu />
        <SideRanking />
      </div>
      <Footer />
    </div>
  );
};

export default Food;
