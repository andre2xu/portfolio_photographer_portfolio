// shared components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// static
const IMG = require('../images/aboutme/pexels-hikaique-108148.jpg');



function AboutMe() {
    return (
        <div id='about-me-page'>
            <Navbar />

            <main>
                <section id='about-me-story'>
                    <h1 tabIndex={0}><span>Hello, I'm Dan</span> &#x270B;</h1>

                    <p tabIndex={0}>
                        <img id='about-me-self-portrait' src={IMG} alt='Self portrait'></img>  I grew up in a small coastal town in Maine, where I was always surrounded by nature. Between the rocky cliffs, forests, and endless ocean views, I found myself constantly inspired by the world around me. When I was a teenager, I picked up an old film camera, and something just clicked (pun intended). It was a way for me to capture moments that felt fleeting like a perfect sunset or just the way light hit a street corner.

                        After high school, I decided to pursue photography seriously and eventually turned it into a full-time freelance career. I've been at it for over 15 years now, working as a generalist photographer. I love the variety — whether it's shooting portraits, events, landscapes, or product photography, no two days are ever the same. It keeps me on my toes and constantly pushes me to see things in new ways. 

                        When I'm not behind the camera, I'm usually out hiking, kayaking, or just exploring new places. I'm also a huge fan of cooking. There's something about experimenting with flavors that reminds me of playing with light and composition in my work. Photography has allowed me to combine my love for adventure, creativity, and storytelling, and I can't imagine doing anything else.
                    </p>
                </section>

                <section id='about-me-protos'>
                    <h1 tabIndex={0}><span>Protos</span> &#x1F4F7;</h1>

                    <p tabIndex={0}>
                        My photography business, Protos, is still in its early stages, but it's already starting to take shape. Right now, it's just me handling all the photography, along with a talented web developer who built and maintains the site for me. I'm proud of what we've accomplished so far, but I know there's a lot more potential. I'm actively looking for experts who can help with the business and marketing side of things to help Protos grow and reach more people. My mission with Protos is simple: to offer professional, high-quality photography that's affordable for everyone, whether it's for personal projects, events, or businesses looking for great visuals.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutMe;
