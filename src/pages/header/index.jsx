import React, { useState, Suspense, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useSearchParams,useNavigate,useLocation } from 'react-router-dom'
import './index.less'
const items = [
  {
    label: '我是主应用',
    key: '/main',
    icon: <MailOutlined />
  },
  {
    label: '子应用1',
    key: '/child1',
    icon: <AppstoreOutlined />
  },
  {
    label: '子应用2',
    key: '/child2',
    icon: <AppstoreOutlined />
  },
];

const Index = (props) => {
  const [current, setCurrent] = useState('/main');
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(()=>{
    if(location.pathname.includes('/child1')){
      setCurrent('/child1')
    }else if(location.pathname.includes('/child2')){
      setCurrent('/child2')
    }else{
      setCurrent(location.pathname)

    }
  },[location.pathname])
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key)
    navigate(e.key);
  };
	return <div>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    <div>{props.children ? props.children : null}</div>
    </div>
}
export default inject('commonStore')(observer(Index))
