import React from 'react';
import $ from 'jquery';

// shared components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



function Contact() {
    // DATA
    const CFD_IS_EXPANDED: React.MutableRefObject<boolean> = React.useRef(false);



    // HELPERS
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



    // HTML
    return (
        <div id='contact-page'>
            <Navbar />

            <main>
                <div className='flash-message'>Message</div>

                <form action='/' method='post'>
                    <div className='form-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' id='email' name='email' />
                    </div>

                    <div className='form-field'>
                        <label htmlFor='fname'>First Name</label>
                        <input type='text' id='fname' name='fname' />
                    </div>

                    <div className='form-field'>
                        <label htmlFor='lname'>Last Name</label>
                        <input type='text' id='lname' name='lname' />
                    </div>

                    <div className='form-field'>
                        <label htmlFor='location'>Location for Service</label>
                        <input type='text' id='location' name='location' />
                    </div>

                    <div className='form-field'>
                        <span className='label'>Service</span>

                        <div className='dropdown-container'>
                            <div className='dropdown-button' onClick={toggleContactFormDropdown}>
                                <span>Wedding</span>

                                <div className='arrow'>
                                    <div className='arrow-line'></div>
                                    <div className='arrow-line'></div>
                                </div>
                            </div>

                            <ul className='dropdown-menu hide' onClick={(event) => selectService(event)}>
                                <li>Wedding</li>
                                <li>Business</li>
                                <li>Class Photo</li>
                                <li>Passport</li>
                                <li>Modeling</li>
                                <li>Graduation</li>
                            </ul>
                        </div>
                    </div>

                    <div className='form-field'>
                        <label htmlFor='message'>Message</label>
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
