import react from 'react';
import {TiPencil} from 'react-icons/ti';
import {AiOutlineFolderOpen} from 'react-icons/ai';
import  {ImBin} from 'react-icons/im';
import {RiLogoutBoxFill} from 'react-icons/ri';
const Iconnavbar = (props)=>{
  return ( 
  <div className="icon-bar" >
      <TiPencil size="2em" ></TiPencil>   
      <RiLogoutBoxFill size="2em" ></RiLogoutBoxFill> 
      <AiOutlineFolderOpen size="2em"> </AiOutlineFolderOpen> 
      <ImBin size="2em"></ImBin>
  </div>
   )
}

export default Iconnavbar;