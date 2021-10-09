import React from "react";
import ReactDom from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

import reducers from "./Components/Redux/app/reducers";
import ReactRedux from "./Components/Redux/app/ReactRedux";
import Titles from "../src/Components/exercises(notimportant/redux/246_counter";
// also could be used with <ReactRedux/>or <App/> component
ReactDom.render(
  // passing all data to provider -> above app
  <Provider store={createStore(reducers)}>
    {/* <ReactRedux /> */}
    <Titles />
  </Provider>,
  document.getElementById("root")
);
