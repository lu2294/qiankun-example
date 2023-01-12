import React, { useState, Suspense, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Menu, Button } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { useSearchParams,useNavigate } from 'react-router-dom'
import './index.less'

const Index = () => {
  const navigate = useNavigate()
	const [ current, setCurrent ] = useState('mail')
	const onClick = (e) => {
		console.log('click ', e)
		navigate(e)
	}
	return (
		<div className="main_content">
      <div className="main_1">
			<div className="mt10">
				<Button type="primary" onClick={()=>{onClick('/child1')}}>打开子应用1</Button>
			</div>
			<div className="mt10">
				<Button type="primary" onClick={()=>{onClick('/child2')}}>打开子应用2 - 页面1</Button>
			</div>
      <div className="mt10">
				<Button type="primary" onClick={()=>{onClick('/child2/index1')}}>打开子应用2 - 页面2</Button>
			</div>
      </div>
      <div className="main_1 main_2">
          <span>我是主应用</span>
      </div>
		</div>
	)
}
export default inject('commonStore')(observer(Index))
