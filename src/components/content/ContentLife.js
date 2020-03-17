import React, { Component } from "react";
import { Link } from "react-router-dom";
import Coffee from "../../image/coffee.jpg";

import "./ContentFormat.scss";

const ContentLifeStyle = () => {
  return (
    <div className="lead-container hero-container">
      <div className="content-image">
        <Link>
          <img src={Coffee}  />
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
            <Link className="tags-link">片付け</Link>
          </li>
          <li className="tags-list">
            <Link className="tags-link">インテリア</Link>
          </li>
          <li className="tags-list">
            <Link className="tags-link">模様替え</Link>
          </li>
          <li className="tags-list">
            <Link className="tags-link">部屋での過ごし方</Link>
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

export default ContentLifeStyle;
