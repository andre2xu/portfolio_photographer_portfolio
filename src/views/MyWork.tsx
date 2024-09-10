// shared components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



function MyWork() {
    return (
        <div id='my-work-page'>
            <Navbar />

            <main>
                <div className='image-column'>
                    <img tabIndex={0} src='/images/gallery/business/pexels-javon-swaby-197616-2783873.jpg' alt='Watch' />

                    <img tabIndex={0} src='/images/gallery/classes/pexels-137666-710744.jpg' alt='Music class' />

                    <img tabIndex={0} src='/images/gallery/graduation/pexels-hai-nguyen-825252-1699414.jpg' alt='Four college students in graduation' />

                    <img tabIndex={0} src='/images/gallery/weddings/pexels-rocsana99-948185.jpg' alt='Couple kissing at a wedding while holding a bouquet' />
                </div>

                <div className='image-column'>
                    <img tabIndex={0} src='/images/gallery/modeling/pexels-marleneleppanen-1183266.jpg' alt='Male model wearing a yellow hoodie' />

                    <img tabIndex={0} src='/images/gallery/weddings/pexels-pixabay-265722.jpg' alt='Married couple laying down on grass' />

                    <img tabIndex={0} src='/images/gallery/business/pexels-pixabay-279480.jpg' alt='Small and large body spray products' />
                </div>

                <div className='image-column'>
                    <img tabIndex={0} src='/images/gallery/classes/pexels-case-originals-3420517.jpg' alt='Crowd of male students cheering' />

                    <img tabIndex={0} src='/images/gallery/graduation/pexels-joshua-mcknight-442355-1139319.jpg' alt='Female graduate smiling at camera' />

                    <img tabIndex={0} src='/images/gallery/modeling/pexels-pixabay-247204.jpg' alt='Two female models posing for camera' />

                    <img tabIndex={0} src='/images/gallery/classes/pexels-rasy-nak-312175-893924.jpg' alt='Students in a poor country' />

                    <img tabIndex={0} src='/images/gallery/business/pexels-jose-martin-segura-benites-1422456152-27298415.jpg' alt='White shoes' />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MyWork;
