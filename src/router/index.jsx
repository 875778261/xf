import React, { Suspense } from "react";
import { HashRouter, Route, Switch } from 'react-router-dom'
import { loadable } from '../utils/util'
/* import Login from '../views/login'
import Layout from '../views/layout' */
//const Login = React.lazy(() => import(/* webpackChunkName:"Login" */'../views/login'))
//const Layout = React.lazy(() => import(/* webpackChunkName:"Layout" */'../views/layout'))

const Loading = function () {
    return <h1>loding....</h1>
}
const Login = loadable({
    loader: () => import(/* webpackChunkName:"Login" */'../views/login'),
    loading: Loading
})
const Layout = loadable({
    loader: () => import(/* webpackChunkName:"Layout" */'../views/layout'),
    loading: function () {
        return <div>
            <h1>aaaaaaaaa</h1>
        </div>
    }
})


class App extends React.Component {
    render() {
        return <Suspense fallback={<Loading></Loading>}>
            <HashRouter className=''>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/404' render={() => <h1>404</h1>}></Route>
                    <Route path='/' component={Layout}></Route>
                </Switch>
            </HashRouter>
        </Suspense>
    }
}
export default App