import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { Sea } from "../../image/see.jpg"

const ContentTrip = () => {
    return (
      <div>
        <Link><img src={Sea} className="content-image"/></Link>
        <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <div className="kerword-tag">
          <Link>#旅行</Link>
          <Link>#温泉</Link>
          <Link>#イベント</Link>
          <Link>#自然</Link>
          <Link>#癒しスポット</Link>
        </div>
        <aside><Link></Link></aside>
        <aside><Link></Link></aside>
      </div>
    )
}

export default ContentTrip;