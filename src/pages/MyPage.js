import React from "react";
import firebase from "firebase";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomizedTabs from "../components/mypage/MyTabs"

import { Image } from "react-bootstrap";
import perfume from "../image/perfume.jpg";

const MyPage = props => {

  return (
    <MypageTabContainer>
      <Header />
      <div className="mysection">
        <div className="mycontent">
          <Image
            src={perfume}
            roundedCircle
            width="80"
            height="80"
            style={{ objectFit: "cover" }}
          />
          <h4>
            アカウント名<span>さん</span>
          </h4>
        </div>
        <CustomizedTabs />
      </div>
      <Footer />
    </MypageTabContainer>
  );
};
export default MyPage;

const MypageTabContainer = styled.div`
  width: 1020px;
  margin: auto;

  .tabs {
    width: 700px;

    &:hover {
      border-bottom: 1px solid #333;
    }
  }

  .mysection {
    width: 1020px;
    margin-top: 40px;
    border-top: 1px dotted #e3e3e3;
    border-bottom: 1px dotted #e3e3e3;
  }

  .mycontent {
    width: 700px;
    padding-top: 40px;
    padding-bottom: 40px;
    margin: 20px auto;
    display: flex;

    h4 {
      font-size: 15px;
      margin-left: 30px;
    }
    span {
      font-size: 12px;
    }
  }
`;
