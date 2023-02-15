import React from "react";
import { HashRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import { Spin } from 'antd';

import Nprogress from './Nprogress';
const Index = React.lazy(() => import("_pages/index"));
const Child1 = React.lazy(() => import("_pages/child/index"));
const Child2 = React.lazy(() => import("_pages/child1/index"));


const SuspenseComponent = (Component) => (<React.Suspense fallback={<Spin className="child-component-loading" />}>
    <Component />
  </React.Suspense>
)

const Indexs = () => {
  return <Routes> 
      <Route path={"/main"} element={SuspenseComponent(Index)} />
      <Route path={"/child1/*"} element={SuspenseComponent(Child1)} />
      <Route path={"/child2/*"} element={SuspenseComponent(Child2)} />
      <Route path={"/*"} ex element={<Navigate to="/main" />}/>
    </Routes>
    
};
export default Indexs;
