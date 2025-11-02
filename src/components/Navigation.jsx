import { BiHomeSmile } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BsLightningCharge } from 'react-icons/bs';
import { TbMessage } from 'react-icons/tb';

const Navigation =()=>{
    return(
        <>
            <nav>
                <ul>
                    <li><BiHomeSmile /></li>
                    <li><FaRegUser /></li>
                    <li><AiOutlineFundProjectionScreen /></li>
                    <li><BsLightningCharge /></li>
                    <li><TbMessage /></li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;