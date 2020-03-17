import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {Tomato} from "../../image/tomato.jpg"

const ContentFood = () => {
    return (
      <div>
        <Link><img src={Tomato} className="content-image"/></Link>
        <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <div className="kerword-tag">
          <Link>#朝食</Link>
          <Link>#お菓子・スイーツ</Link>
          <Link>#お弁当</Link>
          <Link>#オーガニック</Link>
          <Link>#世界の料理</Link>
        </div>
        <aside><Link></Link></aside>
        <aside><Link></Link></aside>
      </div>
    )
}

export default ContentFood;