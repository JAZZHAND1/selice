import react from 'react';

const Inboxtitle = (props) =>{
  return (  
   <div>
        <h2 style={{paddingLeft:"10px",position:"relative",top:"-10px"}}>{props.title}</h2>
        <hr style={{position:"absolute",top:"80px",width:"100%",border:"1px solid black"}}></hr>
   </div> 
   )
}

export default Inboxtitle;