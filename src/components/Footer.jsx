import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';

const Footer =({bgdot})=>{
    return (
        <footer className='footer text-[min(3vw,10px)] backdrop-blur-[5px] border-[rgba(255,255,255,0.1)] z-10'>
            <div className={`ml-1 w-1 h-1 rounded-[50%] ${bgdot}`}></div>
            <p className='text-[min(3vw,10px)] flex gap-4'>Based in Douala, Cameroon 
                <span>
                    {(() =>{
                        var date = new Date();
                        var dh = date.getHours();
                        var dm = date.getMinutes();
                        var ds = date.getSeconds()
                        return (
                            <>
                                Local Time {dh} : {dm}
                            </>
                        )
                    })()}
                </span>
            </p>
            <div className='flex items-center gap-3'>
                <div className="flex items-center gap-1">
                    <a href=""><FaGithub /></a>
                    <a href=""><FaLinkedin /></a>
                    <a href=""><FaXTwitter /></a>
                </div>
                <a href='/contact' className='h-[16px] flex items-center gap-2 border-white border-1 px-1 cursor-pointer hover:bg-[#7d7d7d5d] hover:border-none'>
                    let's work together
                    <FaArrowRight />
                </a>
            </div>
        </footer>
    );
}

export default Footer;