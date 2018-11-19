import React, {Component} from 'react'
import { Navbar, NavItem } from 'react-materialize';

class Navigation extends Component{
    render(){
        
        return (
            <Navbar brand='All The News 🔥' right className="grey darken-4">
                <NavItem href='/hackernews'>Hacker News</NavItem>
                <NavItem href='/reddit'>Reddit</NavItem>
            </Navbar>
        )
    }
}

export default Navigation
