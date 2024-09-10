import React from 'react';
import $ from 'jquery';

// shared components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



function Contact() {
    // DATA
    const CFD_IS_EXPANDED: React.MutableRefObject<boolean> = React.useRef(false);



    // HELPERS
    function keyUpEventHandler(event: any) {
        const KEY_PRESSED: string = event.key;

        if (KEY_PRESSED === 'Enter') {
            const ELEMENT: JQuery<HTMLElement> = $(event.target);

            if (ELEMENT.hasClass('dropdown-button') || (ELEMENT.parent().hasClass('dropdown-menu') && ELEMENT[0].tagName === 'LI')) {
                ELEMENT.trigger('click');
            }
        }
    };

    function toggleContactFormDropdown() {
        const DROPDOWN_BUTTON_ARROW: JQuery<HTMLElement> = $('.dropdown-button .arrow').first();
        const DROPDOWN_MENU: JQuery<HTMLElement> = $('.dropdown-menu').first();

        if (CFD_IS_EXPANDED.current === false) {
            // expand dropdown
            DROPDOWN_MENU.removeClass('hide');

            $({rotation: 0}).animate(
                {rotation: 180},
                {
                    duration: 200,
                    step: (now) => {
                        DROPDOWN_BUTTON_ARROW.css({transform: `rotate(${now}deg)`});
                    },
                    complete: () => {
                        CFD_IS_EXPANDED.current = true;
                    }
                }
            );
        }
        else {
            // collapse dropdown
            DROPDOWN_MENU.addClass('hide');

            $({rotation: 180}).animate(
                {rotation: 0},
                {
                    duration: 200,
                    step: (now) => {
                        DROPDOWN_BUTTON_ARROW.css({transform: `rotate(${now}deg)`});
                    },
                    complete: () => {
                        CFD_IS_EXPANDED.current = false;
                    }
                }
            );
        }
    };

    function selectService(event: any) {
        $('.dropdown-button span').text(event.target.innerText);

        // close dropdown
        toggleContactFormDropdown();
    };

    function displayFlashMessage(message: string, isSuccess: boolean = false) {
        const FLASH_MESSAGE: JQuery<HTMLElement> = $('.flash-message').first();

        if (isSuccess) {
            FLASH_MESSAGE.addClass('success');
        }
        else {
            FLASH_MESSAGE.removeClass('success');
        }

        // make flash message appear
        $({opacity: 0}).animate(
            {opacity: 100},
            {
                duration: 900,
                step: (now) => {
                    FLASH_MESSAGE.css({opacity: `${now}%`});
                },
                queue: false // run simultaneously with the movement animation
            }
        );

        // make flash message slide down
        FLASH_MESSAGE.css({display: 'block'});

        $({pos: -10}).animate(
            {pos: 3},
            {
                duration: 500,
                step: (now) => {
                    FLASH_MESSAGE.text(message);

                    FLASH_MESSAGE.css({top: `${now}%`});
                },
                complete: () => {
                    // make flash message disappear
                    setTimeout(() => {
                        FLASH_MESSAGE.css({
                            top: '-10%',
                            opacity: '0%',
                            display: 'none'
                        });
                    }, 4000);
                }
            }
        );

        // make screen reader read flash message
        FLASH_MESSAGE[0].focus();
    };

    function contactFormSubmission(event: any) {
        event.preventDefault();

        let is_valid: boolean = true;

        $('main form input').each((_, element: HTMLElement) => {
            if (element instanceof HTMLInputElement) {
                if (element.value.length === 0) {
                    displayFlashMessage("Please fill in all required fields");

                    is_valid = false;

                    return false; // stop loop
                }
            }
        });

        if (is_valid) {
            displayFlashMessage(
                "I've received your message. I'll try to respond via email within 48 hours.",
                true
            );
        }
    };



    // HTML
    return (
        <div id='contact-page'>
            <Navbar />

            <main>
                <div tabIndex={0} className='flash-message'>Message</div>

                <form action='/' method='post' onSubmit={contactFormSubmission} onKeyUp={(event) => keyUpEventHandler(event)}>
                    <div className='form-field'>
                        <label tabIndex={0} htmlFor='email'>Email</label>
                        <input type='text' id='email' name='email' />
                    </div>

                    <div className='form-field'>
                        <label tabIndex={0} htmlFor='fname'>First Name</label>
                        <input type='text' id='fname' name='fname' />
                    </div>

                    <div className='form-field'>
                        <label tabIndex={0} htmlFor='lname'>Last Name</label>
                        <input type='text' id='lname' name='lname' />
                    </div>

                    <div className='form-field'>
                        <label tabIndex={0} htmlFor='location'>Location for Service</label>
                        <input type='text' id='location' name='location' />
                    </div>

                    <div className='form-field'>
                        <span tabIndex={0} className='label'>Service</span>

                        <div className='dropdown-container'>
                            <div tabIndex={0} className='dropdown-button' onClick={toggleContactFormDropdown} >
                                <span>Wedding</span>

                                <div className='arrow'>
                                    <div className='arrow-line'></div>
                                    <div className='arrow-line'></div>
                                </div>
                            </div>

                            <ul className='dropdown-menu hide' onClick={(event) => selectService(event)}>
                                <li tabIndex={0}>Wedding</li>
                                <li tabIndex={0}>Business</li>
                                <li tabIndex={0}>Class Photo</li>
                                <li tabIndex={0}>Passport</li>
                                <li tabIndex={0}>Modeling</li>
                                <li tabIndex={0}>Graduation</li>
                            </ul>
                        </div>
                    </div>

                    <div className='form-field'>
                        <label tabIndex={0} htmlFor='message'>Message (optional)</label>
                        <textarea name='message' id='message' placeholder='Anything I need to know?'></textarea>
                    </div>

                    <button type='submit'>Send</button>
                </form>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
