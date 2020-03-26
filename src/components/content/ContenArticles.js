import React, { Component } from 'react'
import styled from "styled-components"

export default class ContentArticles extends Component {
  render() {
    return (
      <ContentArticlesContainer>
        <div className="article-content">
          <img src="https://picsum.photos/150/150" />
          <div className="article-text">
            <h3><a>{this.props.title}</a></h3>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
      </ContentArticlesContainer>
    )
  }
}

const ContentArticlesContainer = styled.div`
  .article-content {
    display: grid;
  }
  img {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    margin-right: 20px;
  }
  .article-text {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    width: 500px;
    margin-right: 30px;
  }

  h3 {
    font-size: 17px;
  }
  h3:hover {
    text-decoration: underline;
    color: #f2f2f2;
    cursor: pointer;
  }
  
  p {
    font-size: 11px;
  }
`
