import $ from 'jquery';
import { Link } from 'react-router-dom';



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

    function keyUpEventHandler(event: any) {
        const KEY_PRESSED: string = event.key;

        if (KEY_PRESSED === 'Enter') {
            const ELEMENT: JQuery<HTMLElement> = $(event.target);

            if (ELEMENT.hasClass('hamburger-menu-button') || (ELEMENT.parent().hasClass('hamburger-menu') && ELEMENT.attr('role') === 'button')) {
                ELEMENT.trigger('click');
            }
        }
    };



    // HTML
    return (
        <nav onKeyUp={(event) => keyUpEventHandler(event)}>
            <h1>
                <Link to={'/'}><span>Pro</span>tos</Link>
            </h1>

            <ul className='navbar-links'>
                <li><Link to={'/mywork'}>My Work</Link></li>
                <li><Link to={'/about'}>About Me</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>

            <div className='hamburger-menu-button' onClick={toggleHamburgerMenu} tabIndex={0}>
                <div className='hamburger-menu-line'></div>
                <div className='hamburger-menu-line'></div>
                <div className='hamburger-menu-line'></div>
            </div>

            <ul className='hamburger-menu hide' role='menu'>
                <li onClick={toggleHamburgerMenu} tabIndex={0} role='button'>X</li>
                <li role='menuitem'><Link to={'/mywork'}>My Work</Link></li>
                <li role='menuitem'><Link to={'/about'}>About Me</Link></li>
                <li role='menuitem'><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
