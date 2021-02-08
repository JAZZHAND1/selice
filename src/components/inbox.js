import react from 'react';
import Inboxcard from './inboxcard';
import Iconnavbar from './iconnav';
const Inbox = ()=>{

    return ( 
    <div className="inboxnav">
        <Iconnavbar></Iconnavbar>
        <div className="container">
            <Inboxcard title="Henry Fox" subject="Re: Subject" description="You know about the last time I was going" time="15:23" ></Inboxcard>
            <Inboxcard title="Designmo" subject="Last CHANCE to get Startup Fram" description="Exclusive Deal view in the browser." time="12:04" ></Inboxcard>
            <Inboxcard title="Hey Designer" subject="Daily Newsletter" description="is this email not displaying correctly?" time="yesterday" ></Inboxcard>
        </div>
  </div>
  )


}

export default Inbox;
