
 import React,{useRef,useEffect} from 'react'
 import ReactEChartsCore from 'echarts-for-react/lib/core'
 import * as echarts from 'echarts/core'
 import {
   BarChart,
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
 import { GridComponent, TooltipComponent, TitleComponent,ToolboxComponent,VisualMapComponent   } from 'echarts/components'
 import { CanvasRenderer } from 'echarts/renderers'
 echarts.use([TitleComponent, TooltipComponent, ToolboxComponent,VisualMapComponent  ,GridComponent, BarChart,CanvasRenderer])
 
 const LineCharts = (props) => {
   const getOption = () => {
     return {
      title: {
				text: '总用电量',
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
      grid:{
        top:'18%',
        right:'7%',
        bottom:'10%',
        left:'6%'
    },
      xAxis: {
        type: 'category',
        
        axisLabel: {
          textStyle: {
						color: '#a6aebc',
						fontSize: '0.7rem'
					},
					// formatter: '{value}' // Y轴单位
				},
        
        data: ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00']
      },
      yAxis: {
        type: 'value',
        splitLine: { show: false },
        name:'单位：kwh',
        nameTextStyle: {  // y轴name的样式调整
          color: '#a6aebc',
          fontSize: '0.68rem',
          padding:[0,0,0,-25]
        },
        axisLabel: {
          formatter: '{value}',
          textStyle: {
						color: '#a6aebc',
						fontSize: '0.6rem'
					},
					// formatter: '{value}' // Y轴单位
				},
      },
      series: [
        {
          data: [151,101,201,251,301,144,122,111,121],
          type: 'bar',
          barWidth : '40rem', 
          itemStyle: {
            normal: {
　　　　　　　　//这里是重点
                color: '#13d4ff',
            },
          },
        }
      ]
    }
   }
   return (
     <>
       <ReactEChartsCore
         echarts={echarts}         
         style={{ width: '100%', height: '100%' }}
         option={getOption()}
         notMerge={true}
         lazyUpdate={true}
         theme={'theme_name'}
       // onChartReady={this.onChartReadyCallback}
       // onEvents={EventsDict}
       /></>
 
   )
 }
 
 export default LineCharts
 