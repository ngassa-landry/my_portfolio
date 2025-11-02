import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaFileArchive } from 'react-icons/fa';

const About = () => {
    return (
        <>
            <Navigation />
            <div className='body-part'>
                <Header />
                <section id="about">
                    <div className="portrait">
                        <div className="action-bar">
                            <p>portrait</p>
                            <AiOutlineCloseCircle />
                        </div>
                        <img src="" alt="photo of me" />
                    </div>
                    <div className="about-me">
                        <div className="action-bar">
                            <p>about-me</p>
                            <AiOutlineCloseCircle />
                        </div>

                    </div>
                    <div className="curriculum">
                        <div className="action-bar">
                            <p>curriculumn vitae</p>
                            <AiOutlineCloseCircle />
                        </div>
                        <button>
                            <FaFileArchive />
                            Download my CV 
                        </button>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default About;