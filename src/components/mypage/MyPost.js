import React, { Component } from 'react'
import firebase from "firebase";
import "firebase/storage";

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
      <div>
        <input
          type="text"
          placeholder="タイトルを入力してください"
          onChange={this.doChangeTitle}
          value={this.state.title_str}
        />
        <input
          type="text"
          placeholder="ハッシュタグを入力してください"
          onChange={this.doChangeTag}
          value={this.state.tag_str}
        />
        <button onClick={this.doAction}>投稿する</button>
      </div>
    )
  }
}
export default MyPost
