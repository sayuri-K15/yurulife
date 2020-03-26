import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase";

class SideRanking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getFireData = this.getFireData.bind(this);
  }

  getFireData() {
    let db = firebase.database();
    let ref = db.ref("article/");
    let self = this;
    ref
      .orderByKey()
      .limitToFirst(5)
      .on("value", snapshot => {
        self.setState({
          data: snapshot.val()
        });
      });
  }

  getTableData() {
    let result = [];
    if (this.state.data == null || this.state.data.length == 0) {
      return [
        <tr key="10">
          <th>No data.</th>
        </tr>
      ];
    }
    for (let i in this.state.data) {
      result.push(
        <tr key={i}>
          <th>
            <span className="rank-num">{i}</span>
            <img src="https://picsum.photos/50/50" alt="" />
          </th>
          <td>
            <p>
              <a>{this.state.data[i].title}</a>
            </p>
            <span className="rank-tag">
              <a>{this.state.data[i].tag}</a>
            </span>
          </td>
        </tr>
      );
    }
    return result;
  }

  render() {
    if (this.state.data.length == 0) {
      this.getFireData();
    }
    return (
      <SideRankingContainer className="sideranking-container">
        <h3>人気記事ランキング</h3>
        <table>{this.getTableData()}</table>
      </SideRankingContainer>
    );
  }
}

export default SideRanking;

const SideRankingContainer = styled.div`
  text-align: center;
  font-size: 12px;
  border: 1px solid #f2f2f2;
  padding-bottom: 15px;

  h3 {
    font-size: 16px;
    padding: 15px;
  }

  table {
    margin-left: 18px;
    text-align: left;
  }

  tr {
    padding: 0 15px ;
  }

  th {
    position: relative;
  }
  .rank-num {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 20px;
    height: 20px;
    background: #eee;
    border: 1px solid #fff;
    border-radius: 50%;
    text-align : center;
    line-height: 1;
    color: #333;
  }

  th img {
    margin-bottom: 24px;
  }

  td {
    position: relative;
    margin-bottom: 10px;
    vertical-align: top;
  }

  p {
    whitespace: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0px 10px 0;
    margin: 0;

    &:hover {
      text-decoration: underline;
      transition: 0.8s;
      cursor: pointer;
    }
  }

  .rank-tag {
    color: #c4c4c4;
    position: absolute;
    right: 10px;
    margin-bottom: 10px;
  }

  .side-article {
    margin-bottom: 10px;
    margin-left: 10px;
  }
`;
