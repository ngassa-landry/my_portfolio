import { BiHomeSmile } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BsLightningCharge } from 'react-icons/bs';
import { TbMessage } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const Navigation =()=>{
    return(
        <nav className='fixed h-20px left-0 top-0 h-full p-1 border-1 backdrop-blur-[5px] border-[rgba(255,255,255,0.1)]'> 
            <ul className='text-[12px] h-full flex flex-col items-center justify-center gap-4'>
                <li>
                    <NavLink to="/"><BiHomeSmile className='hover:text-(--color-home)'/></NavLink>
                </li>
                <li>
                    <NavLink to="/about"><FaRegUser className='hover:text-(--color-about)' /></NavLink>
                </li>
                <li>
                    <NavLink to="/projects"><AiOutlineFundProjectionScreen className='hover:text-(--color-projects)' /></NavLink>
                </li>
                <li>
                    <NavLink to="/skills"><BsLightningCharge className='hover:text-(--color-skills)' /></NavLink>
                </li>
                <li>
                    <NavLink to="/contact"><TbMessage className='hover:text-(--color-contact)' /></NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;