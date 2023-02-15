import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { observer, inject } from "mobx-react";
import { registerMicroApps, start } from 'qiankun';
import { Layout, Spin } from 'antd';
import './index.less';
const { Content } = Layout;


const Index = () => {
    const [isLoding, setLoding] = useState(false);
    const getActiveRule = (hash) => (location) => {console.log(location.hash.startsWith(hash),99999999999);return location.hash.startsWith(hash)};
    useEffect(() => {
        // 避免不必要的预请求
        
            registerMicroApps([
               {name: 'child2',
            entry: process.env.NODE_ENV === 'production' ? '/childweb2/' : '//127.0.0.1:4002/',
            container: '#subapp-viewport1',
            loader: (loading) => {
                setLoding(loading)
            },
            activeRule: getActiveRule('#/child2')
        }
            ], {
                beforeLoad: app => {
                },
                beforeMount: [
                    app => {
                        console.log('[LifeCycle] before mount %c%s', 'color: red;', app.name)
                    }
                ],
                afterMount: [
                    app => {
                    }
                ],
                afterUnmount: [
                    app => {
                        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app)
                    }
                ]
            });
            start(
                {
                    prefetch: false,
                }

            );
    }, []);// eslint-disable-line


    return (
        <>
            <Layout className="layout main-app">
                <Content className={classNames('main-content')}>
                    <div className="subapp-viewport" id="subapp-viewport1" ></div>
                    <div className="subapp-viewport" id="subapp-viewport2" ></div>
                </Content>
                <Spin className="child-component-loading" spinning={isLoding} />
            </Layout>
        </>
    );
}

export default Index

