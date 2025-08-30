import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render () {
        return (
            <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/players">Players</NavLink>
            <NavLink to="/parents">Parents</NavLink>
            <NavLink to="/other">Other</NavLink>
            </nav>
        );
    }
}

export default Nav;