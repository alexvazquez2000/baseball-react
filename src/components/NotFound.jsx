import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class NotFound extends Component {
    render () {
        return (
            <div>
               <h1>404 - Page Not Found</h1>
               <p>The page you are looking for does not exist.</p>
               <NavLink to="/">Go to Home</NavLink>
             </div>
        );
    }
}

export default NotFound;