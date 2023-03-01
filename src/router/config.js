import React from "react";
import { HashRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import { Spin } from 'antd';

const Index = React.lazy(() => import("_pages/index"));


const SuspenseComponent = (Component) => (<React.Suspense fallback={<Spin className="child-component-loading" />}>
    <Component />
  </React.Suspense>
)

const Indexs = () => {
  return <Routes> 
      <Route path={"/main"} element={SuspenseComponent(Index)} />
      <Route path={"/*"} ex element={<Navigate to="/main" />}/>
    </Routes>
    
};
export default Indexs;
