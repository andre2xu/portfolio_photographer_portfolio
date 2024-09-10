// shared components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// static
const IMG_1 = require('../images/gallery/business/pexels-javon-swaby-197616-2783873.jpg');
const IMG_2 = require('../images/gallery/classes/pexels-137666-710744.jpg');
const IMG_3 = require('../images/gallery/graduation/pexels-hai-nguyen-825252-1699414.jpg');
const IMG_4 = require('../images/gallery/weddings/pexels-rocsana99-948185.jpg');
const IMG_5 = require('../images/gallery/modeling/pexels-marleneleppanen-1183266.jpg');
const IMG_6 = require('../images/gallery/weddings/pexels-pixabay-265722.jpg');
const IMG_7 = require('../images/gallery/business/pexels-pixabay-279480.jpg');
const IMG_8 = require('../images/gallery/classes/pexels-case-originals-3420517.jpg');
const IMG_9 = require('../images/gallery/graduation/pexels-joshua-mcknight-442355-1139319.jpg');
const IMG_10 = require('../images/gallery/modeling/pexels-pixabay-247204.jpg');
const IMG_11 = require('../images/gallery/classes/pexels-rasy-nak-312175-893924.jpg');
const IMG_12 = require('../images/gallery/business/pexels-jose-martin-segura-benites-1422456152-27298415.jpg');



function MyWork() {
    return (
        <div id='my-work-page'>
            <Navbar />

            <main>
                <div className='image-column'>
                    <img tabIndex={0} src={IMG_1} alt='Watch' />

                    <img tabIndex={0} src={IMG_2} alt='Music class' />

                    <img tabIndex={0} src={IMG_3} alt='Four college students in graduation' />

                    <img tabIndex={0} src={IMG_4} alt='Couple kissing at a wedding while holding a bouquet' />
                </div>

                <div className='image-column'>
                    <img tabIndex={0} src={IMG_5} alt='Male model wearing a yellow hoodie' />

                    <img tabIndex={0} src={IMG_6} alt='Married couple laying down on grass' />

                    <img tabIndex={0} src={IMG_7} alt='Small and large body spray products' />
                </div>

                <div className='image-column'>
                    <img tabIndex={0} src={IMG_8} alt='Crowd of male students cheering' />

                    <img tabIndex={0} src={IMG_9} alt='Female graduate smiling at camera' />

                    <img tabIndex={0} src={IMG_10} alt='Two female models posing for camera' />

                    <img tabIndex={0} src={IMG_11} alt='Students in a poor country' />

                    <img tabIndex={0} src={IMG_12} alt='White shoes' />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MyWork;
