import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './App.less';
import FormList from './formList.js';

const { Header, Content, Footer } = Layout;
const someImages = [
  {
    leftImages: [require('./leftImages/1.jpg')],
    rightImages: [require('./rightImages/1.jpg')],
    text: 'test'
  },
  {
    leftImages: [require('./leftImages/2.jpg'), require('./leftImages/3.jpg')],
    rightImages: [
      require('./rightImages/2.jpg'),
      require('./rightImages/3.jpg')
    ],
    text: 'test'
  },
  {
    leftImages: [require('./leftImages/4.jpg')],
    rightImages: [require('./rightImages/4.jpg')],
    text: 'test'
  },
  {
    leftImages: [require('./leftImages/5.jpg'), require('./leftImages/6.jpg')],
    rightImages: [
      require('./rightImages/5.jpg'),
      require('./rightImages/6.jpg')
    ],
    text: 'test'
  },
  {
    leftImages: [require('./leftImages/7.jpg')],
    rightImages: [require('./rightImages/7.jpg')],
    text: 'test'
  },
  {
    leftImages: [require('./leftImages/8.jpg')],
    rightImages: [require('./rightImages/8.jpg')],
    text: 'test'
  },
  {
    leftImages: [require('./leftImages/9.jpg')],
    rightImages: [require('./rightImages/9.jpg')],
    text: 'test'
  },
  {
    leftImages: [
      require('./leftImages/10.jpg'),
      require('./leftImages/11.jpg')
    ],
    rightImages: [
      require('./rightImages/10.jpg'),
      require('./rightImages/11.jpg')
    ],
    text: 'test'
  },
  {
    leftImages: [require('./leftImages/12.jpg')],
    rightImages: [require('./rightImages/12.jpg')],
    text: 'test'
  },
  {
    leftImages: [require('./leftImages/13.jpg')],
    rightImages: [require('./rightImages/13.jpg')],
    text: 'test'
  },
  {
    leftImages: [require('./leftImages/14.jpg')],
    rightImages: [require('./rightImages/14.jpg')],
    text: 'test'
  },
  {
    leftImages: [require('./leftImages/15.jpg')],
    rightImages: [require('./rightImages/15.jpg')],
    text: 'test'
  }
];

const App = () => {
  return (
    <Layout className="wrapper-app">
      <Content className="site-layout">
        <Header className="header">
          <Menu
            className="menu"
            selectable={false}
            theme="dark"
            mode="horizontal">
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">來電洽詢</Menu.Item>
            <Menu.Item key="3">立即預約</Menu.Item>
          </Menu>
        </Header>
        <div className="image">
          <div>
            <img
              className="background-image"
              src={require('./leftImages/0.jpg')}
              alt=""
            />
          </div>
          {someImages.map(({ leftImages, rightImages }, index) => (
            <div key={index}>
              <Row>
                <Col span={16} className="left">
                  {leftImages.map(image => (
                    <img className="left-image" src={image} alt="" />
                  ))}
                </Col>
                <Col span={8} className="right">
                  {rightImages.map(image => (
                    <img
                      className={
                        rightImages.length === 2
                          ? 'right-image-2'
                          : 'right-image-1'
                      }
                      src={image}
                      alt=""
                    />
                  ))}
                  <h1 className="right-text">1</h1>
                </Col>
              </Row>
            </div>
          ))}
        </div>
        <FormList />
        <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer>
      </Content>
    </Layout>
  );
};

export default App;
