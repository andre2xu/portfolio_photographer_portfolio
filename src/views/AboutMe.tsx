// shared components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



function AboutMe() {
    return (
        <div id='about-me-page'>
            <Navbar />

            <main>
                <div id='about-me-story'>
                    <section>
                        <h1><span>Hello, I'm Dan</span> &#x270B;</h1>

                        <p>
                            <div id='about-me-self-portrait' style={{backgroundImage: 'url(/images/aboutme/pexels-hikaique-108148.jpg)'}}></div>  I grew up in a small coastal town in Maine, where I was always surrounded by nature. Between the rocky cliffs, forests, and endless ocean views, I found myself constantly inspired by the world around me. When I was a teenager, I picked up an old film camera, and something just clicked (pun intended). It was a way for me to capture moments that felt fleeting like a perfect sunset or just the way light hit a street corner.

                            After high school, I decided to pursue photography seriously and eventually turned it into a full-time freelance career. I've been at it for over 15 years now, working as a generalist photographer. I love the variety — whether it's shooting portraits, events, landscapes, or product photography, no two days are ever the same. It keeps me on my toes and constantly pushes me to see things in new ways. 

                            When I'm not behind the camera, I'm usually out hiking, kayaking, or just exploring new places. I'm also a huge fan of cooking. There's something about experimenting with flavors that reminds me of playing with light and composition in my work. Photography has allowed me to combine my love for adventure, creativity, and storytelling, and I can't imagine doing anything else.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AboutMe;
