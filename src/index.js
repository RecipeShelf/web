import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./reset.css";
import "./global.scss";

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
