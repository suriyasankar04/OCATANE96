import React from 'react';
import "./gallery.css";
import { Link } from 'react-router-dom';
export default function Gallery() {
  return (
<div >
<div className='wbox'></div>
<img src={require("D:/react/myproject/src/octane96/logog.png")} class = "logo" alt="logo"/>
<img src={require("D:/react/myproject/src/octane96/logogno.png")} class = "fros" alt="logo"/>
<div class="index"></div>
<div class="home">
<Link to="/home" style={{top:"40px",left:"870px"}}>HOME</Link>
<Link to ="/oct" style={{top:"40px" ,left:"980px"}} >INVENTORY</Link>
<Link to ="/gallery" style={{top:"40px",left:"1135px"}} >GALLERY</Link>
<Link to="/aboutus" style={{top:"40px" ,left:"1270px"}} >ABOUTUS</Link>
<Link to="/backend" style={{top:"40px",left:"1400px"}}>LOGIN</Link>
</div>
<div class="head">GALLERY</div>
        <div class="head1">
            <Link to="/Home">HOME</Link>
        </div>
        <div class="head2">
          <a>| GALLERY</a>
        </div>
  <h2 className='tit2'>Our Car Collections</h2>
  
  <div>
         <img className='img1' src="https://apollo-singapore.akamaized.net/v1/files/m6bfjjpq0tz71-IN/image;s=780x0;q=60" alt="React Logo" />
         <img className='img2' src="https://apollo-singapore.akamaized.net/v1/files/tisvxi6f5ylg-IN/image;s=780x0;q=60" alt="React Logo" />
         <img className='img3' src="https://images.news18.com/ibnlive/uploads/2019/09/Contessa-Modified.png?impolicy=website&width=510&height=356" alt="master the blaster" />
         <img className='img4' src="https://apollo-singapore.akamaized.net/v1/files/8vskb9iagwy03-IN/image;s=1080x1080" alt="React Logo" />
         <img className='img5' src="https://tamil.behindtalkies.com/wp-content/uploads/sites/4/2018/01/Karakattakaran-car.jpg" alt="Soppana sundhari😍" />
         <img className='img6' src="http://www.boomcars.in/images/singler-car/427_04.jpg" alt="React Logo" />
         <img className='img7' src="http://www.boomcars.in/images/singler-car/425_05.jpg" alt="React Logo" />
         <img className='img8' src="http://www.link4uglobal.in/uploads/cars/ea6b8522403dea4de5e682127043f5d5.jpg" alt="React Logo" />
         <img className='img9' src="http://www.boomcars.in/images/singler-car/388_img3.jpg" alt="React Logo" />
         <img src={require("D:/react/myproject/src/octane96/front.png")} class = "top1" alt="logo"/>
         {/* <img className='img11' src={require("D:/react/myproject/src/octane96/jsx/Screenshot_20221206_072621.png")} alt="React Logo" /> */}
         {/* <img className='img12' src={require("D:/react/myproject/src/octane96/jsx/ocatne_gold_whirte-removebg-preview.png")} alt="react logo"/> */}
         <img className='img13' src="https://apollo-singapore.akamaized.net/v1/files/9l7lpprai4i5-IN/image;s=780x0;q=60" alt="React Logo" />
         <img className='img14' src="https://imgd.aeplcdn.com/1024x768/cw/ucp/stockApiImg/6HCWWEF_a97ece561fcb48a2b1545b63e28b3a96_1_26051885.jpg?q=75" alt="React Logo" />
         <img className='img15' src="https://imgd.aeplcdn.com/1024x768/cw/ucp/stockApiImg/N76Z1Q8_1131fbb3db444622ac8898418feb612b_1_26042170.jpg?q=75" alt="React Logo" />
         <img className='img16' src="https://imgd.aeplcdn.com/1024x768/cw/ucp/stockApiImg/RJ9DEU5_c8393789788542a0a5cf2f001303256f_1_26048537.jpg?q=75" alt="React Logo" />
         <img className='img17' src="https://imgd-ct.aeplcdn.com/1024x768/cw/ucp/stockApiImg/AB80WVU_83e374d7abbc4d459ea2249059b84353_1_26150569.jpg?q=75" alt="React Logo" />
         <img className='img18' src="https://imgd.aeplcdn.com/1024x768/cw/ucp/stockApiImg/Y93YBNH_de265104ea8d4008b888faf3729d5ce8_1_26150753.jpg?q=75" alt="React Logo" />
         <div class="wbxhg">
    <div className='loslih'>
       <img src={require("./cop1.png")} alt="img"/>
      <img src={require("./cop2.png")}  alt="img"/>
      <img src={require("./cop3.png")}  alt="img"/>
      <img src={require("./cop4.png")}  alt="img"/>
      </div>
    </div>
      </div>
  </div>


    
  )
}