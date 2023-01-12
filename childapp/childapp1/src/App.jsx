import React from 'react'

import Routers from './router'
import { Provider } from 'mobx-react'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import './app.less'

function App() {
	return (
		<ConfigProvider locale={zh_CN}>
				<Routers />
		</ConfigProvider>
	)
}

export default App
