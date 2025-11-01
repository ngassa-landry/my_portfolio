import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';

const Footer =()=>{
    return (
        <footer>
            <p>Based in Douala, Cameroon</p>
            <div>
                <div className="social-links">
                    <FaGithub />
                    <FaLinkedin />
                    <FaXTwitter />
                </div>
                <button>
                    let's work together
                    <FaArrowRight />
                </button>
            </div>
        </footer>
    );
}

export default Footer;