
import React, {Component} from 'react';

class Footer extends Component {
    
    render () {
        const currentYear = new Date().getFullYear();
        return (
            <footer className="bg-light text-center text-lg-start mt-4 ">
              <div className="text-center p-3">
                <p>&copy; {currentYear} NE Baseball League. All rights reserved.</p>
              </div>
            </footer>
        );
    }
}

export default Footer;
