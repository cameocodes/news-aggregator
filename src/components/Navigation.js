import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component{
    render(){
        return (
            <div className="nav"><Link to="/">All The News <span role="img" aria-label="logo">🔥</span></Link></div>
        )
    }
}

export default Navigation
