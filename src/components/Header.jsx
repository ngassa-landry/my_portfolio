import { FaLink } from 'react-icons/fa';

const Header = () =>{
    return(
        <header className="fixed top-0 left-0 w-full h-[20px] border-1 border-white flex items-center justify-between p-1 text-white">
            <FaLink />
            <p className=''>NGASSA LIETCHE LANDRY / JAVASCRIPT FULL STACK DEVELOPER</p>
            <div></div>
        </header>
    )
}

export default Header;