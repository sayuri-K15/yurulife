import React from "react";
import { Link } from "react-router-dom";
import Sea from "../../image/see.jpg";

import "./ContentFormat.scss";

const ContentTrip = () => {
  return (
    <div className="lead-container hero-container">
      <div className="content-image">
        <Link>
          <img src={Sea} alt=""/>
        </Link>
        <p className="content-text">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
      <div className="kerword-tag">
        <li className="tags-list">
          <Link className="tags-link">旅行</Link>
        </li>
        <li className="tags-list">
          <Link className="tags-link">温泉</Link>
        </li>
        <li className="tags-list">
          <Link className="tags-link">イベント</Link>
        </li>
        <li className="tags-list">
          <Link className="tags-link">自然</Link>
        </li>
        <li className="tags-list">
          <Link className="tags-link">癒しスポット</Link>
        </li>
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

export default ContentTrip;
