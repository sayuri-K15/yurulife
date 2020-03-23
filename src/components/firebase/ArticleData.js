import React, { Component } from "react";
import styled from "styled-components";
import firebase from "firebase";
import ArticlesCard from "../articles/ArticlesCard";

var firebaseConfig = {
  apiKey: "AIzaSyBFt7MmjrhRpKo2T5yLqgPH1ZTeAQ-qy_E",
  authDomain: "yurulife-db.firebaseapp.com",
  databaseURL: "https://yurulife-db.firebaseio.com",
  projectId: "yurulife-db",
  storageBucket: "yurulife-db.appspot.com",
  messagingSenderId: "42764380340",
  appId: "1:42764380340:web:7b1baac028e7ce41ae8fe1",
  measurementId: "G-3LNS36TL5T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class ArticleData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getFireData();
  }

  getFireData() {
    let db = firebase.database();
    let ref = db.ref("article/");
    let self = this;
    ref
      .orderByKey()
      .limitToFirst(10)
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
        <ArticlesCard
          key={i}
          title={this.state.data[i].title}
          tag={this.state.data[i].tag}
        />
      );
    }
    return result;
  }
  render() {
    if (this.state.data.length == 0) {
      this.getFireData();
    }
    return(
      <ArticleDataContainer>
        {(this, this.getTableData())}
      </ArticleDataContainer>
    )
  }
}
export default ArticleData;

const ArticleDataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
