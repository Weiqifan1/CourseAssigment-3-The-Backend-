import React from 'react';
import { NavLink } from 'react-router-dom';
import ApiFacade from './ApiFacade';

//The navigation for the page. It is also used to filter the navigation bar for user and admin.
const Navigation = () => {

    const userRole = ApiFacade.getRole();

    return (
        <div>

            <ul className="header">
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                {userRole === "user" && <li><NavLink activeClassName="active" to="/user_history">User History</NavLink></li>}
                {userRole === "admin" && <li><NavLink exact activeClassName="active" to="/statistics">Statistics</NavLink></li>}
                {userRole === "user" && <li><NavLink activeClassName="active" to="/profile">Profile</NavLink></li>}
                {userRole === "admin" && <li><NavLink exact activeClassName="active" to="/users">User List</NavLink></li>}
                {(userRole !== "user" && userRole !== "admin") && <li><NavLink activeClassName="active" to="/register">Register</NavLink></li>}
            </ul>

        </div>
    );
}

export default Navigation;
