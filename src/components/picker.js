import react from 'react'

const Picker = ()=>{
  return(   
  <div className="picker">Move to: 
    <select style={{borderRadius:"4px",height:"30px",width:"70px",position:"relative",left:"20px",backgroundColor:"#a4a8b0",color:"#f7faff"}}>
        <option >Trash:</option>
    </select>
  </div>
)

}


export default Picker;