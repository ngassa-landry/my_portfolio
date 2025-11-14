import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { FaMinus } from 'react-icons/fa6';
import { FaRegSquare } from 'react-icons/fa6';
import { FaFileArchive } from 'react-icons/fa';
import { useState } from 'react';

const About = () => {

    const [isAboutMeMinimize, setIsAboutMeMinimize] = useState(false);
    const [isPortraitMinimize, setIsPortraitMinimize] = useState(false);
    const [isCVMinimize, setIsCVMinimize] = useState(false);

    const [isAboutMeMaximize, setIsAboutMeMaximize] = useState(false);
    const [isPortraitMaximize, setIsPortraitMaximize] = useState(false);
    const [isCVMaximize, setIsCVMaximize] = useState(false);

    return (
        <div className='page'>
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className='absolute bottom-[0px] left-[0px] size-[300px] z-[-1] rounded-[50%] bg-[radial-gradient(circle,_var(--color-about)_0%_1%,_#20304f_50%,_#0f0f0f_70%_100%)] opacity-65'></div>
                <div className='absolute top-[0px] right-[0px] size-[300px] z-[-1] rounded-[50%] bg-[radial-gradient(circle,_var(--color-about)_0%_1%,_#20304f_50%,_#0f0f0f_70%_100%)] opacity-65'></div>
            </div>
            <Navigation />
            <div className='body-part'>
                <Header name="text-(--color-about)"/>
                <section className="container py-10 sm:h-[calc(100vh-40px)] sm:pt-70">
                    <div className={`${isAboutMeMaximize ? '': ''} relative sm:right-20 window w-[min(50%,500px)]`}>
                        <div className="action-bar">
                            <p className="text-white font-extralight">about-me</p>
                            <div className="action-btn">
                                <FaMinus className='size-3 cursor-pointer' onClick={() => setIsAboutMeMinimize(!isAboutMeMinimize)}/>
                                <FaRegSquare className='size-3 cursor-pointer'  onClick={() => setIsAboutMeMaximize(!isAboutMeMaximize)}/>
                            </div>
                        </div>
                        <ol className={`${isAboutMeMinimize ? 'hidden' : ''}  p-4 mx-3 list-decimal font-extralight text-[min(3vw,14px)] leading-5`}>
                            <li>Hi, I'm <span className='text-(--color-about)'>NGASSA</span> a <span className='text-(--color-home)'>JavaScript Fullsatck Developer</span></li>
                            <li>My focus is on <span className='text-(--color-about)'>creative development</span>: my skills can be described as the <span className='text-(--color-projects)'>meeting point</span> between creativity and <span className='text-(--color-skills)'>technical proficiency.</span></li>
                            <li>I integrated <span className='text-(--color-contact)'>complex modules</span> into my projects, to present the website information in an <span className='text-(--color-projects)'>engaging way</span> and make it a <span className='text-(--color-about)'>memorable experience.</span></li>
                            <li>I strike to deliver projects that are <span className='text-(--color-home)'>visually compelling</span> by working closely with the <span className='text-(--color-skills)'>designer</span>, but also technically outstanding with a clean and <span className='text-(--color-about)'>properly structured code.</span></li>
                            <li>My favorite technologies are based on the <span className='text-(--color-contact)'>JAMstack paradigm.</span></li>
                        </ol>
                    </div>
                    <div className={`${isPortraitMaximize ? '': ''} relative sm:bottom-30 sm:left-45 window w-[min(50%,200px)]`}>
                        <div className="action-bar">
                            <p className="text-white font-extralight">portrait</p>
                            <div className="action-btn">
                                <FaMinus className='size-3 cursor-pointer' onClick={() => setIsPortraitMinimize(!isPortraitMinimize)}/>
                                <FaRegSquare className='size-3 cursor-pointer' onClick={() => setIsPortraitMaximize(!isPortraitMaximize)}/>
                            </div>
                        </div>
                        <img className={`${isPortraitMinimize ? 'hidden' : ''}`} src="src/images&files/logo_dschang.jpg" alt="photo of me" />
                    </div>
                    <div className={`${isCVMaximize ? '': ''} relative sm:bottom-35 window`}>
                        <div className="action-bar">
                            <p className="text-white font-extralight">curriculumn vitae</p>
                            <div className="action-btn">
                                <FaMinus className='size-3 cursor-pointer' onClick={() => setIsCVMinimize(!isCVMinimize)}/>
                                <FaRegSquare className='size-3 cursor-pointer' onClick={() => setIsCVMaximize(!isCVMaximize)}/>
                            </div>
                        </div>
                        <button className={`${isCVMinimize ? 'hidden' : ''} py-2`} >
                            <FaFileArchive className='size-20 my-0 mx-auto'/>
                            <p className='font-extralight text-[13px]'><a href=".\src\images&files\ngassa_landry_cv.pdf" download='NGASSA_LANDRY_CV.pdf'>Download my CV</a></p>
                        </button>
                    </div>
                </section>
                <Footer bgdot='bg-(--color-about)'/>
            </div>
        </div>
    );
};

export default About;