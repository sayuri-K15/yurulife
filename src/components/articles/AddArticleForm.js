import React, { Component } from "react";
import { connect } from "react-redux";

import { addArticle } from "../../store/Article/reducer";

class AddArticleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      message: e.target.value,
      tag: e.target.value
    });
  }

  doAction(e) {
    e.preventDefault();
      let action = addArticle(this.state.message);
      this.props.dispatch(action);
      this.setState({
        message: ""
      })
  }

  render() {
    return (
      <div>
        <p>{this.props.message}</p>

        <form onSubmit={this.doAction}>
          <input
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.doChange}
            required
          />
          <select name="tag" value={this.state.tag} onChange={this.doChange}>
            <option value="">Life</option>
            <option value="">Trip</option>
            <option value="">Sports</option>
          </select>
          <input type="submit" value="記事を投稿する" />
        </form>
      </div>
    );
  }
}

export default connect((state) => state)(AddArticleForm);
