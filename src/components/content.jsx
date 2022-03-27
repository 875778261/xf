import React from 'react';
import { Layout } from 'antd';
import Route1 from '../router/route';
const { Content } = Layout;
class Content1 extends React.Component {
    render() {
        return <Content >
            <Route1></Route1>
        </Content>
    }
}
export default Content1