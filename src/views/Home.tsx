import React from 'react';
import $ from 'jquery';

// shared components
import Navbar from '../components/Navbar';



function Home() {
    // DATA
    const CAMERA_SHUTTER_COVERS_OPEN_POSITIONS: {[key: string]: Array<number | JQuery<HTMLElement> | undefined>} = {
        n6: [-120, -200, undefined],
        n5: [-240, -12, undefined],
        n4: [-140, 200, undefined],
        n3: [230, 0, undefined],
        n2: [230, 0, undefined],
        n1: [0, -200, undefined]
    };
    const CAMERA_SHUTTER_IS_CLOSED: React.MutableRefObject<boolean> = React.useRef(false);
    const TEASER_IMAGES: React.MutableRefObject<JQuery<HTMLElement> | undefined> = React.useRef(undefined);
    const IMAGE_POINTER: React.MutableRefObject<number> = React.useRef(0);



    // EFFECTS
    React.useEffect(() => {
        // camera animation

        for (const COVER in CAMERA_SHUTTER_COVERS_OPEN_POSITIONS) {
            CAMERA_SHUTTER_COVERS_OPEN_POSITIONS[COVER][2] = $(`#camera-shutter .cover.${COVER}`).first();
        }

        TEASER_IMAGES.current = $('#camera-shutter .teaser-image');

        // setInterval(() => {
        //     toggleCameraShutter();
        // }, 5000);
    });

    React.useEffect(() => {
        // text animations

        if (window.innerWidth >= 900) {
            $({opacity: 0.0, translation: 100}).animate(
                {opacity: 100.0, translation: 0},
                {
                    duration: 1000,
                    step: function (this: {opacity: number, translation: number}) {
                        $('#teaser-section-text').css({
                            opacity: this.opacity / 100.0,
                            transform: `translateX(${this.translation}px)`
                        });
                    }
                }
            );
        }
        else if (window.innerWidth >= 250 && window.innerWidth < 900) {
            $({opacity: 0.0, translation: -40}).animate(
                {opacity: 100.0, translation: 0},
                {
                    duration: 600,
                    step: function (this: {opacity: number, translation: number}) {
                        $('#teaser-section-text').css({
                            opacity: this.opacity / 100.0,
                            transform: `translateY(${this.translation}px)`
                        });
                    }
                }
            );
        }
    });



    // HELPERS
    function toggleCameraShutter() {
        if (CAMERA_SHUTTER_IS_CLOSED.current === false) {
            // close shutter

            closeCameraShutterCover('n6', 250, closeCameraShutterCover('n5', 260, closeCameraShutterCover('n4', 270, closeCameraShutterCover('n3', 280, closeCameraShutterCover('n2', 290, closeCameraShutterCover('n1', 250, () => { CAMERA_SHUTTER_IS_CLOSED.current = true; changeTeaserImage(); }))))));
        }
        else {
            // open shutter

            openCameraShutterCover('n1', 250, openCameraShutterCover('n2', 250, openCameraShutterCover('n3', 250, openCameraShutterCover('n4', 200, openCameraShutterCover('n5', 250, openCameraShutterCover('n6', 250, () => { CAMERA_SHUTTER_IS_CLOSED.current = false }))))));
        }
    };

    function closeCameraShutterCover(coverNum: string, duration: number, callback?: any) {
        if (CAMERA_SHUTTER_COVERS_OPEN_POSITIONS[coverNum] === undefined) {
            throw RangeError("There's no shutter cover with that number");
        }

        const DATA: (number | JQuery<HTMLElement> | undefined)[] = CAMERA_SHUTTER_COVERS_OPEN_POSITIONS[coverNum];

        const COVER: JQuery<HTMLElement> = DATA[2] as JQuery<HTMLElement>;
        const X: number = DATA[0] as number;
        const Y: number = DATA[1] as number;

        $({x: X, y: Y}).animate(
            {x: 0, y: 0},
            {
                duration: duration,
                step: function (this: {x: number, y: number}) {
                    COVER.css({transform: `translate(${Math.round(this.x)}px, ${Math.round(this.y)}px)`});
                },
                complete: callback
            }
        );
    };

    function openCameraShutterCover(coverNum: string, duration: number, callback?: any) {
        if (CAMERA_SHUTTER_COVERS_OPEN_POSITIONS[coverNum] === undefined) {
            throw RangeError("There's no shutter cover with that number");
        }

        const DATA: (number | JQuery<HTMLElement> | undefined)[] = CAMERA_SHUTTER_COVERS_OPEN_POSITIONS[coverNum];

        const COVER: JQuery<HTMLElement> = DATA[2] as JQuery<HTMLElement>;
        const X: number = DATA[0] as number;
        const Y: number = DATA[1] as number;

        $({x: 0, y: 0}).animate(
            {x: X, y: Y},
            {
                duration: duration,
                step: function (this: {x: number, y: number}) {
                    COVER.css({transform: `translate(${Math.round(this.x)}px, ${Math.round(this.y)}px)`});
                },
                complete: callback
            }
        );
    };

    function changeTeaserImage() {
        if (TEASER_IMAGES.current !== undefined) {
            // hide current image
            TEASER_IMAGES.current.eq(IMAGE_POINTER.current).addClass('hide');

            // change pointer
            const LAST_INDEX: number = TEASER_IMAGES.current.length - 1;

            IMAGE_POINTER.current += 1;

            if ((IMAGE_POINTER.current <= LAST_INDEX) === false) {
                IMAGE_POINTER.current = 0;
            }

            // display new image
            TEASER_IMAGES.current.eq(IMAGE_POINTER.current).removeClass('hide');
        }

        setTimeout(() => {
            // open shutter
            toggleCameraShutter();
        }, 250);
    };



    // HTML
    return (
        <div id='home-page'>
            <Navbar />

            <main>
                <div id='teaser-section' className='section'>
                    <div id='teaser-section-text'>
                        <h1>Professional Photos</h1>

                        <p>Don't settle for less. Go for the best.</p>
                    </div>

                    <div id='camera'>
                        <div id="view-finder"></div>

                        <div id='camera-shutter'>
                            <div id='lens'></div>

                            <div className='cover n1'></div>
                            <div className='cover n2'></div>
                            <div className='cover n3'></div>
                            <div className='cover n4'></div>
                            <div className='cover n5'></div>
                            <div className='cover n6'></div>

                            <div className='teaser-image' style={{backgroundImage: 'url(/images/teasers/pexels-trungnguyenphotog-1630860.jpg)'}}></div>

                            <div className='teaser-image hide' style={{backgroundImage: 'url(/images/teasers/pexels-sabel-blanco-662810-2339724.jpg)'}}></div>

                            <div className='teaser-image hide' style={{backgroundImage: 'url(/images/teasers/pexels-valeriya-1961794.jpg)'}}></div>

                            <div className='teaser-image hide' style={{backgroundImage: 'url(/images/teasers/pexels-pixabay-261102.jpg)'}}></div>
                        </div>
                    </div>
                </div>

                <div id='testimonials-section' className='section' style={{display: 'none'}}>
                    <article className='testimonial'>
                        <div className='client-picture' style={{backgroundImage: 'url(/images/testimonials/pexels-hannah-nelson-390257-1456951.jpg)'}}></div>

                        <q>
                            I couldn't be happier with the photos from my son's college graduation! You captured such an important moment in our lives with an eye for detail that made every shot feel personal and meaningful. The photos of him in his cap and gown, along with the shots of us as a family, really exceeded my expectations. The professionalism and creativity you brought to the session made it a memorable experience for all of us, and the final images were absolutely stunning. Thank you for helping us celebrate such a milestone, we'll cherish these pictures for a lifetime!
                        </q>

                        <p>Mark J.</p>
                    </article>

                    <article className='testimonial'>
                        <div className='client-picture' style={{backgroundImage: 'url(/images/testimonials/pexels-shvets-production-7516573.jpg)'}}></div>

                        <q>
                            Thank you so much for the beautiful photos of my daughter's wedding. I'm very impressed that you've managed to capture the joy, the love, and all the little moments that made it special. From the stunning portraits to the candid shots that felt so genuine, each picture clearly tells a story. Your professionalism, patience, and attention to detail were incredible, and you made everyone feel so comfortable in front of the camera. I just want you to know that they're more than just pictures — they are memories we will treasure forever.
                        </q>

                        <p>Linda S.</p>
                    </article>

                    <article className='testimonial'>
                        <div className='client-picture' style={{backgroundImage: 'url(/images/testimonials/pexels-streetwindy-1776846.jpg)'}}></div>

                        <q>
                            I am SO impressed with the product photos you took for my business! Honestly, I knew I wanted something clean and professional, but you completely blew me away with how you made everything look so polished and eye-catching. The lighting, the angles, and the attention to even the smallest details were spot-on. I've already noticed a difference in how people respond to my products online — the photos just pop! You really understood my brand and what I was going for, and I couldn't be more grateful. I'll definitely be back for more shoots as my business grows!
                        </q>

                        <p>Mei Z.</p>
                    </article>
                </div>

                <section id="services-section" style={{display: 'none'}}>
                    <h1>My Services</h1>

                    <p>I will do photographs for the following. If you want a service that is not included in this list, please contact me and maybe we can arrange something.</p>

                    <div id='services'>
                        <ul>
                            <li>Weddings</li>
                            <li>Products/Advertisements</li>
                            <li>Class Photos</li>
                        </ul>

                        <ul>
                            <li>Passport</li>
                            <li>Modeling Shoots</li>
                            <li>Graduation</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
