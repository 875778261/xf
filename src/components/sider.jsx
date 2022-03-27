import React from 'react';
import { Layout } from 'antd';
import Nav1 from './nav';
import '../css/layout.css'
import { withRouter } from 'react-router-dom';
const { Sider } = Layout;
let Nav11 = withRouter(Nav1)
//高阶组件中的withRouter, 作用是将一个组件包裹进Route里面, 然后react-router的三个对象history, location, match就会被放进这个组件的props属性中.
class Sider1 extends React.Component {

    state = {
        collapsed: false,
    };
    /* toggleCollapsed = () => {
        console.log('toggleCollapsed');
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }; */
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    render() {
        const { collapsed } = this.state;
        return <Sider className='my_sider_box' collapsible
            onCollapse={this.onCollapse}
            collapsed={collapsed}

        >
            <h1>导航头</h1>
            <Nav11></Nav11>
        </Sider>
    }
}
export default Sider1