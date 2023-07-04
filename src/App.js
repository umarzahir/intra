import './App.css';
import Logo from "./assets/white_full.png"
import {HiMenuAlt1,HiArrowNarrowDown} from 'react-icons/hi'
import MyDrawer from './component/Drawer';
import AD from "./assets/Arrowup.svg"
import { useState } from 'react';
import SectionTwo from './component/SectionTwo';
import CM from "./assets/Chairman.jpeg"
import CEO from "./assets/CEO.jpeg"
import A from "./assets/3 User 1.svg"
import Prod1 from "./assets/product1.png"
import Prod2 from "./assets/product2.png"
import Prod3 from "./assets/product3.png"
import Prod4 from "./assets/product4.png"
import CLogo from "./assets/colored_full.png"
import j1 from "./assets/joinPic1.jpg"
import j2 from "./assets/joinPic2.png"
import j3 from "./assets/joinPic3.jpg"
import {BsArrowRight, BsSendFill} from "react-icons/bs"
import {GiOilPump,GiTeacher} from 'react-icons/gi'
import {GrPersonalComputer,GrLinkedinOption} from "react-icons/gr"
import {BiCheckShield,BiDoughnutChart,BiSolidPhone,BiLogoTwitter} from 'react-icons/bi'
import {TbSettingsBolt} from "react-icons/tb" 
import {GrSettingsOption,GrMapLocation} from "react-icons/gr"
import FormDialog from './component/form';
import {MdLocationOn} from 'react-icons/md'

const chairmanDetails = "Our Chairman is a visionary leader with a vast experience and knowledge in the field of Advance technologies. With a passion for innovation and an unwavering commitment to excellence, he has played a pivotal role in shaping our company's growth and success. Under his guidance, our company continues to lead in the development and manufacturing of advanced technological solutions."
const ceoDetails = "Our CEO brings a wealth of experience and expertise in leading and managing companies, He is committed to driving innovation and ensuring that our company's operations and services align with the highest standards of quality and efficiency. Under his leadership and direction."
const acticalDetails = "Built with the Vertical Take off and Landing (VTOL) technology,ASEF series was designed to be easily deployed, runwayindependent, with autonomous operations. Enabling the end userwith a true tactical advantage for missions that requiresagility"
const oilandGasDetails="UAVs revolutionize environmental and agricultural applications, optimizing data collection and informed decision-making. They monitor ecosystems, aid conservation, and enhance precision agriculture. With real-time data and aerial perspective, UAVs promote sustainability and boost agricultural productivity."

