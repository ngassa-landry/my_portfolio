import { BiHomeSmile } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BsLightningCharge } from 'react-icons/bs';
import { TbMessage } from 'react-icons/tb';

const Navigation =()=>{
    return(
        <nav className='fixed left-0 top-0 h-full p-1 border-1 border-white'> 
            <ul className='h-full flex flex-col items-center justify-center gap-2'>
                <li><BiHomeSmile /></li>
                <li><FaRegUser /></li>
                <li><AiOutlineFundProjectionScreen /></li>
                <li><BsLightningCharge /></li>
                <li><TbMessage /></li>
            </ul>
        </nav>
    );
}

export default Navigation;