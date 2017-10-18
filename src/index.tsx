import "babel-polyfill";
import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

// const Home = WebpackCodeSplit(() => import("./components/pages/Home"));

render(
  <div>
    <BrowserRouter>
      <div>{/* <Route path="/" exact={true} component={Home} /> */}</div>
    </BrowserRouter>
    hi
  </div>,
  document.getElementById("app")
);
