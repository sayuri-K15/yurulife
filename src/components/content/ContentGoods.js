import React, { Component } from "react";
import { Link } from "react-router-dom";
import Skincare from "../../image/skincare.jpg";

import "./ContentFormat.scss";

const ContentGoods = () => {
  return (
    <div className="lead-container hero-container">
      <div className="content-image">
        <Link>
          <img src={Skincare} />
        </Link>
        <p className="content-text">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
      <div className="kerword-tag">
        <ul>
          <li className="tags-list">
            <Link className="tags-link">暮らし</Link>
          </li>
          <li className="tags-list">
            <Link className="tags-link">日用品</Link>
          </li>
          <li className="tags-list">
            <Link className="tags-link">インテリア</Link>
          </li>
          <li className="tags-list">
            <Link className="tags-link">ギフト・プレゼント</Link>
          </li>
          <li className="tags-list">
            <Link className="tags-link">伝統工芸</Link>
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

export default ContentGoods;
