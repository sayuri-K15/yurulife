import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";
// import articles from "./articles/Articles.data"
// import Pagination from "./pagination/Pagination"
import ListComponent from "./pagination/list";
import ArticlesPage from "../components/articles/ArticlesPage";
import AddArticleForm from "../components/articles/AddArticleForm";
import FindArticleForm from "../components/articles/FindArticleForm";
import DeleteArticleForm from "../components/articles/DelArticleForm";


import ArticleData from "../components/firebase/ArticleData"


const Article = (props) => {
  return (
        <ArticleContainer className="article-container">
          <ArticleData />
          {/* <ArticlesPage /> */}
          {/* <AddArticleForm />
          <FindArticleForm />
          <DeleteArticleForm /> */}
          {/* <ListComponent articles={articles} /> */}
          {/* <Pagination 
        sum={articles.length}
        per={9}
        initialData={articles.slice(0, 9)}
        component={ListComponent}
      /> */}
          {/* //   <div className="article-content">
      //     <ThumbnailImg src={aroma} alt=""/>
      //     <p className="article_title">{props.title}</p>
      //     <Link className="menu_name">{props.key}</Link>
    //   </div> */}
        </ArticleContainer>
  );
};

export default connect((state) => state)(Article);

const ArticleContainer = styled.section`
  background: #f2f2f2;
  width: 700px;
  margin-bottom: 50px;

  // .article-content {
  //   display: inline-block;
  //   width: 220px;
  //   margin-right: 15px;
  //   margin-bottom: 40px;
  //   background: #eee;
  //   position: relative;

  //   &:nth-child(3n) {
  //     margin-right: 0;
  //   }
  // }

  // .article_title {
  //   width: 100%;
  //   padding: 15px 15px;
  //   font-size: 13px;
  // }

  // .menu_name {
  //   position: absolute;
  //   right: 0;
  //   cursor: pointer;
  //   font-size: 10px;
  // }
`;

const ThumbnailImg = styled.img`
  width: 220px;
  height: 165px;
`;
