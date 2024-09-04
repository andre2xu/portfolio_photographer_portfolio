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



    // HOOKS
    React.useEffect(() => {
        for (const COVER in CAMERA_SHUTTER_COVERS_OPEN_POSITIONS) {
            CAMERA_SHUTTER_COVERS_OPEN_POSITIONS[COVER][2] = $(`#camera-shutter .cover.${COVER}`).first();
        }
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



    // HTML
    return (
        <div id='home-page'>
            <Navbar />

            <main>
                <div id='teaser-section' className='section'>
                    <div style={{display: 'none'}}>
                        <h1>Professional Photos</h1>

                        <p>Don't settle for less. Go for the best.</p>
                    </div>

                    <div id='camera-shutter'>
                        <div id='lens'></div>

                        <div className='cover n1'></div>
                        <div className='cover n2'></div>
                        <div className='cover n3'></div>
                        <div className='cover n4'></div>
                        <div className='cover n5'></div>
                        <div className='cover n6'></div>

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
