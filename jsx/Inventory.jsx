import React from 'react';
import './inventory.css';
import c1 from'D:/react/myproject/src/octane96/c1.png'
import c2 from'D:/react/myproject/src/octane96/c2.png'
import c3 from'D:/react/myproject/src/octane96/c3.png'
import c4 from'D:/react/myproject/src/octane96/c4.png'
import { Link } from 'react-router-dom'
export default function Oct() {
  return (
    <div>
  <div className='wboxb'></div>    
<img src={require("D:/react/myproject/src/octane96/logog.png")} class = "logo" alt="logo"/>
<div class="index"></div>
<div class="home">
<Link to='/home' style={{top:"40px",left:"870px"}}>HOME</Link>
<Link to ="/oct" style={{top:"40px" ,left:"980px"}} >INVENTORY</Link>
<Link to="/gallery" style={{top:"40px",left:"1135px"}} >GALLERY</Link>
<Link to="/aboutus" style={{top:"40px" ,left:"1270px"}} >ABOUTUS</Link>
<Link to="/backend" style={{top:"40px",left:"1400px"}}>LOGIN</Link>
</div>
    
    <img src={require("D:/react/myproject/src/octane96/front.png")} class = "top1" alt="logo"/>
  
        <div class="head">INVENTORY</div>
        <div class="head1">
            <Link to="/Home">HOME</Link>
        </div>
        <div class="head2">
          <a>| INVENTORY</a>
        </div>
        <div class="search">AVAILABLE CARS</div>
          <div className='conin1'>
          <Link to="/bmw">
            <img src={"https://apollo-singapore.akamaized.net/v1/files/hywy22yq1xsb2-IN/image"} alt="loading..." className='c1'></img> 
            </Link> 
          </div>
          <div className='conin2'>
            <Link to='/jagu'>
            <img src={"https://imgd.aeplcdn.com/1024x768/cw/ucp/stockApiImg/I6W0H7U_5b2b33f6a75a430285ab14b9abf80f59_1_26533594.jpg?q=75"} alt="loading..." className='c2'></img> 
            </Link>
          </div>
          <div className='conin3'>
            <Link to='/lexus'>
            <img src={"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Reviews/Lexus-es-static.jpg&c=0"} alt="loading..." className='c3'></img> 
            </Link>
          </div>
          <div className='conin4'>
            <Link to='/mercedes'>
            <img src={"http://www.sagmart.com/uploads/2018/09/24/product_1/mercedes-benz-c-class-progressive-c-220d.jpg"} alt="loading..." className='c4'></img> 
            </Link>
          </div>
          <div className='conin5'>
            <Link to='/bmw3'>
            <img src={("https://cdni.autocarindia.com/ExtraImages/20210114120710_BMW_320Ld_tracking.jpg")} alt="loading..." className='c4'></img> 
            </Link>
          </div>
          <div className='conin6'>
            <Link to='/mini'>
            <img src={("https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Reviews/20210702055716_Mini-Cooper-JCW-front-static-1.jpg&c=0")} alt="loading..." className='c4'></img> 
            </Link>
          </div>
          <div className='conin7'>
            <Link to='/volvo'>
            <img src={("https://carsales.pxcrush.net/carsales//cars/dealer/3mg1dlvrvnji2sjwr7p21ozw0.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=720,480")} alt="loading..." className='c4'></img> 
            </Link>
          </div>
          <div className='ctxt1'>
            <Link to='/BMW'style={{ left:"110px",top: "940px"}}>BMW 3 SERIES 320D</Link>
          </div>
          <div className='ctxt1'>
            <Link to='/jagu'style={{left:"575px",top:"940px"}}>JAGUAR XJ <br></br>L 3.0 PORTFOLIO</Link>
          </div>
          <div className='ctxt1'>
            <Link to='/lexus'style={{left:"1050px",top:"940px"}}>LEXUS ES300H<br></br>LUXURY LINE</Link>
          </div>
          <div className='ctxt1'>
            <Link to='/mercedes'style={{left:"100px",top:"1470px"}}>MERCEDES-BENZ C<br></br> CLASS C220d Progressive</Link>
          </div>
          <div className='ctxt1'>
            <Link to='/bmw3'style={{left:"570px",top:"1470px"}}>BMW 320 LD</Link>
          </div>
          <div className='ctxt1'>
            <Link to='/mini'style={{left:"1050px",top:"1470px"}}>MINI(John Cooper Works)</Link>
          </div>
          <div className='ctxt1'>
            <Link to='/volvo'style={{left:"100px",top:"1990px"}}>VOLVO XC60<br></br> D5 Inscription</Link>
          </div>
            
    </div>
  )
}
