import './App.css';
import Navbar from './components/navbar';
import Image from './components/Image.png';
import Inbox from './components/inbox';
import Searchbar from './components/searchbar';
import Picker from './components/picker';
import Inboxtitle from './components/inboxtitle';
import Inboxheader from './components/inboxheader';
import Messagedetail from './components/messagedetail';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Inbox></Inbox>


   <div className="main-nav">
     <Searchbar></Searchbar>
     <Picker></Picker>
     <Inboxtitle title="Last CHANCE to get Startup Framework -50% OFF"></Inboxtitle>
     <Inboxheader timestamp="24-06-05 12:04"> </Inboxheader>
  

     <div className="detailbox"> 
       <img className="imgbox" src={Image} style={{position:"relative",top:"170px",left:"560px",margin:"auto"}}></img>
     </div>
   <Messagedetail></Messagedetail>  
</div>

</div>
  );
}

export default App;
