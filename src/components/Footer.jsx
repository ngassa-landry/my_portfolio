import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';

const Footer =()=>{
    return (
        <footer className='h-[20px] bg-amber-300 flex justify-between items-center px-1 border-1'>
            <div className="point bg-white w-1 h-1 rounded-[50%]"></div>
            <p>Based in Douala, Cameroon</p>
            <div className='flex items-center gap-3'>
                <div className="social-links flex items-center gap-1">
                    <FaGithub />
                    <FaLinkedin />
                    <FaXTwitter />
                </div>
                <button className='h-[16px] flex items-center gap-2 border-white border-1 px-0.5'>
                    let's work together
                    <FaArrowRight />
                </button>
            </div>
        </footer>
    );
}

export default Footer;