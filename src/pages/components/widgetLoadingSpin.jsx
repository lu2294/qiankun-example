import {Spin} from "antd";
import React from "react";
function WidgetLoadingSpin(){

  return (
      <div className={'report-dashboard-widget-loading'}><Spin tip={'Loading...'}/></div>
  )
}
export default WidgetLoadingSpin;