import React from "react";

import Header from "../components/Header";
import ContentGoods from "../components/content/ContentGoods";
import ContentArticlesData from "../components/firebase/ContentArticlesData"
import SideMenu from "../components/SideMenu";
import SideRanking from "../components/SideRanking";
import Footer from "../components/Footer";

const Goods = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <ContentGoods />
        <ContentArticlesData />
        <SideMenu />
        <SideRanking />
      </div>
      <Footer />
    </div>
  );
};

export default Goods;
