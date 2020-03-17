import React, { Component } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Article  from "../components/Articles";
import PaginationBtn from "../components/pagination/Pagination"
import SideMenu  from "../components/SideMenu";
import SideRanking  from "../components/SideRanking";
import Footer  from "../components/Footer";

const Main = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Hero />
        <Article />
        <SideMenu />
        <SideRanking />
        <PaginationBtn />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
