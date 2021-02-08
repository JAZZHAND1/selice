import react from 'react';
import {FaSearch} from 'react-icons/fa';
const Searchbar =()=>{

return( <div>
        <FaSearch className="searchicon"></FaSearch>
        <input size="1.5em" className="inp">
        </input>
     </div>)
}

export default Searchbar;