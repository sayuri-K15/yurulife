import React from "react";
import { Link } from "react-router-dom";
import Run from "../../image/running.jpg";

import "./ContentFormat.scss";

const ContentSports = () => {
  return (
    <div className="lead-container hero-container">
      <div className="content-image">
        <Link>
          <img src={Run} alt=""/>
        </Link>
        <p className="content-text">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
      <div className="kerword-tag">
        <li className="tags-list">
          <Link className="tags-link">家トレ</Link>
        </li>
        <li className="tags-list">
          <Link className="tags-link">ヨガ</Link>
        </li>
        <li className="tags-list">
          <Link className="tags-link">ストレッチ</Link>
        </li>
        <li className="tags-list">
          <Link className="tags-link">ダイエット</Link>
        </li>
        <li className="tags-list">
          <Link className="tags-link">マインドリセット</Link>
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

export default ContentSports;
