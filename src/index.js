import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/Article/reducer";

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App />
      </Router>
  </Provider>,
  document.getElementById("root")
);

export default store;
