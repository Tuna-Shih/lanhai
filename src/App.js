import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%'
        }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ fontSize: 32, backgroundColor: 'blue', opacity: 50 }}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">來電洽詢</Menu.Item>
          <Menu.Item key="3">立即預約</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64, backgroundColor: 'black' }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 1000 }}>
          XDXDXD
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
