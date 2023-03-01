import React, { useState, Suspense, useEffect } from 'react'
import { Menu, Button, Select,Image } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { useSearchParams, useNavigate } from 'react-router-dom'
import WidgetLoadingSpin from '_components/widgetLoadingSpin'
import './index.less'
import wendu_svg from '../../assets/wendu.svg'
import shidu_svg from '../../assets/shidu.svg'
import yongdian_svg from '../../assets/yongdian.svg'
const LineChartLazy = React.lazy(() => import('_components/line'))
const BarChartLazy = React.lazy(() => import('_components/bar'))
// const GaugeLazy = React.lazy(() => import('_components/gauge'))
const Index = () => {
	const navigate = useNavigate()
	const [ current, setCurrent ] = useState('mail')
	const onClick = (e) => {
		console.log('click ', e)
		navigate(e)
	}
	return (
		<div className="main_content">
			<div className="main_header">
				<div className="_title">蜻蜓净化科技大屏</div>
			</div>
			<div className="content">
				<div className="content_1">
					<div className="content_item">
						<div className="_title">
							<div className="_title_icon" />
							<div className="_title_content">房间一</div>
						</div>
						<div className="_item_content">
							<div className="_item_content_show">
                  <div className='_icon'>
                    <div className='_icon1'>
                      <Image src={wendu_svg} />
                    </div>
                  </div>
                  <div className='c1'>27.2 ℃</div>
                  <div className='c2'>室内温度</div>
							</div> 
							<div className="_item_content_show">
                  <div className='_icon'>
                    <div className='_icon1'><Image src={shidu_svg} /></div>
                  </div>
                  <div className='c1'>56.8 %</div>
                  <div className='c2'>室内湿度</div>
							</div>
              <div className="_item_content_show">
                  <div className='_icon'>
                    <div className='_icon1'><Image src={yongdian_svg} /></div>
                  </div>
                  <div className='c1'>92.34 kwh</div>
                  <div className='c2'>用电量</div>
							</div>
						</div>
					</div>
          <div className="content_item">
						<div className="_title">
							<div className="_title_icon" />
							<div className="_title_content">房间二</div>
						</div>
						<div className="_item_content">
							<div className="_item_content_show">
                  <div className='_icon'>
                    <div className='_icon1'>
                      <Image src={wendu_svg} />
                    </div>
                  </div>
                  <div className='c1'>32.2 ℃</div>
                  <div className='c2'>室内温度</div>
							</div> 
							<div className="_item_content_show">
                  <div className='_icon'>
                    <div className='_icon1'><Image src={shidu_svg} /></div>
                  </div>
                  <div className='c1'>66.8 %</div>
                  <div className='c2'>室内湿度</div>
							</div>
              <div className="_item_content_show">
                  <div className='_icon'>
                    <div className='_icon1'><Image src={yongdian_svg} /></div>
                  </div>
                  <div className='c1'>102.34 kwh</div>
                  <div className='c2'>用电量</div>
							</div>
						</div>
					</div>
          <div className="content_item">
						<div className="_title">
							<div className="_title_icon" />
							<div className="_title_content">房间三</div>
						</div>
						<div className="_item_content">
							<div className="_item_content_show">
                  <div className='_icon'>
                    <div className='_icon1'>
                      <Image src={wendu_svg} />
                    </div>
                  </div>
                  <div className='c1'>29.3 ℃</div>
                  <div className='c2'>室内温度</div>
							</div> 
							<div className="_item_content_show">
                  <div className='_icon'>
                    <div className='_icon1'><Image src={shidu_svg} /></div>
                  </div>
                  <div className='c1'>58.8 %</div>
                  <div className='c2'>室内湿度</div>
							</div>
              <div className="_item_content_show">
                  <div className='_icon'>
                    <div className='_icon1'><Image src={yongdian_svg} /></div>
                  </div>
                  <div className='c1'>72.34 kwh</div>
                  <div className='c2'>用电量</div>
							</div>
						</div>
					</div>
          <div className="content_item">
						<div className="_title">
							<div className="_title_icon" />
							<div className="_title_content">房间四</div>
						</div>
						<div className="_item_content">
							<div className="_item_content_show">
                  <div className='_icon'>
                    <div className='_icon1'>
                      <Image src={wendu_svg} />
                    </div>
                  </div>
                  <div className='c1'>24.8 ℃</div>
                  <div className='c2'>室内温度</div>
							</div> 
							<div className="_item_content_show">
                  <div className='_icon'>
                    <div className='_icon1'><Image src={shidu_svg} /></div>
                  </div>
                  <div className='c1'>54.2 %</div>
                  <div className='c2'>室内湿度</div>
							</div>
              <div className="_item_content_show">
                  <div className='_icon'>
                    <div className='_icon1'><Image src={yongdian_svg} /></div>
                  </div>
                  <div className='c1'>101.34 kwh</div>
                  <div className='c2'>用电量</div>
							</div>
						</div>
					</div>
				</div>
				<div className="content_2">
					<div className="content2_item">
						<React.Suspense fallback={<WidgetLoadingSpin />}>
							<LineChartLazy />
						</React.Suspense>
						<div className="content2_item_select">
							<Select
                className='_select'
                size="small"
                value={'房间一'}
								options={[
									{
										value: 'jack',
										label: '房间一'
									},
									{
										value: 'lucy',
										label: '房间二'
									},
									{
										value: 'tom',
										label: '房间三'
									}
								]}
							/>
						</div>
					</div>
					<div className="content2_item">
						<React.Suspense fallback={<WidgetLoadingSpin />}>
							<BarChartLazy />
						</React.Suspense>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Index
