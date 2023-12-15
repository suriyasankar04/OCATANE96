import React from "react";
import './mercedes.css';
import log from'./neww logo.png';
import rt from'D:/react/myproject/src/octane96/front.png';
import mo from'./service.jpg'; 
import as from'./fuel.png';
import alt from'./km.png';
import al from'./year.png';
import ti from'./tick.jpeg';
import df from'./logog.png';
import { Link } from "react-router-dom";
import {Mercedesslider} from "./mercedesslider";
import ImageSliderj from "./mercedesimage";

export default function Mercedes(){
    return(
  <div>
   <div className='wboxb'></div>
     {/* <img src={require("D:/react/myproject/src/octane96/logog.png")} class = "logo" alt="logo"/>  */}
    <div class="index"></div>
    <div class="homeb">
<Link to="/home" style={{top:"40px",left:"570px"}}>HOME</Link>
<Link to="/oct" style={{top:"40px" ,left:"675px"}} >INVENTORY</Link>
<Link to="/gallery" style={{top:"40px",left:"835px"}} >GALLERY</Link>
<Link to="/aboutus" style={{top:"40px" ,left:"970px"}} >ABOUTUS</Link>
<Link to="/backend" style={{top:"40px",left:"1100px"}}>LOGIN</Link>
 </div>
      <div className="kk">
       <img src={rt} alt="background"></img></div> 
      <div className="txt">
        CAR DETAILS
      </div>
      <ImageSliderj slides={Mercedesslider}/>
        <div className="nam">MERCEDES-BENZ C CLASS C220d Progressive</div>
        <div className="lk">
          _____________________________
          <br></br>
          _____________________________
          </div>
        <div className="pa">
        </div>
        <div class="con">
      ______________________________________
        <br></br>
        <h3>
 Brand:
<br></br>
<br></br>
Model:
<br></br>
<br></br>
Variant:
<br></br>
<br></br>
Drive Train:
<br></br>
<br></br>
Body Style:
<br></br>
<br></br>
Exterior Color:
<br></br>
<br></br>
InteriorColor:
<br></br>
<br></br>
Condition:
<br></br>
<br></br>
Transimission:
<br></br>
<br></br>
Engine:
<br></br>
<br></br>
No.ofgears:
<br></br>
<br></br>
Location:
<br></br>
<br></br>
Fuel Type:
<br></br>
<br></br>
Owners:
        </h3>
 </div>
 <div className="ans">
  <p>
  MERCEDES-BENZ
    <br></br>
    <br></br>
    C-CLASS
    <br></br>
    <br></br>
    C220d Progressive
    <br></br>
    <br></br>
    RWD
    <br></br>
    <br></br>
    SEDAN
    <br></br>
    <br></br>
    SILVER
    <br></br>
    <br></br>
    WHITE
    <br></br>
    <br></br>
    PRISTINE
    <br></br>
    <br></br>
    AUTOMATIC
    <br></br>
    <br></br>
    1950CC
    <br></br>
    <br></br>
    9
    <br></br>
    <br></br>
    COIMBATORE
    <br></br>
    <br></br>
    Diesel
    <br></br>
    <br></br>
    2
  </p>
  </div>
        <div className="rs">
        </div>
        <div className="kj">
         Rounded Gear Knob
        </div>
        <div className="des">
          <h3>Description</h3>
          <br></br>                        
          • MERCEDES
          <br></br>
          <br></br>
          • C-CLASS
          <br></br>
          <br></br>
          • 360 Degree Camera
          <br></br>
          <br></br>
          • Automatic(CVT)
          <br></br>
          <br></br>
          • Wodden Finished Interior
         <br></br>
         <br></br>
          • Diesel
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          • ₹39,00,000/-
        </div>
        <div className="note">
          <br></br>
          <br></br>
          <p>Note: Octane 96 does not charge any commission on the cars we sell. </p>
          <br></br>
          Step into Octane96 or Call us at 📞9942137316, we will indulge you into world class ambience and an Elite lineup of cars. Our team will ensure you make the perfect choice in choosing your ride and deliver your dream car in fine magnificence.
          <br></br>
          <br></br>
          <br></br>
          Octane96 Pre-Owned Luxury car,          
          <br></br>
          <br></br>
          opp to BrookFields R.S Puram South Coimbatore-641002
          <br></br>          
          <br></br>          
          <br></br>          
          <br></br>          
          <br></br>          
          <br></br>
          www.octane96.com  
          <br></br>        
          <br></br>        
          <br></br>
          74181 66666  |  74182 66666  | 74183 66666  | 74187 66666        
        </div>
        <div className="det">
          <h2>DETAILS</h2>
        </div>
        <div className="lo">
        <img src={require("D:/react/myproject/src/octane96/logogno.png")}  alt="logo"/>
        </div>
        <div className="inform">
        </div>
        <div className="what">
        </div>
        <div className="below">
          30000 Kms
        </div>
        <div className="yea">
          2018
        </div>
        <div className="fue">
          Diesel
        </div>
        <div className="ca">
          <a href="tel: +91 9942137316">
        <button>CALL</button>
        </a>
        </div>
        <div className="wa">
          <a href="https://wa.me/9942137316">
          <button>WHATS APP</button>
          </a>
        </div>
        <div className="cro">
        <img src={mo} alt="logo"></img>
        </div>
        <div className="bn">
        </div>
        <div className="typ">
          Get To Test Your Dream Car From Octane96 
        </div>
        <div className="im1">
        <img src={as} alt="fuel"></img>
        </div>
        <div className="im2">
        <img src={alt} alt="fuel"></img>
        </div>
        <div className="im3">
        <img src={al} alt="fuel"></img>
        </div>
        <div className="tick">
          <img src={ti} alt="tick"></img>
        </div>
        <div className="now">
        <a href="tel: +91 9942137316">
        <button>CALL NOW!!</button>
        </a>
        </div>
        <div className="uk">
        <marquee>Welcome to Octane 96!!</marquee>
        </div>
        <div className="mag">
        <img src={df} alt="fuel"></img>
        </div>
        <div class="conth"></div>
    <div class="coh"></div>
    <div class="cnh">contact us</div>
    <div className='cn1h'>Visit octane96 and we would commit to giving you best in class service with personalised attention and assistance to your requirements or contact us and we will make the delivery of your car a memorable one.</div>
    <div className='cn2h'>
      <img src={require("D:/react/myproject/src/octane96/phone3.png")} alt="pn"></img>
    </div>
    <div className='cn3h'>
     Phone no
     +919942137316
    </div>
    <div className='cn4h'>
      <img src={require("D:/react/myproject/src/octane96/mail.jpg")} alt="mail"></img>
    </div>
    <div className='cn5h'>
      Mail Address
      octane96@gmail.com
    </div>
    <div className='cn6h'>
      Our info
    </div>
    <div className='cn7h'>
    <a href="/Home">HOME</a>
    <a href="/oct"style={{top: "2320px"}}>INVENTORY</a>
    <a href="/gallery" style={{top: "2350px"}}>GALLERY</a>
    <a herf="/aboutus" style={{top: "2380px",width:"90px"}}>ABOUT US</a>
    </div>
    <div className='ch'>Follow us</div>
    <div className='cn8h'>
      <img src={require("D:/react/myproject/src/octane96/fb.png")} alt="fb"></img>
      <img src={require("D:/react/myproject/src/octane96/Instagram.png")} alt="insta" style={{left: "1040px"}}></img>
      <img src={require("D:/react/myproject/src/octane96/youtubepng.png")} alt="youtube" style={{left:"1080px"}}></img>
    </div>
    <div className="add">
      Address:
      <br></br>
      opp to BrookFields R.S Puram South Coimbatore-641002
    </div>
    </div>
  )
}
