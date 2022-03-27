import { TimePicker } from "antd";
import Item from "antd/lib/list/Item";
import { useState } from "react";
import { Link } from "react-router-dom";
export function loadable(obj) {
    let { loader, loading: Loading, } = obj
    let Comp;
    return function (props) {
        let [flag, setFlag] = useState(false)
        if (!flag) {
            loader().then(data => {
                //data/default
                Comp = data.default
                setFlag(true)
            })
        }
        return <>
            {
                flag ? <Comp {...props}></Comp> : <Loading></Loading>
            }
        </>
    }
}
export function filterByPermission(arr, role) {
    //根据角色从列表中筛选出来需要展示的导航
    let temp = [];
    arr.forEach(item => {
        if (item.role && !item.role.includes(role)) {
            //证明这个访问需要权限，但是当前没有权限
        } else {
            //若当前路由有子路由，子路由也要进行筛选
            if (item.children) {
                item.children = filterByPermission(item.children, role)
            }
            temp.push(item)
        }
    });
    console.log(temp);
    return temp
}
/* export function renderTreeByList(arr) {
    return arr.map(item => {
        let Icon = item.icon;
        if (item.children) {
            return <SubMenu key={item.key} icon={Icon ? <Icon></Icon> : <></>} title={item.title}>
                {renderTreeByList(children)}
            </SubMenu>
        } else 
            return <MenuItem key={item.key} icon={Icon ? <Icon></Icon> : <></>}>
                {item.title}
                <Link to={item.key}></Link>
            </MenuItem>
        
    })
} */