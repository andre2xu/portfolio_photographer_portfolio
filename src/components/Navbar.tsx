import $ from 'jquery';
import { Link } from "react-router-dom";



function Navbar() {
    // HELPERS
    function toggleHamburgerMenu() {
        const HAMBURGER_MENU: JQuery<HTMLElement> = $('nav .hamburger-menu').first();

        if (HAMBURGER_MENU.hasClass('hide')) {
            HAMBURGER_MENU.removeClass('hide');

            $({pos: -100}).animate(
                {pos: 0},
                {
                    duration: 500,
                    step: (now) => {
                        HAMBURGER_MENU.css({right: `${now}%`});
                    }
                }
            );
        }
        else {
            $({pos: 0}).animate(
                {pos: -100},
                {
                    duration: 500,
                    step: (now) => {
                        HAMBURGER_MENU.css({right: `${now}%`});
                    },
                    complete: () => {
                        HAMBURGER_MENU.addClass('hide');
                    }
                }
            );
        }
    };



    // HTML
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

            <div className='hamburger-menu-button' onClick={toggleHamburgerMenu}>
                <div className='hamburger-menu-line'></div>
                <div className='hamburger-menu-line'></div>
                <div className='hamburger-menu-line'></div>
            </div>

            <ul className='hamburger-menu hide'>
                <li onClick={toggleHamburgerMenu}>X</li>
                <li><Link to={'/'}>My Work</Link></li>
                <li><Link to={'/'}>About Me</Link></li>
                <li><Link to={'/'}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
