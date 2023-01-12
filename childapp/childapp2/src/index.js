import './public-path';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import 'default-passive-events';
let root = null;

function render(props){
  const { container } = props;
  const containers = document.getElementById("child2-root");
  root = ReactDOM.createRoot(container ? container.querySelector("#child2-root") : containers);
  root.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/child2' : '/'}>
      <App />
    </BrowserRouter>
  
  )
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
}

export async function mount(props) {
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  console.log(root,'组件卸载')
  // console.log(container,container.querySelector("#scene-root"))
  root.unmount(container ? container.querySelector("#child2-root") : document.getElementById("child2-root"));
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
 export async function update(props) {
  // console.log('update props', props);
}

