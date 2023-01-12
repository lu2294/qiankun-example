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
      <div className="main_1 main_2">
          <span>我是子应用2 - 页面2</span>
      </div>
		</div>
	)
}
export default Index
