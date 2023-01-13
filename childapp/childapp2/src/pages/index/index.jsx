import React, { useState, Suspense, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Menu, Button } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { useSearchParams,useNavigate } from 'react-router-dom'
import './index.less'

const Index = () => {
  const navigate = useNavigate()
	const onClick = (e) => {
    window.history.pushState(null,null,e)
		// navigate(e)
	}
	return (
		<div className="main_content">
      {window.__POWERED_BY_QIANKUN__  ? <div className="main_1">
			<div className="mt10">
				<Button type="primary" onClick={()=>{onClick('/main')}}>打开主应用</Button>
			</div>
			<div className="mt10">
				<Button type="primary" onClick={()=>{onClick('/child1/index')}}>打开子应用1</Button>
			</div>
      </div> : null}
      
      <div className="main_1 main_2">
          <span>我是子应用2 - 页面1</span>
      </div>
		</div>
	)
}
export default Index
