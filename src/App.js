import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import FormList from './formList.js';

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
          backgroundColor: 'black',
          opacity: '100%'
        }}>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            backgroundColor: 'black',
            opacity: '90%'
          }}>
          <Menu
            selectable={false}
            theme="dark"
            mode="horizontal"
            style={{ backgroundColor: 'black' }}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">來電洽詢</Menu.Item>
            <Menu.Item key="3">立即預約</Menu.Item>
          </Menu>
        </Header>
        <div
          className="site-layout-background"
          style={{ padding: 24, marginTop: 40, minHeight: 1000 }}>
          <div>
            <img
              style={{ width: '100%' }}
              src={require('./leftImages/title.jpg')}
              alt=""
            />
          </div>

          <Row>
            <Col span={16} style={{ position: 'relative' }}>
              <img
                src={require('./leftImages/1.jpg')}
                alt=""
                style={{ width: '100%' }}
              />
            </Col>

            <Col span={8} style={{ position: 'relative' }}>
              <img
                src={require('./rightImages/1.jpg')}
                alt=""
                style={{
                  width: '100%',
                  position: 'absolute',
                  height: '100%',
                  top: 0
                }}
              />
              <h1 style={{ position: 'relative', textAlign: 'center' }}>
                國際生活排場
              </h1>
              <h2 style={{ position: 'relative', textAlign: 'center' }}>
                新北第一國際城
              </h2>
              <h2 style={{ position: 'relative', textAlign: 'center' }}>
                林口與世界無縫接軌
              </h2>
              <h3 style={{ position: 'relative', textAlign: 'center' }}>
                機捷X中山高最強交通！高科技聚落迅速發展，願景無限！
              </h3>
            </Col>
          </Row>
        </div>
      </Content>
      <FormList />
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
