import React from 'react';
import $ from 'jquery';

// shared components
import Navbar from '../components/Navbar';



function Home() {
    // DATA
    const CAMERA_SHUTTER_COVERS_OPEN_POSITIONS: {[key: string]: (number|JQuery<HTMLElement> | undefined)[]} = {
        n6: [-120, -200, undefined],
        n5: [-230, 10, undefined],
        n4: [-140, 200, undefined],
        n3: [230, 0, undefined],
        n2: [230, 0, undefined],
        n1: [0, -700, undefined]
    };
    const CAMERA_SHUTTER_IS_CLOSED: React.MutableRefObject<boolean> = React.useRef(false);
    const TEASER_IMAGES: React.MutableRefObject<JQuery<HTMLElement> | undefined> = React.useRef(undefined);
    const IMAGE_POINTER: React.MutableRefObject<number> = React.useRef(0);



    // EFFECTS
    React.useEffect(() => {
        for (const COVER in CAMERA_SHUTTER_COVERS_OPEN_POSITIONS) {
            CAMERA_SHUTTER_COVERS_OPEN_POSITIONS[COVER][2] = $(`#camera-shutter .cover.${COVER}`).first();
        }

        TEASER_IMAGES.current = $('#camera-shutter .teaser-image');

        setInterval(() => {
            changeTeaserImage();
        }, 5000);
    });



    // HELPERS
    function toggleCameraShutter() {
        for (const COVER in CAMERA_SHUTTER_COVERS_OPEN_POSITIONS) {
            const DATA: (number | JQuery<HTMLElement> | undefined)[] = CAMERA_SHUTTER_COVERS_OPEN_POSITIONS[COVER];

            const COVER_ELEMENT: JQuery<HTMLElement> = DATA[2] as JQuery<HTMLElement>;

            const X: number = DATA[0] as number;
            const Y: number = DATA[1] as number;

            const X_SPEED: number = 5 // ms
            const Y_SPEED: number = X_SPEED + 45 // ms

            if (CAMERA_SHUTTER_IS_CLOSED.current === false) {
                // close shutter

                $({x: X}).animate(
                    {x: 0},
                    {
                        duration: X_SPEED,
                        step: (now) => {
                            COVER_ELEMENT.css({transform: `translate(${now}px, ${Y}px)`});
                        },
                        complete: () => {
                            $({y: Y}).animate(
                                {y: 0},
                                {
                                    duration: Y_SPEED,
                                    step: (now) => {
                                        COVER_ELEMENT.css({transform: `translate(0px, ${now}px)`});
                                    },
                                    complete: () => {
                                        CAMERA_SHUTTER_IS_CLOSED.current = true;
                                    }
                                }
                            );
                        }
                    }
                );
            }
            else {
                // open shutter

                $({y: 0}).animate(
                    {y: Y},
                    {
                        duration: Y_SPEED,
                        step: (now) => {
                            COVER_ELEMENT.css({transform: `translate(0px, ${now}px)`});
                        },
                        complete: () => {
                            $({x: 0}).animate(
                                {x: X},
                                {
                                    duration: X_SPEED,
                                    step: (now) => {
                                        COVER_ELEMENT.css({transform: `translate(${now}px, ${Y}px)`});
                                    },
                                    complete: () => {
                                        CAMERA_SHUTTER_IS_CLOSED.current = false;
                                    }
                                }
                            );
                        }
                    }
                );
            }
        }
    };

    function changeTeaserImage() {
        // close
        toggleCameraShutter();

        // open
        setTimeout(() => {
            // change image
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

            toggleCameraShutter();
        }, 1000);
    };



    // HTML
    return (
        <div id='home-page'>
            <Navbar />

            <main>
                <div id='teaser-section' className='section'>
                    <div>
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

                            <div className='teaser-image' style={{backgroundImage: 'url(/images/pexels-trungnguyenphotog-1630860.jpg)'}}></div>

                            <div className='teaser-image hide' style={{backgroundImage: 'url(/images/pexels-sabel-blanco-662810-2339724.jpg)'}}></div>

                            <div className='teaser-image hide' style={{backgroundImage: 'url(/images/pexels-valeriya-1961794.jpg)'}}></div>

                            <div className='teaser-image hide' style={{backgroundImage: 'url(/images/pexels-pixabay-261102.jpg)'}}></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
