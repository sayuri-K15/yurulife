import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { female } from "react-icons-kit/fa/female";
import { cutlery } from "react-icons-kit/fa/cutlery";
import { diamond } from "react-icons-kit/fa/diamond";
import { u1F334 } from "react-icons-kit/noto_emoji_regular/u1F334";
import { u1F486 } from "react-icons-kit/noto_emoji_regular/u1F486";
import { arrows_right } from "react-icons-kit/linea/arrows_right";

const SideMenu = () => {
  return (
    <SideMenuContainer className="sidemenu-container">
      <div className="sidemenu-content">
        <ul>
          <li>
            <Link to="/lifestyle" className="menu-list">
              <Icon icon={female} className="left-icon" />
              ライフスタイル
              <Icon icon={arrows_right} className="right-icon"/>
            </Link>
          </li>
          <li>
            <Link to="/trip" className="menu-list">
              <Icon icon={u1F334} className="left-icon"/>
              旅行・お出かけ
              <Icon icon={arrows_right} className="right-icon"/>
            </Link>
          </li>
          <li>
            <Link to="/food" className="menu-list">
              <Icon icon={cutlery} className="left-icon"/>
              グルメ
              <Icon icon={arrows_right} className="right-icon"/>
            </Link>
          </li>
          <li>
            <Link to="/sports" className="menu-list">
              <Icon icon={u1F486} className="left-icon"/>
              健康・スポーツ
              <Icon icon={arrows_right} className="right-icon"/>
            </Link>
          </li>
          <li>
            <Link to="/goods" className="menu-list">
              <Icon icon={diamond} className="left-icon"/>
              生活雑貨
              <Icon icon={arrows_right} className="right-icon"/>
            </Link>
          </li>
        </ul>
      </div>
    </SideMenuContainer>
  );
};
export default SideMenu;

const SideMenuContainer = styled.nav`
  border: 1px solid #f2f2f2;
  font-size: 14px;
  .sidemenu-content {
    margin-left: 18px;
    margin-bottom: 16px;
    width: 300px;
  }

  .menu-list {
    display: inline-block;
    width: 260px;
    height: 40px;
    line-height: 2.5;
    padding-left: 36px;
    margin: 0;
    position: relative;

    &:hover {
      transition: 0.7s;
      text-decoration: none;
    }
  }

  .left-icon {
    position: absolute;
    left: 0;
  }

  .right-icon {
    position: absolute;
    right: 0;
  }
`;
