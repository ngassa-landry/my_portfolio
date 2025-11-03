import { FaLink } from 'react-icons/fa';

const Header = () =>{
    return(
        <header className="h-[20px] border-1 border-white flex items-center justify-between p-1 bg-gray-800 text-white">
            <FaLink />
            <p className=''>NGASSA LIETCHE LANDRY / JAVASCRIPT FULL STACK DEVELOPER</p>
            <div></div>
        </header>
    )
}

export default Header;