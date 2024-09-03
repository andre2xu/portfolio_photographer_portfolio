// shared components
import Navbar from '../components/Navbar';



function Home() {
    return (
        <div id='home-page'>
            <Navbar />

            <main>
                <div id='teaser-section' className='section'>
                    <div>
                        <h1>Professional Photos</h1>

                        <p>Don't settle for less. Go for the best.</p>
                    </div>

                    <div id='camera-shutter'>
                        <div id='lens'></div>

                        <div className='cover n3'></div>
                        <div className='cover n2'></div>
                        <div className='cover n1'></div>
                        <div className='cover n6'></div>
                        <div className='cover n5'></div>
                        <div className='cover n4'></div>

                        <div className='teaser-image hide' style={{backgroundImage: 'url(/images/pexels-misha-earle-366060-1777843.jpg)'}}></div>
                        <div className='teaser-image hide' style={{backgroundImage: 'url(/images/pexels-sabel-blanco-662810-2339724.jpg)'}}></div>
                        <div className='teaser-image hide' style={{backgroundImage: 'url(/images/pexels-kpaukshtite-3270222.jpg)'}}></div>
                        <div className='teaser-image' style={{backgroundImage: 'url(/images/pexels-pixabay-258154.jpg)'}}></div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
