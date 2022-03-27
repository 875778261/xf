import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route } from 'react-router-dom';
class MyProtect extends React.Component {
    constructor() {
        super();
    }
    render() {
        let userRole = 'super'
        let { role } = this.props
        let isLogin = true
        return <div className=''>
            {
                isLogin ?
                        (role.includes(userRole) ?
                        <Route {...this.props}></Route> :
                        <Redirect to='/404'></Redirect>)
                    :
                    <Redirect to='/login'></Redirect>
            }
        </div>
    }
}
export default MyProtect