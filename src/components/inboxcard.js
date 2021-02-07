import react from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import Image from './Image.png';
const Inboxcontents = (props)=>{

    return ( 
   <div className="card"> 
        <img className="imgbox" src={Image}></img>
        <div className="header4"> 
          <h2>{props.title}</h2> 
          <h5 style={{position:'relative',left:"30px",top:"-21px",width:"100%"}}>{props.subject}</h5> 
          <h3 style={{position:'relative',top:"-88px",right:'-220px'}}> {props.time} </h3>
        </div>

      
         <br></br>
         <br></br>
    <AiOutlineStar  color="black" size="1.5em" style={{float:"left",justifyContent:"space-between"}}></AiOutlineStar> {props.description}
   <hr color="black" style={{position:"absolute",width:"120%",left:"-20px"}}></hr>
   <br></br>
  </div>
 )
}

export default Inboxcontents;