function App() {
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  return (
    <div>

      <div className='con'>
        <div  style={{ display: 'flex', width: "100%", height: "80px", alignItems: "center", justifyContent: "space-between", zIndex: 999 }}>
          <div style={{ marginLeft: "80px" }}>
            <img src={Logo} width={180}/>
          </div>
          <div style={{ marginRight: "30px", cursor: "pointer" }}onClick={() => setOpen(true)}>
          <HiMenuAlt1 fontSize={46} color='white' />
          </div>
        </div>
      <div className='image-container' >
          <div className='one'>
          </div>
          <div style={{ position: "absolute", top: "50%", left: "50px", width: "400px" }}>
            <p style={{  color: "white", fontSize: "36px", fontFamily: "HN", fontWeight: 600}}>"An Ambition as High as the Sky"</p>
          </div>

          <div style={{ position: "absolute", top: "90%", left: "50px" }}>
          <a href="#sec2">
            <HiArrowNarrowDown color='white' fontSize={42} />
          </a>
            {/* <img style={{transform: "rotate(180deg)", color: "white" }} src={AD} /> */}
          </div>

          <div style={{ position: "absolute", fontSize: "12px", top: "90%",  fontFamily: "HN", left: "80%", display: "flex" ,color: "white" , fontWeight: "600"}}>
          <p style={{ opacity: 0.5 }}>AR</p>
          <p style={{ marginLeft: "10px", }}>EN</p>
          </div>

      </div>

      <div className='image-container2 header' >
      <div className='two'></div>
      </div>
      <MyDrawer open={open}  onClose={() => setOpen(false)}/>
      
      </div>

    <SectionTwo />

    <div id="sec3" style={{ marginLeft: "8%", marginRight: "8%", }}>
      <div style={{  display: "flex", paddingTop: "40px", paddingBottom: "0px" }}>
            <div style={{ background: "",width: "30%", marginTop: "40px" }}>
              <p style={{ color: "#15ae66", marginBottom: "2px", fontSize:"16px", fontWeight: 'bold' }}> THE TEAM </p>
              <p style={{ color: "#03254c", marginTop: "5px", fontSize:"24px", fontWeight: 'bold' }}>Meet Our Leader</p>
                <div style={{ width: "100px", borderBottom: '2px solid #15ae66', }}></div>
                <div style={{ width: "200px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
                </div>
            </div>
            <div style={{ width: "70%"}}>
            <p className='strokeme'>
              Leaders
            </p>
            </div>
      </div>
    </div>

    <div id="sec3" style={{ marginLeft: "8%", display: "flex", justifyContent: 'space-between', marginRight: "8%",  }}>
      <Card image={CM} name='Salman Alshatri' desg="Chairman" hoverText={chairmanDetails} />
      <Card image={CEO} name='Dr. Hammad Alfaouzan' desg="CEO"  hoverText={ceoDetails} />
      <Card image={CM} name='Salman Alshatri' desg="Chairman" />
    </div>

    <div id="sec4" style={{ height: "700px", position: "relative", marginLeft: "8%", marginTop: "70px", marginBottom: "50px", display: "flex", justifyContent: 'space-between', marginRight: "8%",  }}>
      <div style={{ position: "absolute", top: "10px", left: "26%" }}>
        <IntraCard text={"Development Hour"} number={"500,000+"}  />
      </div>
      <div style={{ position: "absolute", top: "10px", left: "58%" }}>
        <IntraCard text={"Engineering Project"} number={"5+"}  />
      </div>
      <div style={{ position: "absolute", top: "160px", left: "5%" }}>
        <IntraCard text={"Founded In"} number={"2013"}  />
      </div>
      <div style={{ position: "absolute", top: "130px", right: "0%" }}>
        <IntraCard text={"Engineering Project"} number={"5+"}  />
      </div>

      <div style={{ position: "absolute", top: "350px", left: "13%" }}>
        <IntraCard text={"Founded In"} number={"+500000"}  />
      </div>
      <div style={{ position: "absolute", top: "300px", right: "5%" }}>
        <IntraCard text={"Founded In"} number={"+500000"}  />
      </div>
      <div style={{ position: "absolute", top: "440px", right: "33%" }}>
        <IntraCard text={"UAV Traning Hours"} number={"177+"}  />
      </div>

      <div style={{ position: "absolute", top: "230px", right: "42%" }}>
        <p> <span style={{ fontSize: "24px", color: "#15ae66", fontWeight: "600" }}>INTRA</span>
       <span style={{ color: "rgb(3, 37, 76)", fontWeight: "600" }}> In Nubmers </span>
        </p>
      </div>
    </div>

   <div id="sec5"  style={{ marginLeft: "8%"  }}>
   <div style={{ background: "",width: "30%", marginTop: "40px" }}>
              <p style={{ color: "#15ae66", marginBottom: "2px", fontSize:"14px", fontWeight: 'bold' }}> Products </p>
              <p style={{ color: "#03254c", marginTop: "5px", fontSize:"24px", fontWeight: 'bold' }}>Supporting Title here</p>
                <div style={{ width: "100px", borderBottom: '2px solid #15ae66', }}></div>
                <div style={{ width: "200px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
                </div>
            </div>
   <div className={"container"}>
      <div className={"scroll"}>
      <div style={{  marginTop: "20px", }}>
         <TacticalCard name='Tactical' image={Prod1} hoverText={acticalDetails} />
         </div>
         <div style={{  marginTop: "100px", }}>
         <TacticalCard name='Operational'  image={Prod2} hoverText={acticalDetails} />
         </div>
         <TacticalCard name="Persistent" image={Prod4} hoverText={acticalDetails} />
         <div style={{  marginTop: "100px", }}>
         <TacticalCard name="unknown" image={Prod3} hoverText={acticalDetails} />
         </div>
        
      </div>
    </div>

    <div style={{ background: "",width: "30%", marginTop: "70px", marginBottom: "30px" }}>
              <p style={{ color: "#15ae66", marginBottom: "2px", fontSize:"14px", fontWeight: 'bold' }}> Products </p>
              <p style={{ color: "#03254c", marginTop: "5px", fontSize:"24px", fontWeight: 'bold' }}>Supporting Title here</p>
                <div style={{ width: "100px", borderBottom: '2px solid #15ae66', }}></div>
                <div style={{ width: "200px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
                </div>
      </div>
      <div style={{ width: "100%", display:"flex" }}>
        <div style={{ width: "40%", padding: "20px" }}>
         <NewCard logo={<GiOilPump  color='#15ae66' fontSize={48}/>} name="Oil and Gas" desc={oilandGasDetails} />
         <div style={{ marginTop: "35px" }}>
         <NewCard logo={<BiCheckShield  color='#15ae66' fontSize={48}/>} name="Environment" desc={oilandGasDetails} />
         </div>
        </div>
        <div style={{ width: "60%", padding: "20px", marginTop: "100px" }}>
        <NewCard width={"500px"}  logo={<GiOilPump  color='#15ae66' fontSize={48}/>} name="Oil and Gas" desc={oilandGasDetails} />
         <div style={{ marginTop: "35px" }}>
         <NewCard  width={"500px"} logo={<BiCheckShield  color='#15ae66' fontSize={48}/>} name="Environment" desc={oilandGasDetails} />
         </div>
        </div>
      </div>


      <div style={{ background: "",width: "30%", marginTop: "70px", marginBottom: "30px" }}>
              <p style={{ color: "#15ae66", marginBottom: "2px", fontSize:"14px", fontWeight: 'bold' }}> Products </p>
              <p style={{ color: "#03254c", marginTop: "5px", fontSize:"24px", fontWeight: 'bold' }}>Supporting Title here</p>
                <div style={{ width: "100px", borderBottom: '2px solid #15ae66', }}></div>
                <div style={{ width: "200px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
                </div>
      </div>
<div style={{ display: "flex", width: "100%", height: "500px", justifyContent: "center", marginBottom: "20px", marginTop: "30px" }}>

      <div style={{ width: "450px", position: "absolute", display: "flex", justifyContent: "center", marginRight: "8%", alignItems: "center", height: "450px", flexDirection: "column", borderRadius: "50%", border: "3px solid #15ae66" }}>
        <p style={{ fontWeight: "600", color: "#03254c", fontSize: "32px", marginBottom: "0px" }}> UAS</p>
        <p style={{ fontWeight: "600", color: "#15ae66",  fontSize: "32px", marginTop: "0px" }}>360</p>

        <div style={{ width: "70px",  display: "flex", justifyContent: "center", alignItems: "center", height: "70px", zIndex: "999999",background: "lightgray", position: "absolute", top: "3%", left: "10%", borderRadius: "50%", border: "3px solid #15ae66" }}>
          <BiDoughnutChart fontSize={42} color="#03254c" />
        </div>
        <div style={{  position: "absolute", top: "20%", left: "12%",  }}>
          <p style={{ color: "#03254c", fontWeight: "600", fontSize: "22", }}>Enginerring</p>
        </div>
        <div style={{ width: "70px", display: "flex", justifyContent: "center", alignItems: "center",  height: "70px", zIndex: "999999",background: "lightgray", position: "absolute", top: "3%", right: "10%", borderRadius: "50%", border: "3px solid #15ae66" }}>
          <GrSettingsOption fontSize={42}  color= "#03254c"/>
        </div>

        <div style={{  position: "absolute", top: "20%", right: "12%",  }}>
          <p style={{ color: "#03254c", fontWeight: "600", fontSize: "22", }}>Maintaince</p>
        </div>

        <div style={{ width: "70px", display: "flex", justifyContent: "center", alignItems: "center",  height: "70px", zIndex: "999999",background: "lightgray", position: "absolute", top: "40%", right: "-9%", borderRadius: "50%", border: "3px solid #15ae66" }}>
          <GrPersonalComputer fontSize={42} />
        </div>

        <div style={{  position: "absolute", top: "53%", right: "-30%", width: "100px"  }}>
          <p style={{ color: "#03254c", fontWeight: "600", fontSize: "22", }}>Design & Development</p>
        </div>
        <div style={{ width: "70px", display: "flex", justifyContent: "center", alignItems: "center", height: "70px", zIndex: "999999",background: "lightgray", position: "absolute", top: "40%", left: "-9%", borderRadius: "50%", border: "3px solid #15ae66" }}>
          <TbSettingsBolt fontSize={42} />
        </div>

        <div style={{  position: "absolute", top: "53%", left: "-26%", width: "100px"  }}>
          <p style={{ color: "#03254c", fontWeight: "600", fontSize: "22", }}>Opearations</p>
        </div>

        <div style={{ width: "70px", display: "flex", justifyContent: "center", alignItems: "center",  height: "70px", zIndex: "999999",background: "lightgray", position: "absolute", bottom: "3%", left: "10%", borderRadius: "50%", border: "3px solid #15ae66" }}>
          <GiTeacher fontSize={42} />
        </div>
        <div style={{  position: "absolute", bottom: "-9%", left: "12%", width: "100px"  }}>
          <p style={{ color: "#03254c", fontWeight: "600", fontSize: "22", }}>Traning</p>
        </div>
        <div style={{ width: "70px", display: "flex", justifyContent: "center", alignItems: "center",  height: "70px", zIndex: "999999",background: "lightgray", position: "absolute", bottom: "3%", right: "10%", borderRadius: "50%", border: "3px solid #15ae66" }}>
        <TbSettingsBolt fontSize={42} />
        </div>
        <div style={{  position: "absolute", bottom: "-9%", right: "7%", width: "100px"  }}>
          <p style={{ color: "#03254c", fontWeight: "600", fontSize: "22", }}>Manufactoring</p>
        </div>
      </div>
</div>


<div style={{  display: "flex", paddingTop: "40px", paddingBottom: "0px" , marginBottom: "0px"}}>
            <div style={{ background: "",width: "50%", marginTop: "40px" }}>
              <p style={{ color: "#15ae66", marginBottom: "2px", fontSize:"16px", fontWeight: 'bold' }}> NEWS </p>
              <p style={{ color: "#03254c", marginTop: "5px", fontSize:"24px", fontWeight: 'bold' }}>Check Our Latest News</p>
                <div style={{ width: "100px", borderBottom: '2px solid #15ae66', }}></div>
                <div style={{ width: "200px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
                </div>
            </div>
            <div style={{ width: "50%"}}>
            <p className='strokeme'>
              News
            </p>
            </div>
            
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "-60px" }}>
      <div style={{ width: "300px", height: "300px"}}>
                <img src={j1} />
                <p style={{ color: "#03254c", fontWeight: "600", marginBottom: "2px" }}>Upcomming Events</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                <BsArrowRight   color="#15ae66" />
                <p style={{ color: "#15ae66", fontWeight: "400", marginLeft: "5px" }}>  Read More</p>
                </div>
            </div>
            <div style={{ width: "300px", height: "300px"}}>
                <img src={j3} />
                <p style={{ color: "#03254c", fontWeight: "600",marginBottom: "2px" }}>New CEO</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                <BsArrowRight   color="#15ae66" />
                <p style={{ color: "#15ae66", fontWeight: "400", marginLeft: "5px" }}>  Read More</p>
                </div>

            </div>
            <div style={{ width: "300px", height: "300px"}}>
                <img src={j3} />
                <p style={{ color: "#03254c", fontWeight: "600", marginBottom: "2px" }}>Twitter Posts</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                <BsArrowRight   color="#15ae66" />
                <p style={{ color: "#15ae66", fontWeight: "400", marginLeft: "5px" }}>  Read More</p>
                </div>
            </div>
            </div>

            <div style={{ width: '100%', display: "flex" }}>
            <div style={{ background: "",width: "40%", marginTop: "40px" }}>
              <p style={{ color: "#15ae66", marginBottom: "2px", fontSize:"16px", fontWeight: 'bold' }}> NEWS </p>
              <p style={{ color: "#03254c", marginTop: "5px", fontSize:"24px", fontWeight: 'bold' }}>Check Our Latest News</p>
                <div style={{ width: "100px", borderBottom: '2px solid #15ae66', }}></div>
                <div style={{ width: "200px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
                </div>

                <p style={{ maxWidth:"430px", marginTop: "10px", marginBottom: '30px' }}>
                Publishing and graphic design, Lorem ipsum is a placeholder text commonly used. 
                </p>

                <button style={{ width: "170px", height: "40px", background: "#03254c", color: "white" , border: "none", outline: "none"}} onClick={() =>  setOpen1(true)}>APPLY NOW</button>

            </div>

            <div>
              <div style={{  }}> 
            <div style={{ width: "500px", marginBottom: '10px', position: "relative",opacity: "0.7" }}>
             <img  width={"500px"} height={"140px"} style={{ objectFit: 'cover'  }} src={j1} />
             <p className='strokeme1' style={{ position: "absolute",  top: "40%", left: "25%" }}>OUR VISION</p>
            </div>
            <div style={{ width: "500px", marginBottom: '10px', position: "relative",opacity: "0.7" }}>
             <img  width={"500px"} height={"140px"} style={{ objectFit: 'cover' }} src={j3} />
             <p className='strokeme1' style={{ position: "absolute",  top: "40%", left: "25%" }}>OUR TEAM</p>
            </div>
            <div style={{ width: "500px", marginBottom: '10px', position: "relative", opacity: "0.7" }}>
             <img  width={"500px"} height={"140px"} style={{ objectFit: 'cover' }} src={j1} />
             <p className='strokeme1' style={{ position: "absolute",  top: "40%", left: "25%" }}>OUR GOAL</p>
            </div>
            </div>
            </div>

            
            </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginRight: "8%", marginTop: "50px", marginBottom: "40px" }}>
                  <div style={{ width: "280px", height: "120px", background: "white", paddingLeft: "30px", paddingRight: "15px", paddingTop: '20px', paddingBottom: '20px' }}>
                    <MdLocationOn  fontSize={32} color="#15ae66"/>
                  <p style={{ color: "#15ae66", fontWeight: "600" }}>Location</p>
                  <span style={{ color: "gray", fontWeight: "500" }}> Location: 575 Avenenu </span>
                  <span style={{ color: "gray", fontWeight: "500" }}> Location: 575 Avenenu </span>

                </div>

                <div style={{ width: "280px", height: "120px", background: "white", paddingLeft: "30px", paddingRight: "15px", paddingTop: '20px', paddingBottom: '20px' }}>
                  <BiSolidPhone  fontSize={32} color="#15ae66" />
                  <p style={{ color: "#15ae66", fontWeight: "600" }}>PHone No</p>
                  <span style={{ color: "gray", fontWeight: "500" }}> Location: 575 Avenenu </span>
                  <span style={{ color: "gray", fontWeight: "500" }}> Location: 575 Avenenu </span>

                </div>

                <div style={{ width: "280px", height: "120px", background: "white", paddingLeft: "30px", paddingRight: "15px", paddingTop: '20px', paddingBottom: '20px' }}>
                  <BsSendFill fontSize={32} color="#15ae66" />
                  <p style={{ color: "#15ae66", fontWeight: "600" }}>E-mail</p>
                  <span style={{ color: "gray", fontWeight: "500" }}> Location: 575 Avenenu </span>
                  <span style={{ color: "gray", fontWeight: "500" }}> Location: 575 Avenenu </span>
                </div>

                </div>
   </div>

   <div style={{ height: "80px", display: "flex", justifyContent: "space-around", alignItems: "center", background: "white", width: "100%" }}>
    <img src={CLogo} width={200}/>
    <p style={{ color: "#03254c" }}>@2023 INTRA - All right reserved</p>
    <div>
      <GrLinkedinOption />
      <BiLogoTwitter style={{ marginLeft: "15px" }} />
    </div>
   </div>

<FormDialog open={open1} handleClose={() => {
  setOpen1(false)
}} />
  

    </div>
    
  );
}

export default App;

const NewCard = ({name,desc,logo, width="350px", height="250px"}) => {
  return(
    <div style={{ width: width, height: height, background: "#03254c", paddingLeft: "30px", paddingRight: "15px", paddingTop: '20px', paddingBottom: '20px' }}>
    {logo}
    <p style={{ color: "#15ae66", fontWeight: "600" }}>{name}</p>
    <p style={{ color: "white", fontWeight: "500" }}> {desc} </p>
  </div>
  )
}

const Card = ({image,name, desg,hoverText, width="300px", height="350px"}) => {
  const [isImageHover,setIsImageHover] = useState(false)
  return(
    <div onMouseEnter={() => setIsImageHover(true)} onMouseLeave={() => setIsImageHover(false)} className='image-hover' style={{ position: "relative", width: "300px", height: '350px', background: 'white', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
    <img height={height} width={width} style={{ objectFit: "cover" }} src={image} />

    <div  style={{ position: "absolute",   zIndex: 2, bottom: "0px", left: "10px", color: "white", }}>
      <p style={{  fontWeight: "bold", marginBottom: "2px" }}>{name}</p>
      <p style={{ color: "white", marginTop: "5px", fontSize: "14px",   }}>{desg}</p>
      {isImageHover && 
      <p style={{  color: "white",fontSize: "9px", transition: "ease-in-out" }}>{hoverText}</p>
      }
  </div>
    <div className="opacityOverlay"></div>
  </div>
  )
}

const IntraCard = ({text,number}) => {
  return(
    <div className='intra-card'>
      <p style={{ color: "lightgray", fontWeight: "600" }}>{text}</p>
      <p style={{ fontSize: "24px", fontWeight: "600" }}>{number}</p>
      <div className='intra-card-logo'>
        <img src={A}  />
      </div>
    </div>
  )
}


const TacticalCard = ({width =  "320", height = "320" , image, name="", hoverText="asfsdf"}) => {
  const [isImageHover,setIsImageHover] = useState(false)
  return(
    <div  onMouseLeave={() => setIsImageHover(false)} className='image-hover1' style={{marginRight: "35px",  position: "relative", width: "280px", height: '280px', background: 'white', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
    <img height={height}  style={{ objectFit: "contain", width: "inherit",opacity: 0.5, }} src={image} />
    <div  style={{ opacity: 1, position: "absolute",  zIndex: 2, bottom: "30px", left: "30px", color: isImageHover ? "#15ae66" : "#263770", }}>
      <p style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "5px" }}>{name}</p>
      <BsArrowRight style={{ display: isImageHover ? "none" : "", cursor : 'pointer', opacity: 1, }} onClick={() => setIsImageHover(true)}  fontSize={26}/>
      {isImageHover && 
      <p style={{  color: "white",fontSize: "12px", paddingRight: "15px", fontWeight: "600", lineHeight: "20px", transition: "ease-in-out" }}>{hoverText}</p>
      }
  </div>
    {/* <div className="opacityOverlay"></div> */}
  </div>
  )
}