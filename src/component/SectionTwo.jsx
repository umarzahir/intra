import * as React from 'react';
import About from "../assets/aaa.JPG";


const SectionTwo = () => {
  return (
    <div id="sec2" style={{ marginLeft: "8%", marginRight: "8%" }}>
      <div className='about-us-con' style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <div className='about-us'>
          <p className='sec-head' style={{ marginBottom: "20px", }}> ABOUT US </p>
          <p className='innvotive-text' style={{ marginTop: "5px", width: "100%" }}>Driving Tomorrow's Technology, Today</p>
          <div style={{ width: "100px", borderBottom: '2px solid #15ae66', }}></div>
          <div style={{ width: "200px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
          </div>
        </div>
        <div className='about-us' style={{ paddingLeft: "30px", color: "gray", lineHeight: "24px", display: "flex", flexDirection: "column" }}>
          <p className='vis'>
            INTRA Defense Technologies is a SAUDI company, leaing in development and designing and manufacturing Autonomous Sustems and Advance Technologies, We provide advanced technological solutions that cater to diverse sectors.
          </p>
          <p className='vis'>
            With a team of highly skilled experts, Our Innovative solutions are built to cater the needs of various clients, providing them a competitive edge in theri respective industries. we prioritize quarlity,
          </p>
        </div>
      </div>

      <div style={{ maxHeight: "300px", width: "100%" }}>
        <img src={About} height={"300px"} width={"100%"} style={{ objectFit: "cover" }} />
      </div>
      <div id="sec" className='about-us-con' style={{ paddingTop: "0px", paddingBottom: "40px" }}>
        <div className='misson-1' style={{ paddingTop: "60px", paddingBottom: "60px", paddingRight: "20px" }}>
          <p className='sec-head' style={{ marginBottom: "30px" }}> ABOUT US </p>
          <p className='innvotive-text' style={{ marginTop: "5px", }}>Innovating the future of autonoums technologies</p>
          <div style={{ width: "90px", borderBottom: '2px solid #15ae66', paddingTop: "20px" }}></div>
          <div style={{ width: "140px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
          </div>
        </div>
        <div className='misson-2' style={{ backgroundColor: "#263770", paddingTop: "60px", paddingBottom: "60px", paddingLeft: "20px", position: "relative" }}>
          <h4 className='card-head' style={{ color: "white", marginTop: "25px" }}> Vision </h4>
          <p className='vis' style={{ color: "white", marginTop: "0px", maxWidth: "350px" }}>To revolutionize the way the world operates through the powrs of autonoums technologies.</p>
          <div className='strokemeno' style={{ position: "absolute", top: -100, opacity: "0.1", fontFamily: "AR", right: 0 }}>
            01
          </div>
        </div>
        <div className='misson-3' style={{ color: "gray", background: "white", paddingTop: "60px", paddingBottom: "60px", position: "relative", paddingLeft: "20px", display: "flex", flexDirection: "column" }}>
          <h4 className='card-head' style={{ color: "#03254c" }}>Mission</h4>
          <p className='vis' style={{ marginTop: "3px" }}>
            To Deliver a greatest value to our customers, partners, and stakeholders, while maintaining world-class standards of proffessionalism, integrity, and social responsibility.
          </p>
          <div className='strokemeno' style={{ position: "absolute", top: -100, opacity: "0.1", fontFamily: "AR", right: 0 }}>
            02
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo