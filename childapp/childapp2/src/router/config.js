import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Nprogress from './Nprogress';
import LeftComponent from '../pages/left'
const Index = React.lazy(() => import("_pages/index"));
const Index1 = React.lazy(() => import("_pages/index1"));
const Index2 = React.lazy(() => import("_pages/index2"));

//主路由
const mainRouteConfig = [
  {
    path: "/index", title: "子应用2-页面1", component: Index,
  },
  {
    path: "/index1", title: "子应用2-页面2", component: Index1,
  },
  {
    path: "/index2", title: "子应用2-页面3", component: Index2,
  },
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
    <LeftComponent>
    <Routes>
      {renderRouter(mainRouteConfig)}
      <Route path="/*" element={<Navigate to="/index" />} />
    </Routes>
    </LeftComponent>
    
  </React.Suspense>
};
export default Indexs;
