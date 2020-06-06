import React from 'react';
import { Layout, Menu, Row, Col, Anchor } from 'antd';
import 'antd/dist/antd.css';
import './App.less';
import FormList from './formList.js';
import { v4 as uuidv4 } from 'uuid';
import VisibilitySensor from 'react-visibility-sensor';

const { Header, Content, Footer } = Layout;
const { Link } = Anchor;

const someImages = [
  {
    id: uuidv4(),
    leftImages: [require('./leftImages/1.jpg')],
    rightImages: [require('./rightImages/1.jpg')],
    title: ['國際生活排場', '✦'].map(text => ({
      id: uuidv4(),
      text
    })),
    subTitle: ['新北第一國際城', '林口與世界無縫接軌'].map(text => ({
      id: uuidv4(),
      text
    })),
    article: ['機捷X中山高最強交通！高科技聚落迅速發展，願景無限！'].map(
      text => ({
        id: uuidv4(),
        text
      })
    )
  },
  {
    id: uuidv4(),
    leftImages: [require('./leftImages/2.jpg'), require('./leftImages/3.jpg')],
    rightImages: [
      require('./rightImages/2.jpg'),
      require('./rightImages/3.jpg')
    ],
    title: [].map(text => ({
      id: uuidv4(),
      text
    })),
    subTitle: ['媒體三大巨擘齊聚', '300億資金重磅進駐'].map(text => ({
      id: uuidv4(),
      text
    })),
    article: [
      '三立集團＋東森集團＋日商三井媒體集團合力打造',
      ['【全台最高國際媒體園區】', '創造1.5萬就業機會，'].map(txt => ({
        id: uuidv4(),
        txt
      })),
      '人潮帶來錢潮，匯聚影視媒體菁英新貴！',
      '國際名品三井outlet、多媒體數位攝影棚…',
      '林口華麗蛻變，繁華層次再度大躍進！'
    ].map(text => ({
      id: uuidv4(),
      text
    }))
  },
  {
    id: uuidv4(),
    leftImages: [require('./leftImages/4.jpg')],
    rightImages: [require('./rightImages/4.jpg')],
    title: ['高速交通網', '✦'].map(text => ({
      id: uuidv4(),
      text
    })),
    subTitle: ['機捷線上含金量最高A9站', '國門速速切換'].map(text => ({
      id: uuidv4(),
      text
    })),
    article: [
      '機捷時速110里承載國門幸福！',
      '自2017開通後串接桃園國際機場、',
      '北北桃核心圈，創造林口巨觀移民風潮！',
      '一卡皮箱輕鬆走跳國際，365天展望世界輕鬆穿梭，',
      '全台最具國際檔次世界城市就在這！'
    ].map(text => ({
      id: uuidv4(),
      text
    }))
  },
  {
    id: uuidv4(),
    leftImages: [require('./leftImages/5.jpg'), require('./leftImages/6.jpg')],
    rightImages: [
      require('./rightImages/5.jpg'),
      require('./rightImages/6.jpg')
    ],
    title: ['國際購物城', '✦'].map(text => ({
      id: uuidv4(),
      text
    })),
    subTitle: ['雙影城雙百貨', '直抵繁華時尚赴宴'].map(text => ({
      id: uuidv4(),
      text
    })),
    article: [
      '三井二期再開發，佔地2.75公頃！',
      '與一期共同複製北市信義商圈繁榮盛景，',
      '時尚採購由你獨享；威秀＋國賓雙影城，',
      '下班輕鬆來部午夜場，搶第一手院線，享樂絕不打烊！'
    ].map(text => ({
      id: uuidv4(),
      text
    }))
  },
  {
    id: uuidv4(),
    leftImages: [require('./leftImages/7.jpg')],
    rightImages: [require('./rightImages/7.jpg')],
    title: ['林口運動中心', '✦'].map(text => ({
      id: uuidv4(),
      text
    })),
    subTitle: ['林口3000㎡最新雲端智能運動中心！'].map(text => ({
      id: uuidv4(),
      text
    })),
    article: [
      '2019年啟用，創造林口健康風潮，符奧運賽事標準的',
      '空氣槍練習空間、雲端智慧記錄運動歷程、科技連線競賽功能，',
      '最新最多元設備讓健康自然跟你走！'
    ].map(text => ({
      id: uuidv4(),
      text
    }))
  },
  {
    id: uuidv4(),
    leftImages: [require('./leftImages/8.jpg')],
    rightImages: [require('./rightImages/8.jpg')],
    title: ['看山看海 繁華享清境', '✦'].map(text => ({
      id: uuidv4(),
      text
    })),
    subTitle: ['林口稀有城市海景，獻給懂生活的您'].map(text => ({
      id: uuidv4(),
      text
    })),
    article: [
      '居城市中心難得見山海美景，',
      '【三發嵐海】左攬繁華右享清靜境，',
      '離塵不離城休閒氧森生活學。遠眺山巒疊起，',
      '高處望海岸碧藍，將一切美好盡收眼底，',
      '人在家中被美景融化，幸福的不可置信。'
    ].map(text => ({
      id: uuidv4(),
      text
    }))
  },
  {
    id: uuidv4(),
    leftImages: [require('./leftImages/9.jpg')],
    rightImages: [require('./rightImages/9.jpg')],
    title: ['無限棟距', '✦'].map(text => ({
      id: uuidv4(),
      text
    })),
    subTitle: ['一望無際棟距無限', '山海美景是自然的窗簾'].map(text => ({
      id: uuidv4(),
      text
    })),
    article: [
      '開窗見綠大地，享受極致採光自然風，',
      '無限棟距的高隱私空間，擁有自己專屬的廣闊視野天地，',
      '看高、看遠、看見不一樣的精采人生！'
    ].map(text => ({
      id: uuidv4(),
      text
    }))
  },
  {
    id: uuidv4(),
    leftImages: [
      require('./leftImages/10.jpg'),
      require('./leftImages/11.jpg')
    ],
    rightImages: [
      require('./rightImages/10.jpg'),
      require('./rightImages/11.jpg')
    ],
    title: ['三發地產真工藝', '大師陣容傾心打造', '✦'].map(text => ({
      id: uuidv4(),
      text
    })),
    subTitle: ['三發地產精工藝．締造好宅輝煌史', '三發地產企業六大堅持'].map(
      text => ({
        id: uuidv4(),
        text
      })
    ),

    article: [
      '音樂文創',
      '攜手金革唱片，用音樂與建築創造生活新態度',
      '通風採光',
      '堅持規劃地下室採光通風，明亮生活每個角落',
      '飯店式管理',
      '添加便利的物業管理系統，包辦生活大小瑣事',
      '綠態建築',
      '促進建築與環境共生共利，永續經營居住環境',
      '品質嚴選',
      '嚴選高品質建築材料，用心把關，值得您信賴',
      '安心保固',
      '以責任感實踐品牌承諾，由內而外維護您的家'
    ].map(text => ({
      id: uuidv4(),
      text
    }))
  },
  {
    id: uuidv4(),
    leftImages: [require('./leftImages/12.jpg')],
    rightImages: [require('./rightImages/12.jpg')],
    title: [].map(text => ({
      id: uuidv4(),
      text
    })),
    subTitle: ['建築設計', 'MAG玫格・ 張家豪建築師'].map(text => ({
      id: uuidv4(),
      text
    })),
    article: [
      '將音樂的美 鋪陳在建築形體上',
      '透過設計 讓建築產生美的旋律',
      '──── 代表作品 ────',
      ['〔台北〕', '東京MIDTOWN'].map(txt => ({
        id: uuidv4(),
        txt
      })),
      ['〔台北〕', ' 大直豐滙'].map(txt => ({
        id: uuidv4(),
        txt
      })),
      ['〔台中〕', ' Rich 19'].map(txt => ({
        id: uuidv4(),
        txt
      }))
    ].map(text => ({
      id: uuidv4(),
      text
    }))
  },
  {
    id: uuidv4(),
    leftImages: [require('./leftImages/13.jpg')],
    rightImages: [require('./rightImages/13.jpg')],
    title: [].map(text => ({
      id: uuidv4(),
      text
    })),
    subTitle: ['景觀設計', 'GARDEN 老圃景觀設計'].map(text => ({
      id: uuidv4(),
      text
    })),
    article: [
      '「老圃」耕耘的，不僅是土地，也是人文精神，',
      '而「老圃」秉持的，不僅是忠誠勤懇、敬業力行的態度，',
      '也是文化傳承、永續創新的服務理念',
      '──── 代表作品 ────',
      ['〔台北〕', '東方文華'].map(txt => ({
        id: uuidv4(),
        txt
      })),
      ['〔桃園〕', '華泰名品城'].map(txt => ({
        id: uuidv4(),
        txt
      })),
      ['〔台北〕', '吉美璞立'].map(txt => ({
        id: uuidv4(),
        txt
      }))
    ].map(text => ({
      id: uuidv4(),
      text
    }))
  },
  {
    id: uuidv4(),
    leftImages: [require('./leftImages/14.jpg')],
    rightImages: [require('./rightImages/14.jpg')],
    title: ['15大項飯店級公設', '✦'].map(text => ({
      id: uuidv4(),
      text
    })),
    subTitle: ['全齡度假社區．15大項飯店級公設'].map(text => ({
      id: uuidv4(),
      text
    })),
    article: [
      '誰說首購不能住飯店宅！三發地產精湛的規劃功力，',
      '打造【三發嵐海】住戶專屬餐飲服務、健身房、美人SPA池、',
      '閱覽室、露天花園等十五大項度假單元，',
      '如此輕盈的價格，卻可輕鬆入住高規格的休閒俱樂部設施，',
      '令人愛上回家的每一天。'
    ].map(text => ({
      id: uuidv4(),
      text
    }))
  },
  {
    id: uuidv4(),
    leftImages: [require('./leftImages/15.jpg')],
    rightImages: [require('./rightImages/15.jpg')],
    title: [].map(text => ({
      id: uuidv4(),
      text
    })),
    subTitle: ['完美高坪效格局，買一房多賺一房'].map(text => ({
      id: uuidv4(),
      text
    })),
    article: [
      '青年買房不困難，三發地產挺你成家，',
      '有感輕鬆購！【三發嵐海】完美格局超犯規的超高C/P值空間，',
      '買一賺一，讓您幸福都翻倍，',
      '減擔的1房價享受2房空間！輕鬆成家就趁現在！'
    ].map(text => ({
      id: uuidv4(),
      text
    }))
  }
];

