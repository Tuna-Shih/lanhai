import React from 'react';
import { Layout, Anchor } from 'antd';

import Data from './Data';
import ImageAndText from './ImageAndText';
import Reservation from './Reservation';
import styles from './styles/Home.less';

const { Link } = Anchor;
const { Header, Content, Footer } = Layout;

const Home = () => (
  <Layout className={styles.root}>
    <Header className={styles.header}>
      <Anchor>
        <Link href="#content" title="嵐海" />
        <Link href="#reservation" title="預約賞屋" />
      </Anchor>
    </Header>

    <Content id="content" className={styles.content}>
      <img className={styles.titleImage} src="/title.jpg" />
      {Data.map(({ id, ...item }) => (
        <ImageAndText {...item} key={id} />
      ))}
    </Content>

    <Reservation />

    <Footer className={styles.footer}>
      <a className={styles.Url} href="http://www.judges.com.tw/">
        士師地產行銷股份有限公司
      </a>
      維護製作
    </Footer>
  </Layout>
);

export default React.memo(Home);
