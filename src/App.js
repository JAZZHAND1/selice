import logo from './logo.svg';
import './App.css';
import {input} from "react-bootstrap/InputGroup";
import {Card} from 'react-bootstrap';
import Navbar from './components/navbar';
import Iconnavbar from './components/iconnav';
import Inboxcontents from  './components/inboxcard';
import inbox from './components/inbox.png';
import Image from './components/Image.png';
import {AiOutlineStar} from 'react-icons/ai';

import {FaSearch} from 'react-icons/fa';


function App() {
  return (
    <div>
    <Navbar></Navbar>
  <div className="inboxnav">
      <Iconnavbar></Iconnavbar>
      <div className="container">
      <Inboxcontents title="Henry Fox" subject="Re: Subject" description="You know about the last time I was going" time="15:23" ></Inboxcontents>
      <Inboxcontents title="Designmo " subject="Last CHANCE to get Startup Fram" description="Exclusive Deal view in the browser." time="12:04" ></Inboxcontents>
      <Inboxcontents title="Hey Designer" subject="Daily Newsletter" description="is this email not displaying correctly?" time="yesterday" ></Inboxcontents>
    </div>
   

</div>
  
  <div className="main-nav">
   <div>
   <FaSearch className="searchicon"></FaSearch>
    <input size="1.5em" className="inp">
   </input>
   </div>
   <h2 style={{paddingLeft:"10px"}}>Last CHANCE to get Startup Framework -50% OFF</h2>
   <hr  style={{position:"absolute",top:"56px",width:"100%",border:"1px solid black"}}></hr>
  <AiOutlineStar style={{paddingLeft:"10px",float:"left"}} color="black" size="1.5em"></AiOutlineStar> Designmondo to me 
  <br></br>
  <div className="detailbox"> 
  <img className="imgbox" src={Image} style={{position:"relative",top:"170px",left:"560px",margin:"auto"}}></img>
 </div>

  <div className="detailbar">
   <h3> Designmodo </h3>
    <h3> Exclusive Deal</h3>
    <h3> View in the browser</h3>
  </div>
   <div className="text"> 
    <h2>LAST DAY:50% OFF Statup Framework </h2>
    <h3> We offer you a 50% discount on <u>Startup Design Framework</u> </h3>
    <h3>Startup Framework is a tool to help create website and is a nice</h3>
   </div>
  </div>

  </div>
  );
}

export default App;
