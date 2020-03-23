import React, { Component} from 'react'
import {connect} from "react-redux"

import {findArticle} from "../../store/Article/reducer"

class FindArticleForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      find: ""
    }
    this.doChange = this.doChange.bind(this)
    this.doAction = this.doAction.bind(this)
  }
  
  doChange(e) {
    this.setState({
      find: e.target.value
    })
  }
  
  doAction(e) {
    e.preventDefault()  
    let action = findArticle(this.state.find)
    this.props.dispatch(action)
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.doAction}>
          <input type="text" value={this.state.message} onChange={this.doChange} required/>
          <input type="submit" value="検索"/>
        </form>
      </div>
    )
  }
}
export default connect((state) => state)(FindArticleForm)