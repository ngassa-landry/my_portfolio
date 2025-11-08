import { FaLink } from 'react-icons/fa';

const Header = ({ name }) => {
    return (
        <header className="header text-[min(3vw,10px)] backdrop-blur-[5px] border-[rgba(255,255,255,0.1)] z-10">
            <FaLink />
            <p className=''>NGASSA <span className={`before:content-["</"] after:content-[">"] ${name}`}>LIETCHE</span> LANDRY</p>
            <div></div>
        </header>
    );
}

export default Header;