import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { Run } from "../../image/running.jpg"

const ContentSports = () => {
    return (
      <div>
        <Link><img src={Run} className="content-image"/></Link>
        <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <div className="kerword-tag">
          <Link>#家トレ</Link>
          <Link>#ヨガ</Link>
          <Link>#ストレッチ</Link>
          <Link>#ダイエット</Link>
          <Link>#マインドリセット</Link>
        </div>
        <aside><Link></Link></aside>
        <aside><Link></Link></aside>
      </div>
    )
}

export default ContentSports;