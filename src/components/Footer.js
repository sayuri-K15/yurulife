import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit"
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'
import {twitterSquare} from 'react-icons-kit/fa/twitterSquare'
import {pinterestSquare} from 'react-icons-kit/fa/pinterestSquare'

const Footer = () => {
  return (
    <FooterContainer className="footer-container">
      <div className="footer-prev">フッター広告作るよ</div>
      <div className="footer-content">
        <div className="footer-left_tab">
          <ul>
            <li>
              <Link>YuruLife</Link>
            </li>
            <li>
              <Link>よくある質問</Link>
            </li>
            <li>
              <Link>お問い合わせ</Link>
            </li>
          </ul>
        </div>
        <div className="footer-right_tab">
          <h3><Link to="/">YuruLife</Link></h3>
          <p>yurulifeは「自然と共にのんびりと暮らす」をテーマにしたライフスタイルメディアです。</p>
          <span><Icon icon={facebookSquare} size="35"/></span>
          <span><Icon icon={twitterSquare} size="35"/></span>
          <span><Icon icon={pinterestSquare} size="35"/></span>
        </div>
      </div>
      <div className="footer-alpha">
        <ul>
          <li><Link>広告掲載について</Link></li>
          <li><Link>企業情報&nbsp;&nbsp;</Link></li>
          <li><Link>利用規約&nbsp;&nbsp;</Link></li>
          <li><Link>個人情報保護方針&nbsp;&nbsp;</Link></li>
        </ul>
        <small>@yurulife.com.Inc All Right Reserved.</small>
      </div>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.footer`
  font-size: 12px;

  .footer-prev {
    width: 1020px;
    height: 350px;
    margin: auto;
    border: 1px solid #333;
  }

  .footer-content {
    display: flex;
    width: 1020px;
    margin: 0 auto 20px;
    padding-top: 50px;
  }

  .footer-left_tab {
    width: 700px;
  }

  .footer-left_tab ul li {
    padding: 5px 0;
  }

  .footer-right_tab {
    width: 320px;
    text-align: center;
  }

  .footer-right_tab p {
    margin: 20px 0;
    font-weight: 300;
  }

  .footer-right_tab span {
    color: #777;
    padding: 0 10px;
  }

  .footer-alpha {
    width: 1020px;
    margin: auto;
    font-size: 11px;
    display: flex;
    position: relative;
  }

  .footer-alpha ul {
    display: flex;
  } 

  .footer-alpha  ul li {
    margin-right: 10px;
    padding: 0 10px;
    border-right: 1px solid #999;
  }

  .footer-alpha  ul li:first-child {
    padding-left: 0;
  }
  .footer-alpha  ul li:last-child {
    border-right: none;
  }

  .footer-alpha small {
    position: absolute;
    right: 0;
  }

`;
