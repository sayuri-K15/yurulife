import React, { Component } from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom"
import aroma from "../image/aroma.jpg"
// import articles from "./articles/Articles.data"
// import Pagination from "./pagination/Pagination"
// import ListComponent  from "./pagination/list"

const Article = () => {
    return (
      <ArticleContainer className="article-container">
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
    )
}

export default Article;

const ArticleContainer = styled.section`
  background: #f2f2f2;
  width: 700px;
  margin-bottom: 50px;
  // display: flex;
  // flex-wrap: wrap;

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
`

const ThumbnailImg = styled.img`
  width: 220px;
  height: 165px;
`
