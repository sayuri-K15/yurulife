import React from "react";
import { Provider, connect } from "react-redux";
import store from "../store/Article/reducer"
import Header from "../components/Header";
import Hero from "../components/Hero";
import Article from "../components/Articles";
// import PaginationBtn from "../components/pagination/Pagination"
import SideMenu from "../components/SideMenu";
import SideRanking from "../components/SideRanking";
import Footer from "../components/Footer";


const Main = props => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Hero />
        <Provider store={store}>
          <Article />
        </Provider>
        <SideMenu />
        <SideRanking />
        {/* <PaginationBtn /> */}
      </div>
      <Footer />
    </div>
  );
};

export default connect((state) => state)(Main);
