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
                <p>All images are sourced from Pexels.</p>

                <ul>
                    <li>Email: dan@protos.com</li>
                    <li>Phone: 123 456 7890</li>
                    <li>
                        <p>1 Fake Street,</p>
                        <p>Fake City,</p>
                        <p>Ireland</p>
                        <p>F01 FSFC</p>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
