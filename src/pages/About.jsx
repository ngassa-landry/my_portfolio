import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaFileArchive } from 'react-icons/fa';

const About = () => {
    return (
        <div className='page'>
            <div className='absolute bottom-[-5px] left-[-5px] size-[300px] z-[-1] rounded-[50%] bg-radial from-[#4c82ed] to-[#0a0a0a]'></div>
            <div className='absolute top-[-5px] right-[-5px] size-[300px] z-[-1] rounded-[50%] bg-radial from-[#4c82ed] to-[#0a0a0a]'></div>
            <Navigation />
            <div className='body-part'>
                <Header name="text-[#4c82ed]"/>
                <section id="about"  className="container">
                    <div className="relative sm:right-20 window w-[min(50%,500px)]">
                        <div className="action-bar">
                            <p>about-me</p>
                            <AiOutlineCloseCircle />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corporis cum ratione explicabo dolorum obcaecati ab natus, consequatur cupiditate perspiciatis odio eaque tempore optio ipsam non sed sit nesciunt? Esse?
                        </p>
                    </div>
                    <div className="relative sm:bottom-30 sm:left-35 window w-[min(50%,200px)]">
                        <div className="action-bar">
                            <p>portrait</p>
                            <AiOutlineCloseCircle />
                        </div>
                        <img src="src/images&files/logo_dschang.jpg" alt="photo of me" />
                    </div>
                    <div className="relative sm:bottom-35 window">
                        <div className="action-bar">
                            <p>curriculumn vitae</p>
                            <AiOutlineCloseCircle/>
                        </div>
                        <button className='py-2'>
                            <FaFileArchive className='size-20 my-0 mx-auto'/>
                            <p className='font-extralight text-[13px]'>Download my CV </p>
                        </button>
                    </div>
                </section>
                <Footer bgdot='bg-[#4c82ed]'/>
            </div>
        </div>
    );
};

export default About;