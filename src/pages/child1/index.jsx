import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { observer, inject } from "mobx-react";
import { registerMicroApps, start } from 'qiankun';
import { Layout, Spin } from 'antd';
import './index.less';
const { Content } = Layout;


const Index = () => {
    const [isLoding, setLoding] = useState(false);
    useEffect(() => {
        // 避免不必要的预请求
        
            registerMicroApps([
               {name: 'child2',
            entry: process.env.NODE_ENV === 'production' ? '/child2web/' : '//127.0.0.1:4002/',
            container: '#subapp-viewport1',
            loader: (loading) => {
                setLoding(loading)
            },
            activeRule: '/child2'
        }
            ], {
                beforeLoad: app => {
                    console.log('before load app.name====>>>>>', app.name)
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
                    // urlRerouteOnly: true

                    // fetch(url,...args){
                    //     const token = localStorage.getItem('token');
                    //     const params = {
                    //         ...args,
                    //         headers:{
                    //             'x-rbac-token':`V1#xdr_web#${token}`
                    //           }
                    //     }
                    //     return window.fetch(url, params);
                    // }
                    // sandbox: {
                    //     experimentalStyleIsolation: true
                    // }
                }

            );
    }, []);// eslint-disable-line


    return (
        <>
            <Layout className="layout main-app">
                <Content className={classNames('main-content')}>
                    <div className="subapp-viewport" id="subapp-viewport1" ></div>
                </Content>
                <Spin className="child-component-loading" spinning={isLoding} />
            </Layout>
        </>
    );
}

export default Index

