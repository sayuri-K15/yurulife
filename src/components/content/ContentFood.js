import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tomato from "../../image/tomato.jpg";

import "./ContentFormat.scss";

const ContentFood = () => {
  return (
    <div className="lead-container hero-container">
      <div className="content-image">
        <Link>
          <img src={Tomato} />
        </Link>
        <p className="content-text">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
      <div className="kerword-tag">
        <ul>
          <li className="tags-list">
            <Link className="tags-link">朝食</Link>
          </li>
          <li className="tags-list">
            <Link className="tags-link">お菓子・スイーツ</Link>
          </li>
          <li className="tags-list">
            <Link className="tags-link">お弁当</Link>
          </li>
          <li className="tags-list">
            <Link className="tags-link">オーガニック</Link>
          </li>
          <li className="tags-list">
            <Link className="tags-link">世界の料理</Link>
          </li>
        </ul>
      </div>
      <div className="pickup-content">
        <aside className="pickup-topic">
          <Link>特集入れるよ</Link>
        </aside>
        <aside>
          <Link>特集バナー入れるよ</Link>
        </aside>
      </div>
    </div>
  );
};

export default ContentFood;
