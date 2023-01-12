import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Nprogress from './Nprogress';
const Index = React.lazy(() => import("_pages/index"));
const Child = React.lazy(() => import("_pages/child"));

//主路由
const mainRouteConfig = [
  {
    path: "/index", title: "主应用", component: Index,
  }
]



const renderRouter = (routerList) => {
  return routerList.map((item) => {
    const { path, exact, children } = item;
    //const token = localStorage.getItem('token')
    // console.log(token)
    // if (!noAuth && !token) return <Route path="*" element={<Navigate to="/login" />} />;
    return <Route
      key={path}
      exact={exact}
      path={path}
      element={<item.component />}
    >
      {!!children && children.map(i => {
        return <Route
          key={i.path}
          exact={i.exact}
          path={i.path}
          element={<i.component />}
        />
      })}
    </Route >;
  });
};

const Indexs = () => {
  return <React.Suspense fallback={<Nprogress></Nprogress>}>
    <Routes>
      
      {renderRouter(mainRouteConfig)}
      <Route path="/" element={<Navigate to="/index" />} />
    </Routes>
    
  </React.Suspense>
};
export default Indexs;
