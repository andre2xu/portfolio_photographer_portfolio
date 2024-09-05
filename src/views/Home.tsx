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

        $({opacity: 0.0, x_translation: 100}).animate(
            {opacity: 100.0, x_translation: 0},
            {
                duration: 1000,
                step: function (this: {opacity: number, x_translation: number}) {
                    $('#teaser-section-text').css({
                        opacity: this.opacity / 100.0,
                        transform: `translateX(${this.x_translation}px)`
                    });
                }
            }
        );
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
            </main>
        </div>
    );
};

export default Home;
