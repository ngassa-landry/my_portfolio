import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';

const Footer =({bgdot})=>{
    return (
        <footer className='footer text-[min(3vw,10px)] '>
            <div className={`ml-1 w-1 h-1 rounded-[50%] ${bgdot}`}></div>
            <p className='text-[min(3vw,10px)]'>Based in Douala, Cameroon</p>
            <div className='flex items-center gap-3'>
                <div className="flex items-center gap-1">
                    <a href=""><FaGithub /></a>
                    <a href=""><FaLinkedin /></a>
                    <a href=""><FaXTwitter /></a>
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