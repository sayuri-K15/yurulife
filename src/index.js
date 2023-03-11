import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/Article/reducer";

// ReactDOM.render(
//   <Provider store={store}>
//       <Router>
//         <App />
//       </Router>
//   </Provider>,
//   document.getElementById("root")
// );

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
export default store;
