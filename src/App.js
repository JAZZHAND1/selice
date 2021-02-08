import logo from './logo.svg';
import './App.css';
import {input} from "react-bootstrap/InputGroup";
import {Card} from 'react-bootstrap';
import Navbar from './components/navbar';
import Iconnavbar from './components/iconnav';
import Inboxcard from  './components/inboxcard';
import inbox from './components/inbox.png';
import Image from './components/Image.png';
import {AiOutlineStar} from 'react-icons/ai';
import {HiInformationCircle} from 'react-icons/hi';
import {FaRegEnvelope} from 'react-icons/fa';
import Inbox from './components/inbox';
import {FaSearch} from 'react-icons/fa';


function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Inbox></Inbox>


   <div className="main-nav">
    <div>
      <FaSearch className="searchicon"></FaSearch>
      <input size="1.5em" className="inp">
      </input>
   </div>
   <div className="picker">Move to: 
     <select style={{borderRadius:"4px",height:"30px",width:"70px",position:"relative",left:"20px",backgroundColor:"#a4a8b0",color:"#f7faff"}}>
       <option >Trash:</option>
    </select>
   </div>

   <h2 style={{paddingLeft:"10px",position:"relative",top:"-10px"}}>Last CHANCE to get Startup Framework -50% OFF  </h2>
   <hr style={{position:"absolute",top:"80px",width:"100%",border:"1px solid black"}}></hr>
  
  <AiOutlineStar style={{paddingLeft:"10px",float:"left"}} color="black" size="1.5em"></AiOutlineStar> Designmondo to me 
  <div className="topinfo">24-06-05 12:04 
  <HiInformationCircle size="2em" style={{position:"relative",top:"10px"}}></HiInformationCircle>
  <FaRegEnvelope size="2em" style={{position:"relative",top:"10px"}}></FaRegEnvelope>
  </div>



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
