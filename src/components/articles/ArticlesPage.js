import React, { Component }  from 'react'
import { connect }  from 'react-redux'
import ArticlesCard from "./ArticlesCard"



 class ArticlesPage extends Component {
  render() {
      let data;
        let n = 0;
        
        switch (this.props.mode) {
          case "default":
            data = this.props.data.map((value) => (
              <ArticlesCard key={value.message}
              value={value}
              index={n++}
              />
            ))
            break;

          case "delete":
            data = this.props.data.map((value) => (
              <ArticlesCard key={value.message}
              value={value}
              index={n++}
              />
            ))
            break;

          case "find":
            data = this.props.fdata.map((value) => (
              <ArticlesCard key={value.message}
              value={value}
              index={n++}
              />
            ))
            break;
        
          default:
            data = this.props.data.map((value) => (
              <ArticlesCard key={value.message}
              value={value}
              index={n++}
              />
            ))
        }

        return (
          <ul><li>{data}</li></ul>
        )
  }
}
export default connect((state) => state)(ArticlesPage);
