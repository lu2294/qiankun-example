import React from 'react';
import { Layout } from 'antd';
import Routers from './config';
const { Content } = Layout;

const Index = () => {
  return <Layout className='xdr-scene-linkage'>
    {/* 网页内容 */}
    <Layout className='xdr-scene-linkage-content'>
      <Content>
        <Routers />
      </Content>
    </Layout>
  </Layout>
}

export default Index
