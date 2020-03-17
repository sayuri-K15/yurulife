import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {Skincare} from "../../image/skincare.jpg"

const ContentGoods = () => {
    return (
      <div>
        <Link><img src={Skincare} className="content-image"/></Link>
        <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <div className="kerword-tag">
          <Link>#暮らし</Link>
          <Link>#日用品</Link>
          <Link>#インテリア</Link>
          <Link>#ギフト・プレゼント</Link>
          <Link>#伝統工芸</Link>
        </div>
        <aside><Link></Link></aside>
        <aside><Link></Link></aside>
      </div>
    )
}

export default ContentGoods;