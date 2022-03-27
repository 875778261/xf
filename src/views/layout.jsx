import React from 'react';
import { Layout } from 'antd';

/* import { Content } from 'antd/lib/layout/layout'; */
import '../css/layout.css'
/* const { Header, Footer, Sider, Content } = Layout; */

import Sider1 from '../components/sider';
import Header1 from '../components/header';
import Content1 from '../components/content';
import Route1 from '../router/route';
import Footer1 from '../components/footer'
const {Content} = Layout
class MyLayout extends React.Component {

  render() {
    return <Layout className='my_layout_box'>
      <Sider1></Sider1>
      <Layout>
        <Header1></Header1>
        <Content1>
        </Content1>
        <Footer1></Footer1>
      </Layout>
    </Layout>
  }
}
export default MyLayout



