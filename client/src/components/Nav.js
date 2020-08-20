import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
     render() {
        return(
            <nav className="indigo lighten-3">
                <div className="container">
                    <Link to="/" className="brand-logo">Habit Tracker</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/habit_objects/new">New Habit</Link></li>
                        <li><Link to="/habit_objects">Current Habits</Link></li>
                        <li><Link to="/completed_habits"  >Completed</Link></li>
                    </ul>
                </div>
                
            </nav>
        
        )
     }
}

export default Nav;