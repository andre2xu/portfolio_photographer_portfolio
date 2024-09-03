import { Link } from "react-router-dom";



function Navbar() {
    return (
        <nav>
            <h1>
                <Link to={'/'}><span>Pro</span>tos</Link>
            </h1>

            <ul className='navbar-links'>
                <li><Link to={'/'}>My Work</Link></li>
                <li><Link to={'/'}>About Me</Link></li>
                <li><Link to={'/'}>Contact</Link></li>
            </ul>

            <div className='hamburger-menu-button'>
                <div className='hamburger-menu-line'></div>
                <div className='hamburger-menu-line'></div>
                <div className='hamburger-menu-line'></div>
            </div>

            <ul className='hamburger-menu'>
                <li>X</li>
                <li><Link to={'/'}>My Work</Link></li>
                <li><Link to={'/'}>About Me</Link></li>
                <li><Link to={'/'}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
