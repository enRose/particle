import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import {Catalogue} from './features/catalogue/catalogue'
import {Blob} from './features/blob/blob'

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" 
            defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" 
          style={{ padding: '0 50px', marginTop: 64 }}>
         
          <div className="site-layout-background" 
            style={{ padding: 24, minHeight: 380 }}>
            
            <Catalogue />
          
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Code Map ©2020 Created by Barin
        </Footer>
      </Layout>
    </div>
  );
}

export default App;