import React, { Component } from 'react'
import firebase from "firebase";
import "firebase/storage";
import styled from "styled-components"

class MyPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title_str: "",
      tag_str: "",
      lastID: -1,
      data: []
    };
    this.getLastID();
    this.doChangeTitle = this.doChangeTitle.bind(this);
    this.doChangeTag = this.doChangeTag.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChangeTitle(e) {
    this.setState({
      title_str: e.target.value
    });
  }

  doChangeTag(e) {
    this.setState({
      tag_str: e.target.value
    });
  }


  doAction(e) {
    // alert(this.addFireData())
    this.addFireData();
    // this.props.history.push('/')
  }

  getLastID() {
    let db = firebase.database();
    let ref = db.ref("article/");
    let self = this;
    ref
      .orderByKey()
      .limitToLast(1)
      .on("value", snapshot => {
        let res = snapshot.val();
        for (let i in res) {
          self.setState({
            lastID: i
          });
          return;
        }
      });
  }

  addFireData() {
    if (this.state.lastID == -1) {
      return;
    }
    let id = this.state.lastID * 1 + 1;
    let db = firebase.database();
    let ref = db.ref("/article/" + id);
    ref.set({
      ID: id,
      title: this.state.title_str,
      tag: this.state.tag_str
    });
  }

  

  render() {
    if (this.state.lastID == -1) {
      this.getLastID();
    }
    return (
      <PostContainer>
        <h4 callName="top">記事を編集する</h4>
        <p className="input-tab">タイトルを入力してください</p>
        <input
          type="text"
          placeholder="タイトルを入力してください"
          onChange={this.doChangeTitle}
          value={this.state.title_str}
          className="input-title"
          size="80"
        />
        <p className="input-tab">ハッシュタグを入力してください</p>
        <input
          type="text"
          placeholder="# lifestyle"
          onChange={this.doChangeTag}
          value={this.state.tag_str}
          className="input-tag"
          size="80"
        />
        <button onClick={this.doAction} className="btn">記事を投稿する</button>
      </PostContainer>
    )
  }
}
export default MyPost

const PostContainer = styled.div`
  width: 100%;
  height: 350px;

  .top {
    border-bottom: 1px solid #555;
  }

  .input-tab {
    width: 80%;
    font-size: 12px;
    padding: 10px 0;
    margin-top: 30px;
    margin-bottom: 0;
  }

  .input-title .input-tag {
    display: inline-block;
    border: 1px solid #ccc;
    height: 35px;
    line-height: 30;
    
  }
  input::placeholder {
    font-size: 14px;
    color: #ccc;
  }
  .btn {
    display: block;
    width: 50%;
    font-size: 13px;
    padding: 8px 10px;
    border: 1px solid #ddd;
    margin: 50px auto;
  }
`
