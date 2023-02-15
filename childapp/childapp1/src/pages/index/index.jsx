import React, { useState, Suspense, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Menu, Button } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { useSearchParams,useNavigate } from 'react-router-dom'
import './index.less'

const Index = () => {
  const navigate = useNavigate()
	const onClick = (e,isHash = false) => {
    if(isHash){
      window.location.hash = e;
    }else{
      window.history.pushState(null,null,e)
    }
		console.log('click ', e)
    // window.history.pushState(null,null,e)
		// navigate(e)
	}
	return (
		<div className="main_content">
      <div className="main_1">
			<div className="mt10">
				<Button type="primary" onClick={()=>{onClick('/main',true)}}>打开主应用</Button>
			</div>
			<div className="mt10">
				<Button type="primary" onClick={()=>{onClick('/child2/index',true)}}>打开子应用2 - 页面1</Button>
			</div>
      <div className="mt10">
				<Button type="primary" onClick={()=>{onClick('/child2/index2',true)}}>打开子应用2 - 页面3</Button>
			</div>
      </div>
      <div className="main_1 main_2">
          <span>我是子应用1</span>
      </div>
		</div>
	)
}
export default Index
