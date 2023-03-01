import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter,HashRouter } from "react-router-dom";
// import 'default-passive-events';
let root = null;

function render(props){
  const { container } = props;
  const containers = document.getElementById("main-root");
  root = ReactDOM.createRoot(container ? container.querySelector("#main-root") : containers);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
  )
}

  render({});


