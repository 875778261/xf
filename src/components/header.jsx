import React from 'react';
import { Layout } from 'antd';
const { Header} = Layout;
class Header1 extends React.Component {
    render() {
        return <Header className='my_header_box'><h1>myHeader</h1></Header>
    }
}
export default Header1