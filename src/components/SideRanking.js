import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Pet } from "../image/pet.jpg";

const SideRanking = () => {
  return (
    <SideRankingContainer className="sideranking-container">
      <h3>人気記事ランキング</h3>
      <ol>
        <li>
          <Link className="side-article">
            <SideThumbnail src={Pet} alt="" />
            タイトル（仮）
          </Link>
        </li>
        <li>
          <Link className="side-article">タイトル（仮）</Link>
        </li>
        <li>
          <Link className="side-article">タイトル（仮）</Link>
        </li>
        <li>
          <Link className="side-article">タイトル（仮）</Link>
        </li>
        <li>
          <Link className="side-article">タイトル（仮）</Link>
        </li>
      </ol>
    </SideRankingContainer>
  );
};

export default SideRanking;

const SideRankingContainer = styled.div`
  background: #f2f2f2;
  text-align: center;

  h3 {
    font-size: 16px;
    padding: 15px;
  }

  ol {
    width: 80%;
    margin: auto;
    text-align: left;
  }

  ol li {
    width: 300px;
    height: 100px;
  }

  .side-article {
    margin-bottom: 10px;
  }
`;

const SideThumbnail = styled.img`
  width: 50px;
  header: 50px;
`;
