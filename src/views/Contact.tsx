// shared components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



function Contact() {
    return (
        <div id='contact-page'>
            <Navbar />

            <main>
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
                        <label htmlFor='location'>Location</label>
                        <input type='text' id='location' name='location' />
                    </div>

                    <div className='form-field'>
                        <span className='label'>Service</span>

                        <div className='dropdown-container'>
                            <div className='dropdown-button'>
                                <span>Wedding</span>

                                <div className='arrow'>
                                    <div className='arrow-line'></div>
                                    <div className='arrow-line'></div>
                                </div>
                            </div>

                            <ul className='dropdown-menu'>
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