const App = () => {
  return (
    <Layout className="wrapper-app">
      <Content className="site-layout" id={1}>
        <Header className="header">
          <Anchor>
            <Menu
              className="menu"
              selectable={false}
              theme="dark"
              mode="horizontal">
              <Menu.Item key="1">
                {<Link href="#1" title="Home"></Link>}
              </Menu.Item>
              <Menu.Item key="2">
                {<Link href="#2" title="立即預約"></Link>}
              </Menu.Item>
            </Menu>
          </Anchor>
        </Header>
        <div className="image">
          <div>
            <img
              className="background-image"
              src={require('./leftImages/0.jpg')}
              alt=""
            />
          </div>
          {someImages.map(
            ({ id, leftImages, rightImages, title, subTitle, article }) => (
              <div key={id}>
                <Row>
                  <Col sm={16} xs={24} className="left">
                    {leftImages.map(image => (
                      <img
                        key={image}
                        className={
                          leftImages.length === 2
                            ? 'left-image-2'
                            : 'left-image-1'
                        }
                        src={image}
                        alt=""
                      />
                    ))}
                  </Col>
                  <Col sm={8} xs={24} className="right">
                    <div className="right-absolute">
                      {rightImages.map(image =>
                        rightImages.length === 2 ? (
                          <img
                            key={image}
                            className="right-image-2"
                            src={image}
                            alt=""
                          />
                        ) : (
                          <img
                            key={image}
                            className="right-image-1"
                            src={image}
                            alt=""
                          />
                        )
                      )}
                    </div>
                    <VisibilitySensor partialVisibility={true}>
                      {({ isVisible }) => (
                        <div className={isVisible ? 'text' : 'text-none'}>
                          <p>
                            {title.map(element => (
                              <span key={element.id} className="right-title">
                                {element.text}
                                <br />
                              </span>
                            ))}
                          </p>
                          <p>
                            {subTitle.map(element => (
                              <span key={element.id} className="right-subTitle">
                                {element.text}
                                <br />
                              </span>
                            ))}
                          </p>
                          <p>
                            {article.map(element =>
                              element.text instanceof Array ? (
                                <span
                                  key={element.id}
                                  className="right-article">
                                  {element.text.map(e => (
                                    <span
                                      key={e.id}
                                      className="right-article-color">
                                      {e.txt}
                                    </span>
                                  ))}
                                  <br />
                                </span>
                              ) : (
                                <span
                                  key={element.id}
                                  className="right-article">
                                  {element.text}
                                  <br />
                                </span>
                              )
                            )}
                          </p>
                        </div>
                      )}
                    </VisibilitySensor>
                  </Col>
                </Row>
              </div>
            )
          )}
        </div>
        <FormList />
        <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer>
      </Content>
    </Layout>
  );
};

export default App;
