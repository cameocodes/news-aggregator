import React, {Component} from 'react'
import { Navbar, NavItem } from 'react-materialize';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
import NewsList from './NewsList';

class Navigation extends Component{
    render(){
        
        return (
            

            <Navbar brand='All The News' right className="grey darken-4">
                <NavItem href='/hackernews'>Hacker News</NavItem>
                <NavItem href='/hackernews'>Medium</NavItem>
                <NavItem href='/hackernews'>Reddit</NavItem>

            </Navbar>
        )
    }
}

export default Navigation
