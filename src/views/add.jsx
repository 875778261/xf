import React from 'react';
class Add extends React.Component {
    render() {
        return <div className=''>
            <h1>Add</h1>
            <button onClick={()=>{
                this.props.history.push('/swiper')
            }}>SWIPER</button>
        </div>
    }
}
export default Add