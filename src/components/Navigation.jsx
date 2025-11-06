import { BiHomeSmile } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BsLightningCharge } from 'react-icons/bs';
import { TbMessage } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const Navigation =()=>{
    return(
        <nav className='fixed h-20px left-0 top-0 h-full p-1 border-1 border-white'> 
            <ul className='text-[12px] h-full flex flex-col items-center justify-center gap-4'>
                <li>
                    <NavLink to="/"><BiHomeSmile /></NavLink>
                </li>
                <li>
                    <NavLink to="/about"><FaRegUser /></NavLink>
                </li>
                <li>
                    <NavLink to="/projects"><AiOutlineFundProjectionScreen /></NavLink>
                </li>
                <li>
                    <NavLink to="/skills"><BsLightningCharge /></NavLink>
                </li>
                <li>
                    <NavLink to="/contact"><TbMessage /></NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;