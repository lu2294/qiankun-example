import React, { useRef, useEffect } from 'react'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import * as echarts from 'echarts/core'
import {
	// PieChart,
	// ScatterChart,
	// RadarChart,
	// MapChart,
	// TreeChart,
	// TreemapChart,
	// GraphChart,
	GaugeChart,
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
	VisualMapComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([
	TitleComponent,
	TooltipComponent,
	ToolboxComponent,
	VisualMapComponent,
	GridComponent,
	GaugeChart,
	CanvasRenderer
])
const color1 = '#fff'
var colors=["#0071C2", "#04B9FC", "#00DFED", '#00D4E9', "#00EACE", '#05F9E0', "#00DC80", "#00833C"];
var data1=[{
  name:"完成率(%)",
  value:50,
}];
const LineCharts = (props) => {
	const getOption = () => {
		return {
      backgroundColor:'rgba(128,128,128,0.1)',
      tooltip:{},
      title:{
          text:'项目实际完成率（%）',
          x:'center',
          y:25,
      },
      series: [
          {
              name: '速度',
              type: 'gauge',
              z:3,
              radius:"50%",
              center:['50%','55%'],
              sartAngle:225,
              endAngle:-45,
              clockwise:true,
              min:0,
              max:220,
              splitNumber:22,
              data:data1,
          },
          {
              name: '转速',
              type: 'gauge',
              radius:"35%",
              center:['20%','55%'],
              sartAngle:225,
              endAngle:-45,
              clockwise:true,
              min:0,
              max:7,
              splitNumber:10,
              data:data1,
          },
          {
              name: '油表',
              type: 'gauge',
              radius:"25%",
              center:['77%','50%'],
              sartAngle:225,
              endAngle:-45,
              clockwise:true,
              min:0,
              max:7,
              splitNumber:10,
              data:data1,
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
