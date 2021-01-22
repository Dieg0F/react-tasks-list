import react from 'react';
import { Link } from 'react-router-dom';

import icon from '../assets/images/icon.svg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-main-grey shadow-sm">
            <div className="container">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src={icon} alt="" width="32" height="32" />
                    <small className="m-2">My Tasks</small>
                </Link>
                <Link to="/create" className="navbar-brand d-flex align-items-center">
                    <small>Add Task</small>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;