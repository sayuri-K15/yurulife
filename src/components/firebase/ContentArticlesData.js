import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/storage";

class ContentArticleData extends Component {
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
      .limitToFirst(6)
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
        <tr>
          <th key={i}>
            <img src="https://picsum.photos/150/150" alt="" />
          </th>
          <td>
            <h3>{this.state.data[i].title}</h3>
            {/* <p>{this.state.data[i].text}</p> */}
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

    return(
      <ArticleContainer className="article-container">
        <tbody>{this.getTableData()}</tbody>
      </ArticleContainer>
    )
  }
}
export default ContentArticleData;

const ArticleContainer = styled.table`
  width: 700px;

  tbody th img{
    margin-bottom: 20px;
  }

  td {
    vertical-align: top;
  }
  h3 {
    font-size: 20px;
    padding: 0px 15px;
    color: #555;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
      opacity: 0.5;
    }
  }

`
