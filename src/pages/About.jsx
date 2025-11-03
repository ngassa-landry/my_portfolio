import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaFileArchive } from 'react-icons/fa';

const About = () => {
    return (
        <div className='about-page flex h-screen'>
            <Navigation />
            <div className='body-part'>
                <Header />
                <section id="about"  className="container">
                    <div className="window about-me">
                        <div className="action-bar">
                            <p>about-me</p>
                            <AiOutlineCloseCircle />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corporis cum ratione explicabo dolorum obcaecati ab natus, consequatur cupiditate perspiciatis odio eaque tempore optio ipsam non sed sit nesciunt? Esse?
                        </p>
                    </div>
                    <div className="window portrait w-3/12">
                        <div className="action-bar">
                            <p>portrait</p>
                            <AiOutlineCloseCircle />
                        </div>
                        <img src="src/images&files/logo_dschang.jpg" alt="photo of me" />
                    </div>
                    <div className="window curriculum">
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
        </div>
    );
};

export default About;