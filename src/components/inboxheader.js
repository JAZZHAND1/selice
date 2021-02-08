import react from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import {HiInformationCircle} from 'react-icons/hi';
import {FaRegEnvelope} from 'react-icons/fa';
const Inboxheader = (props)=>{
    return(
    <div>
        <AiOutlineStar style={{paddingLeft:"10px",float:"left"}} color="black" size="1.5em"></AiOutlineStar> Designmondo to me 
            <div className="topinfo">{props.timestamp}
                <HiInformationCircle size="2em" style={{position:"relative",top:"10px"}}></HiInformationCircle>
                <FaRegEnvelope size="2em" style={{position:"relative",top:"10px"}}></FaRegEnvelope>
            </div>
    </div>
    )
}

export default Inboxheader;

