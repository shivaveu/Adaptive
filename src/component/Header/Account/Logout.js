import React, { Component } from 'react';

class Logout extends Component{
    componentDidMount(){
        sessionStorage.clear(); 

    }

    render(){
        return(
            <div>
             this.props.history.push('/login');
            </div>
        )
    }
}
export default Logout;