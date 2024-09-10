import { Link } from 'react-router-dom';



function Footer() {
    return (
        <footer>
            <div id='footer-sitemap'>
                <ul id='footer-page-links'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/mywork'}>My Work</Link></li>
                    <li><Link to={'/about'}>About Me</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>

                <ul id='footer-legal-links'>
                    <li><a href='#not-available'>Terms of Service</a></li>
                    <li><a href='#not-available'>Privacy Policy</a></li>
                </ul>
            </div>

            <div id='footer-info'>
                <p tabIndex={0}>All images are sourced from Pexels.</p>

                <ul>
                    <li tabIndex={0}>Email: dan@protos.com</li>
                    <li tabIndex={0}>Phone: 123 456 7890</li>
                    <li>
                        <p tabIndex={0}>1 Fake Street,</p>
                        <p tabIndex={0}>Fake City,</p>
                        <p tabIndex={0}>Ireland</p>
                        <p tabIndex={0}>F01 FSFC</p>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
