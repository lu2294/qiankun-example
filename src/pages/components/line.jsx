import React, { useRef, useEffect } from 'react'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import * as echarts from 'echarts/core'
import {
	LineChart,
	BarChart
	// PieChart,
	// ScatterChart,
	// RadarChart,
	// MapChart,
	// TreeChart,
	// TreemapChart,
	// GraphChart,
	// GaugeChart,
	// FunnelChart,
	// ParallelChart,
	// SankeyChart,
	// BoxplotChart,
	// CandlestickChart,
	// EffectScatterChart,
	// LinesChart,
	// HeatmapChart,
	// PictorialBarChart,
	// ThemeRiverChart,
	// SunburstChart,
	// CustomChart,
} from 'echarts/charts'
import {
	GridComponent,
	TooltipComponent,
	TitleComponent,
	ToolboxComponent,
  LegendComponent,
	VisualMapComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([
	TitleComponent,
	TooltipComponent,
	ToolboxComponent,
	VisualMapComponent,
	GridComponent,
  LegendComponent,
	LineChart,
	BarChart,
	CanvasRenderer
])

const LineCharts = (props) => {
	const getOption = () => {
		return {
			title: {
				text: '空气温度/湿度',
        x:'0%',
        y:'top',
        textStyle:{
          //文字颜色
          color:'#ccc',
          //字体风格,'normal','italic','oblique'
          fontStyle:'normal',
          //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
          fontWeight:'bold',
          //字体系列
          fontFamily:'sans-serif',
          fontSize:'0.8rem',
     
        }
				// subtext: 'Fake Data'
			},
      tooltip: {
        trigger: 'axis'
      },
      grid:{
        top:'18%',
        right:'7%',
        bottom:'10%',
        left:'5%'
    },
      legend: {
        data:["温度","湿度"],   
        icon: 'circle',  
        itemHeight:13,
        textStyle: {                            //图例文字的样式
          color: '#a6aebc',               //图例文字颜色
          fontSize: '0.6rem'                    //图例文字大小
      },                             //所属组件的z分层，z值小的图形会被z值大的图形覆盖
        left:"center",  
      },
			xAxis: {
				type: 'category',
				axisLine:{
          show:false
      },
      axisTick:{
          show:false
      },
				axisLabel: {
					textStyle: {
						color: '#a6aebc',
						fontSize: '0.8rem'
					}
				},

				// prettier-ignore
				data: ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00']
			},
			yAxis: [{
				type: 'value',
        name:'温度',
        nameTextStyle: {  // y轴name的样式调整
          color: '#a6aebc',
          fontSize: '0.68rem',
          padding:[0,0,0,-40]
        },
        // nameLocation:'top',
        splitLine: { show: false },
				axisLabel: {
          formatter: '{value} °C',
          textStyle: {
						color: '#a6aebc',
						fontSize: '0.6rem'
					},
					// formatter: '{value}' // Y轴单位
				},
				// axisPointer: {
				// 	snap: true
				// }
			},{
				type: 'value',
        splitLine: { show: false },
        name:'湿度',
        nameTextStyle: {  // y轴name的样式调整
          color: '#a6aebc',
          fontSize: '0.68rem',
          padding:[0,0,0,40]
        },
				axisLabel: {
          textStyle: {
						color: '#a6aebc',
						fontSize: '0.6rem'
					},
					formatter: '{value} %RH' // Y轴单位
				},
				axisPointer: {
					snap: true
				}
			}],
			series: [
				{
					name: '温度',
					type: 'line',
					smooth: true,
					// showSymbol:false,
					// prettier-ignore
					data: [12,23,47,55,33,4,67,55,44,65],
					itemStyle: {
						normal: {
							color: 'rgba(44,235,235)', //改变折线点的颜色
							lineStyle: {
								color: 'rgba(44,235,235)', 
							}
						}
					},
          areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [    
                        { offset: 0, color: "rgba(44,235,235,0.5)" },
                        { offset: 0.5, color: "rgba(44,235,235,0.3)" },
                        { offset: 1, color: "rgba(44,235,235,0.1)" },
                    ]
                )
            }
        },
				},
        {
          name: '湿度',
          type: 'line',
          smooth: true,
          // symbolSize: 5, // 设置折线上圆点大小
          // symbol: 'circle', // 设置拐点为实心圆
          yAxisIndex: 1,
          data: [15,10,20,25,30,44,122,11,121,45],
          itemStyle: {
						normal: {
							color: '#cd20cd ', //改变折线点的颜色
							lineStyle: {
								color: '#cd20cd ' //改变折线颜色
							}
						}
					},
          areaStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [    
                          { offset: 0, color: "rgba(205,32,205,0.5)" },
                          { offset: 0.5, color: "rgba(205,32,205,0.3)" },
                          { offset: 1, color: "rgba(205,32,205,0.1)" },
                      ]
                  )
              }
          },
        }
			]
		}
	}
	return (
		<ReactEChartsCore
			echarts={echarts}
			style={{ width: '100%', height: '100%' }}
			option={getOption()}
			notMerge={true}
			lazyUpdate={true}
			theme={'theme_name'}
			// onChartReady={this.onChartReadyCallback}
			// onEvents={EventsDict}
		/>
	)
}

export default LineCharts
