import React, { Component } from "react";
import { Link } from "react-router-dom";
import Coffee from "../../image/coffee.jpg";

import "./ContentFormat.scss";

const ContentLifeStyle = () => {
  return (
    <div className="lead-container hero-container">
      <Link>
        <img src={Coffee} className="content-image" />
      </Link>
      <p className="content-text">
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </p>
      <div className="kerword-tag">
        <Link>#暮らし</Link>
        <Link>#片付け</Link>
        <Link>#インテリア</Link>
        <Link>#模様替え</Link>
        <Link>#部屋での過ごし方</Link>
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
