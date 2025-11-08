import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { FaMinus } from 'react-icons/fa6';
import { FaRegSquare } from 'react-icons/fa6';
import { FaFileArchive } from 'react-icons/fa';

const About = () => {
    return (
        <div className='page'>
            <div className='absolute bottom-[0px] left-[0px] size-[300px] z-[-1] rounded-[50%] bg-radial from-(--color-about) to-[#0a0a0a]'></div>
            <div className='absolute top-[0px] right-[0px] size-[300px] z-[-1] rounded-[50%] bg-radial from-(--color-about) to-[#0a0a0a]'></div>
            <Navigation />
            <div className='body-part py-50'>
                <Header name="text-(--color-about)"/>
                <section id="about"  className="container">
                    <div className="relative sm:right-20 window w-[min(50%,500px)]">
                        <div className="action-bar">
                            <p>about-me</p>
                            <div className="action-btn">
                                <FaMinus className='size-3' />
                                <FaRegSquare className='size-3' />
                            </div>
                        </div>
                        <ol className='p-4 mx-3 list-decimal font-extralight text-[min(3vw,14px)] leading-5'>
                            <li>Hi, I'm NGASSA a JavaScript Fullsatck Developer</li>
                            <li>My focus is on creative development: my skills can be described as the meeting point between creativity and technical proficiency.</li>
                            <li>I integrated complex modules into my projects, to present the website information in an engaging way and make it a memorable experience.</li>
                            <li>I strike to dollar projects that are visually compelling by working closely with the designer, but also technically outstanding with a clean and properly structured code code.</li>
                            <li>My favorite technologies are based on the JAMstack paradigm.</li>
                        </ol>
                    </div>
                    <div className="relative sm:bottom-30 sm:left-45 window w-[min(50%,200px)]">
                        <div className="action-bar">
                            <p>portrait</p>
                            <div className="action-btn">
                                <FaMinus className='size-3' />
                                <FaRegSquare className='size-3' />
                            </div>
                        </div>
                        <img src="src/images&files/logo_dschang.jpg" alt="photo of me" />
                    </div>
                    <div className="relative sm:bottom-35 window">
                        <div className="action-bar">
                            <p>curriculumn vitae</p>
                            <div className="action-btn">
                                <FaMinus className='size-3'/>
                                <FaRegSquare className='size-3'/>
                            </div>
                        </div>
                        <button className='py-2'>
                            <FaFileArchive className='size-20 my-0 mx-auto'/>
                            <p className='font-extralight text-[13px]'><a href=".\src\assets\ngassa_landry_cv.pdf" download='NGASSA_LANDRY_CV.pdf'>Download my CV</a></p>
                        </button>
                    </div>
                </section>
                <Footer bgdot='bg-(--color-about)'/>
            </div>
        </div>
    );
};

export default About;