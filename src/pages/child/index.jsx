import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { observer, inject } from 'mobx-react'
import { loadMicroApp } from 'qiankun'
import { Layout, Spin } from 'antd'
import './index.less'
const { Content } = Layout

let microApp = null
const Index = ({ commonStore }) => {
	const [ isLoding, setLoding ] = useState(false)
	// const history = useHistory();
	useEffect(() => {
		setLoding(true)
		const renderAPP = async () => {
			microApp = loadMicroApp(
				{
					name: 'child1',
					entry: process.env.NODE_ENV === 'production' ? '/childweb1/' : '//127.0.0.1:4001/',
					container: document.getElementById('subapp-viewport')
				},
				{
					singular: false
				}
			)
			await microApp.mountPromise
			setLoding(false)
		}
		renderAPP()

		return () => {
			microApp.unmount()
		}
	}, []) // eslint-disable-line

	return (
		<Layout className="layout main-app">
			<Content className={classNames('main-content')}>
				<div className="subapp-viewport" id="subapp-viewport" />
			</Content>
			<Spin className="child-component-loading" spinning={isLoding} />
		</Layout>
	)
}

export default inject('commonStore')(observer(Index))
