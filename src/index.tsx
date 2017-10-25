import "babel-polyfill";
import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import WebpackCodeSplit from "./utils/WebpackCodeSplit";

import "./assets/styles/main.scss";

const Home = WebpackCodeSplit(() => import("./components/pages/Home"));

render(
  <div>
    <BrowserRouter>
      <div>
        <Route path="/" exact={true} component={Home} />
      </div>
    </BrowserRouter>
  </div>,
  document.getElementById("app")
);
