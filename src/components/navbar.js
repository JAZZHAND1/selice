import react from 'react'
import inbox from './inbox.png';
import Image from './Image.png';
import {AiOutlineStar} from 'react-icons/ai';
const Navbar = (props)=>{

    return (
    <div className="sidenav">
        <div className="sidenav-div" style={{background:"#34a4eb",borderRadius:"6px"}}><img src={inbox}></img></div>
        <div className="sidenav-div"><img src={inbox}></img></div>
        <div className="sidenav-div"><AiOutlineStar color="white" size="2.6em"></AiOutlineStar> </div>
        <div style={{position:"relative",top:"420px",padding:"30px"}}><img src={Image}></img> </div>
      </div> 
    )
}

export default Navbar;