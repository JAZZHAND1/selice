import react from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import Image from './Image.png';
const Inboxcard = (props)=>{

    return ( 
   <div className="card"> 
        <img className="imgbox" src={Image}></img>
        <div className="header4"> 
          <h2>{props.title}</h2> 
          <h5 style={{position:'relative',left:"30px",top:"-21px",width:"100%"}}>{props.subject}</h5> 
          <h3 style={{position:'relative',top:"-88px",right:'-220px'}}> {props.time} </h3>
        </div>

    <AiOutlineStar  color="black" size="1.5em" style={{float:"left",justifyContent:"space-between",position:"relative",top:"-80px",left:"-2px"}}></AiOutlineStar>
    <h5 style={{position:"relative",top:"-80px",left:"12px"}} >{props.description} </h5>
     
   <hr color="black" style={{position:"relative",width:"120%",left:"-20px",top:"-50px"}}></hr>
  </div>
 )
}

export default Inboxcard;