import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';

class Navigation extends Component{
    render(){
        return (
            <Navbar brand='All The News 🔥' right className="grey darken-4">
                <NavItem><Link to="/hackernews">Hacker News</Link></NavItem>
                <NavItem><Link to="/reddit">Reddit</Link></NavItem>
                <NavItem><Link to="/">Home</Link></NavItem>
            </Navbar>
        )
    }
}

export default Navigation
