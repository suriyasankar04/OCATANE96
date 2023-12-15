import React from 'react'
import "./sell.css";
import { ImCross } from 'react-icons/im'
import { Link } from 'react-router-dom'
export default function Sell() {
  return (
    <div>
<div>
<img src={require("D:/react/myproject/src/octane96/wc.png")} className="sellimg" alt="logo"/>
</div>
<div className='tt'>
    YOUR DETAILS HAVE BEEN SAVED IN THE SERVER SUCCESSFULLY
</div>
<div className='cros'>
    <Link to="/home">

<ImCross />
    </Link>
</div>
    </div>
  )
}
