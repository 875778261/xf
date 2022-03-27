import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import { loadable } from '../utils/util'
import MyProtect from './protect';

const Introduce = loadable({
    loader: () => import(/* webpackChunkName:"Introduce" */'../views/introduce'),
    loading: function () {
        return <h2>正在加载Introduce</h2>
    }
})
const Dashboard = loadable({
    loader: () => import(/* webpackChunkName:"Dashboard" */'../views/dashboard'),
    loading: function () {
        return <h2>正在加载Dashboard</h2>
    }
})
const Add = loadable({
    loader: () => import(/* webpackChunkName:"Add" */'../views/add.jsx'),
    loading: function () {
        return <h2>正在加载Add</h2>
    }
})
const Swiper = loadable({
    loader: () => import(/* webpackChunkName:"Swiper" */'../views/swiper.jsx'),
    loading: function () {
        return <h2>正在加载Swiper</h2>
    }
})

class Route1 extends React.Component {
    render() {
        return <div className='content_box'>
            <Switch>

                <Redirect path='/' exact to='/introduce'>
                </Redirect>
                <Route path='/introduce' component={Introduce}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                {/* <Route path='/add' component={Add}></Route> */}
                <MyProtect path='/add' component={Add} role={['admin','super']}></MyProtect>
                <Route path='/swiper' component={Swiper}></Route>
                <Redirect path='/*' to='/404'>
                </Redirect>
            </Switch>

        </div>
    }
}
export default Route1
