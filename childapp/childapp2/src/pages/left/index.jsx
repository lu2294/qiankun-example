import React, { useState,useEffect } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import {useNavigate } from 'react-router-dom'

import './index.less'
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Option 1', '/index', <PieChartOutlined />),
  getItem('Option 2', '/index1', <DesktopOutlined />),
  getItem('Option 3', '/index2', <ContainerOutlined />),
];
const App = (props) => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState('/index');
  useEffect(()=>{
    const p = location.pathname;
    if(location.pathname.includes('/child2')){
      setCurrent(location.pathname.split('/child2')[1])

    }else{
      setCurrent(location.pathname)

    }
  },[location.pathname])
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const onSelectClick = ({key})=>{
    setCurrent(key)
    navigate(key)
  }
  return (
    <div className='child2'>
    <div
      className='left'
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        selectedKeys={[current]}
        onSelect={onSelectClick}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
    <div className='right'>{props.children}</div>
    </div>
  );
};
export default App;