import react from 'react'
import inbox from './inbox.png';
import {AiOutlineStar} from 'react-icons/ai';
const Navbar = (props)=>{

    return (
    <div className="sidenav">
        <a><img  src={inbox}></img></a>
        <a><img src={inbox}></img></a>
        <a><AiOutlineStar color="white" size="1.5em"></AiOutlineStar> </a>
      </div> 
    )
}

export default Navbar;