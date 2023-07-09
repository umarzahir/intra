import * as React from 'react';
import About from "../assets/aaa.JPG";


const SectionTwo = () => {
    return(
        <div id="sec2" style={{ marginLeft: "8%", marginRight: "8%" }}>
        <div className='about-us-con' style={{ paddingTop: "40px", paddingBottom: "40px" }}>
          <div className='about-us'>
           <p style={{ color: "#15ae66", marginBottom: "2px", fontSize:"16px", fontWeight: 'bold' }}> ABOUT US </p>
           <p style={{ color: "rgb(30 60 95)", marginTop: "5px", fontSize:"24px", fontWeight: 'bold' }}>Driving Tomorrow's Technology, Today</p>
            <div style={{ width: "100px", borderBottom: '2px solid #15ae66', }}></div>
            <div style={{ width: "200px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
            </div>
          </div>
          <div className='about-us' style={{color: "gray", lineHeight: "24px", display: "flex", flexDirection: "column" }}>
          <p>
            INTRA Defense Technologies is a SAUDI company, leaing in development and designing and manufacturing Autonomous Sustems and Advance Technologies, We provide advanced technological solutions that cater to diverse sectors.
              </p>
              <p>
                With a team of highly skilled experts, Our Innovative solutions are built to cater the needs of various clients, providing them a competitive edge in theri respective industries. we prioritize quarlity,
              </p>
          </div>
        </div>

        <div style={{ maxHeight: "300px", width: "100%"}}>
          <img src={About} height={"300px"} width={"100%"}  style={{ objectFit: "cover" }} />
        </div>
        <div id="sec" className='about-us-con' style={{ paddingTop: "0px", paddingBottom: "40px" }}>
          <div className='misson-1' style={{ paddingTop: "60px", paddingBottom: "60px", paddingRight: "20px"   }}>
           <p style={{ color: "#15ae66", marginBottom: "2px", fontSize:"16px", fontWeight: 'bold' }}> ABOUT US </p>
           <p style={{ color: "#03254c", marginTop: "5px", fontSize:"24px", fontWeight: 'bold', maxWidth: "200px",lineHeight: "32px" }}>Innovating the future of autonoums technologies</p>
            <div style={{ width: "90px", borderBottom: '2px solid #15ae66', }}></div>
            <div style={{ width: "140px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
            </div>
          </div>
          <div className='misson-2' style={{ background: "rgb(3, 37, 76,0.9)", paddingTop: "60px", paddingBottom: "60px",paddingLeft: "20px"  }}>
           <p style={{ color: "white", marginTop: "25px", fontSize:"18px", fontWeight: 'bold' }}> VISION </p>
           <p style={{ color: "white", marginTop: "0px", fontSize:"14px", marginTop: "30px", lineHeight:"24px" }}>To revolutionize the way the world operates through the powrs of autonoums technologies.</p>
          </div>
          <div className='misson-3' style={{color: "gray", background: "white",  paddingTop: "60px", paddingBottom: "60px",paddingLeft: "20px", display: "flex", flexDirection: "column" }}>
          <p style={{ color: "#03254c", fontSize:"22px", fontWeight: "600" }}>Mission</p>
              <p style={{ marginTop: "3px", fontWeight: "500", fontSize: "14px",  lineHeight:"24px" }}>
               To Deliver a greatest value to our customers, partners, and stakeholders, while maintaining world-class standards of proffessionalism, integrity, and social responsibility.
              </p>
          </div>
        </div>
    </div>
    )
}

export default SectionTwo