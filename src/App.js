import logo from './logo.svg';
import './App.css';
import {input} from "react-bootstrap/InputGroup";
import {Card} from 'react-bootstrap';
import {navbar} from './components/navbar';
import inbox from './components/inbox.png';
import Image from './components/Image.png';
import {AiOutlineStar} from 'react-icons/ai';
import {TiPencil} from 'react-icons/ti';
import {FaSearch} from 'react-icons/fa';

import {AiOutlineFolderOpen} from 'react-icons/ai';
import  {ImBin} from 'react-icons/im';
import {RiLogoutBoxFill} from 'react-icons/ri';
function App() {
  return (
    <div>
    <div className="sidenav">
      <a><img  src={inbox}></img></a>
      <a><img src={inbox}></img></a>
      <a><AiOutlineStar color="white" size="1.5em"></AiOutlineStar> </a>
    </div> 
  <div className="inboxnav">
  <div className="icon-bar">
     <TiPencil size="2em" ></TiPencil>   
     <RiLogoutBoxFill size="2em" ></RiLogoutBoxFill> 
     <AiOutlineFolderOpen size="2em"> </AiOutlineFolderOpen> 
     <ImBin size="2em"></ImBin>
  </div>

  <div className="card"> 
     <div className="container"> 
       <img className="imgbox" src={Image}></img>
       <h2 className="header2">Henry Fox 15:32</h2> 
       <h4 className="header4">Re: Subject</h4> 
       <br></br>
       <AiOutlineStar  color="black" size="1.5em"></AiOutlineStar> You know about the last time I was going
     </div>
     <hr color="black"></hr>
  </div>
   
  <div className="card2"> 
     <div className="container">
     <img className="imgbox" src={Image}></img>
       <h2 className="header2"> Designmondo  15:32</h2> 
       <h4 className="header4-2">Last chance </h4>  
       <br></br>
       <AiOutlineStar  color="black" size="1.5em"></AiOutlineStar> Exclusive Deal view in the browser.
     </div>
     <hr color="black"></hr>
  </div>
  <div className="card3"> 
     <div className="container">
     <img className="imgbox" src={Image}></img>
       <h2 className="header2">Hey Designer  yesterday</h2> 
       <h4 className="header4-3">Daily Newsletter</h4>  
       <AiOutlineStar  color="black" size="1.5em"></AiOutlineStar> is this email not displaying correctly?
     </div>
     <hr color="black"></hr>
  </div>

</div>
  
  <div className="main-nav">
   <div>
   <FaSearch className="searchicon"></FaSearch>
    <input size="1.5em" className="inp">
   </input>
   </div>
   <h2>Last CHANCE to get Startup Framework -50% OFF</h2>
  <hr  style={{position:"absolute",top:"50px",width:"100%",border:"1px solid black"}}></hr>
  <AiOutlineStar  color="black" size="1.5em"></AiOutlineStar> Designmondo to me 
  <br></br>
  <img className="imgbox" src={Image} height="300" width="800"></img>
  
  </div>
    
   
  </div>
  );
}

export default App;
