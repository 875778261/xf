import React from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

import { filterByPermission } from '../utils/util'
import menus from '../router/menu.js'
import { Link } from 'react-router-dom';
let userRole = 'super'//更改用户权限,在protrct中还有个权限
const { SubMenu } = Menu;

let renderAry = filterByPermission(menus, userRole)
function renderTreeByList(arr) {
  return arr.map(item => {
    let Icon = item.icon;
    if (item.children)
      return <SubMenu key={item.key} icon={Icon ? <Icon /> : <></>} title={item.title}>
        {renderTreeByList(item.children)}
      </SubMenu>
    else
      return <Menu.Item key={item.key} icon={Icon ? <Icon></Icon> : <></>}>
        <Link to={item.key}>{item.title}</Link>
      </Menu.Item>

  })
}
function getOpenKey(ary) {
  //全部展开
  let temp=[]
  ary.forEach(item=>{
    temp.push(item.key)
  })
  return temp
}
class Nav1 extends React.Component {
  render() {
    console.log(this.props);
    return <div >
      <Menu

        defaultSelectedKeys={this.props.location.pathname}//默认选中项高亮
        selectedKeys={this.props.location.pathname}//
        defaultOpenKeys={getOpenKey(renderAry)}
        mode="inline"
        theme="dark"
      >
        {renderTreeByList(renderAry)}

      </Menu>
    </div>
  }
}
export default Nav1



