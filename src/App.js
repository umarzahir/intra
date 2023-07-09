import './App.css';
import Logo from "./assets/white_full.png"
import {HiMenuAlt1,HiArrowNarrowDown} from 'react-icons/hi'
import MyDrawer from './component/Drawer';
import AD from "./assets/Arrowup.svg"
import CountUp from 'react-countup';
import { useRef, useState } from 'react';
import SectionTwo from './component/SectionTwo';
import CM from "./assets/Chairman.jpeg"
import CEO from "./assets/CEO.jpeg"
import A from "./assets/3 User 1.svg"
import Prod1 from "./assets/product1.png"
import Prod2 from "./assets/product2.png"
import Prod3 from "./assets/product3.png"
import Prod4 from "./assets/product4.png"
import CLogo from "./assets/colored_full.png"
import vpb from "./assets/VPb.jpeg"
import vpe from "./assets/vpe.png"
import j1 from "./assets/News Training .jpeg"
import VisibilitySensor from 'react-visibility-sensor';
import j2 from "./assets/News New CEO.jpg"
import j3 from "./assets/News AKAER.jpeg"
import {BsArrowRight, BsSendFill, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"
import {GiOilPump,GiTeacher} from 'react-icons/gi'
import {GrPersonalComputer,GrLinkedinOption} from "react-icons/gr"
import {BiCheckShield,BiDoughnutChart,BiSolidPhone,BiLogoTwitter} from 'react-icons/bi'
import {TbRewindForward15, TbSettingsBolt} from "react-icons/tb" 
import {GrSettingsOption,GrMapLocation} from "react-icons/gr"
import FormDialog from './component/form';
import {MdLocationOn,MdSecurity} from 'react-icons/md'
import {SiHomeassistant} from "react-icons/si"
import {PiTreeEvergreenFill} from "react-icons/pi"

const chairmanDetails = "Our Chairman is a visionary leader with a vast experience and knowledge in the field of Advance technologies. With a passion for innovation and an unwavering commitment to excellence, he has played a pivotal role in shaping our company's growth and success. Under his guidance, our company continues to lead in the development and manufacturing of advanced technological solutions."
const ceoDetails = "Our CEO brings a wealth of experience and expertise in leading and managing companies, He is committed to driving innovation and ensuring that our company's operations and services align with the highest standards of quality and efficiency. Under his leadership and direction."
const acticalDetails = "Built with the Vertical Take off and Landing (VTOL) technology,ASEF series was designed to be easily deployed, runwayindependent, with autonomous operations. Enabling the end userwith a true tactical advantage for missions that requiresagility"
const oilandGasDetails="UAVs revolutionize environmental and agricultural applications, optimizing data collection and informed decision-making. They monitor ecosystems, aid conservation, and enhance precision agriculture. With real-time data and aerial perspective, UAVs promote sustainability and boost agricultural productivity."

function App() {
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)

  const ref1 = useRef()
  const ref2 = useRef()

  const scrollRightRef1 = (ref) => {
     ref.current?.scrollTo({
        left: 500,
        behavior: 'smooth'
    })
  };

  const scrollKeftRef1 = (ref) => {
    ref.current?.scrollTo({
       left: -500,
       behavior: 'smooth'
   })
 };


  return (
    <div>

      <div className='con'>
        <div  style={{ display: 'flex', width: "100%", height: "80px", alignItems: "center", justifyContent: "space-between", zIndex: 999 }}>
          <div style={{ marginLeft: "80px" }}>
            <img src={Logo} width={180}/>
          </div>
          <div style={{ position: 'absolute', right: 0, marginRight: "30px", cursor: "pointer" }}onClick={() => setOpen(true)}>
          <HiMenuAlt1 fontSize={46} color='white' />
          </div>
        </div>
      <div className='image-container' >
          <div className='one'>
          </div>
          <div style={{  display: "flex", justifyContent: "center", position: "absolute", width: "65%", left: "5%" ,right: '10%' }} className="main-text">
            <p style={{  color: "white", fontSize: "calc(38px + 0.390625vw)", fontFamily: "AR", fontWeight: 500}}>"An Ambition as High as the Sky"</p>
          </div>

          <div style={{ position: "absolute", top: "90%", left: "50px" }}>
          <a href="#sec2">
            <HiArrowNarrowDown color='white' fontSize={42} />
          </a>
            {/* <img style={{transform: "rotate(180deg)", color: "white" }} src={AD} /> */}
          </div>

          <div style={{  position: "absolute", fontSize: "calc(12px + 0.390625vw)", top: "90%",  fontFamily: "HN", left: "70%", display: "flex" ,color: "white" , fontWeight: "600"}}>
          <p style={{ opacity: 0.5 }}>AR</p>
          <p style={{ marginLeft: "10px", }}>EN</p>
          </div>

      </div>
       <a id="as"  href='#sec2'></a>
       <a id="vision"  href='#sec'></a>
       <a id="leader"  href='#sec3'></a>
       <a id="intra"  href='#sec5'></a>
       <a id="prod"  href='#sec6'></a>
       <a id="ind"  href='#sec7'></a>
       <a id="cap"  href='#sec8'></a>
       <a id="news"  href='#sec9'></a>
       <a id="career"  href='#sec10'></a>
       <a id="contact" href='#sec11'></a>
      <div className='image-container2 header' >
      <div className='two'></div>
      </div>
      <MyDrawer open={open}  onClose={(e) => {
        setOpen(false)
        setTimeout(() => {
          document.getElementById(e)?.click?.()
        },300)
      }
      }/>
      
      </div>

    <SectionTwo />

    <div id="sec3" style={{ marginLeft: "8%", marginRight: "1%", }}>
      <div className='about-us-con' style={{  paddingTop: "40px", paddingBottom: "0px" }}>
            <div className='mission-2' style={{  marginTop: "40px" }}>
              <p style={{ color: "#15ae66", marginBottom: "2px", fontSize:"calc(16px + 0.390625vw)", fontWeight: 'bold' }}> THE TEAM </p>
              <p style={{ color: "#03254c", marginTop: "5px", fontSize:"calc(24px + 0.390625vw)", fontWeight: 'bold' }}>Meet Our Leader</p>
                <div style={{ width: "100px", borderBottom: '2px solid #15ae66', }}></div>
                <div style={{ width: "200px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
                </div>
            </div>
            <div style={{ width: "70%", }}>
            <p className='strokeme'>
              Leaders
            </p>
            </div>
      </div>
    </div>

    <div id="sec4">
    <button style={{ position: "absolute", left: 0, zIndex: 9999999, top: "50%" ,width: "50px", height: "50px", background: "rgba(225, 225, 225, 0.7)", borderRadius: "50%", border: "none", cursor: "pointer"  }} onClick={() => scrollKeftRef1(ref1)}><BsArrowLeftShort  fontSize={32}/></button>
    <button style={{ position: "absolute", right: "0%", zIndex: 9999999999, top: "50%" ,width: "50px", height: "50px", background: "rgba(225, 225, 225, 0.7)", borderRadius: "50%", border: "none", cursor: "pointer"  }} onClick={() => scrollRightRef1(ref1)}><BsArrowRightShort  fontSize={32}/></button>
    <div className={"container"} ref={ref1} style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <div className={"scroll"} ref={ref1}>
        <div style={{paddingLeft: "6%", }}>
          <Card image={CM} name='Salman Alshathri' desg="Chairman" hoverText={chairmanDetails} />
        </div>
      <Card image={CEO} name='Dr. Hammad Alfaouzan' desg="CEO"  hoverText={ceoDetails} />
      <Card image={vpb} name='Eng. Abdulaziz' desg="VP of Business"
      hoverText={"Our VP of Business brings a unique blend of skills and expertise in engineering and business development. With a deep understanding of technical and engineering aspect of advance technologies, he has been instrumental  in our company's growth and sucecss. He has a strong track record of  developing and delivering innovative technological solutions that meet our clients."} />
      <div style={{paddingRight: "6%", }}>
        <Card image={vpe} name='Eng. Asim Qureshi' desg="VP of Engineering" hoverText={"Our VP of Engineering is a seasoned engineer with extensive experience in the deveolpment and production of advanced technologies. With his technical experties and innovatie mindset, he has been an instrumnental part of our company,s success. He has a proven track record of overseeing the design and development of cutting-edge technological solutions from conception to completion."} />
      </div>
    </div>
    </div>
    </div>

    <div id="sec5" style={{ height: "600px", position: "relative", marginLeft: "8%", marginTop: "10px", display: "flex", justifyContent: 'space-between', marginRight: "8%",  }}>
      <div className='intra1'>
        <IntraCard text={"Founded In"} number={"2013"}  />
      </div>
      <div className='intra2'>
        <IntraCard text={"Development Hour"} number={"600000"} extraText="+"  />
      </div>
      <div className='intra3'>
        <IntraCard text={"Engineering Project"} number={"5"}  extraText="+"/>
      </div>
      <div className='intra4'>
        <IntraCard text={"Development Projects"} number={"5"} extraText="+"  />
      </div>

      <div className='intra5'>
        <IntraCard text={"UAV Traning Hours"} number={"68000"} extraText="+"  />
      </div>
      <div className='intra6'>
        <IntraCard text={"Fight Hours"} number={"21"} extraText="+ Daily Hours"  />
      </div>
      <div className='intra7'>
        <IntraCard text={"Manufacturing Capacity"} number={"278"}  extraText="+ Yearly" />
      </div>

      <div className='intra8'>
        <p> <span style={{ fontSize: "calc(24px + 0.390625vw)", color: "#15ae66", fontWeight: "600" }}>INTRA</span>
       <span style={{ color: "rgb(3, 37, 76)", fontWeight: "600" }}> In Numbers </span>
        </p>
      </div>
    </div>

   <div style={{ marginLeft: "8%"  }}>
   <div id="sec6">
              <p style={{ color: "#15ae66", marginBottom: "2px", fontSize:"calc(14px + 0.390625vw)", fontWeight: 'bold' }}> Products </p>
              <p style={{ color: "#03254c", marginTop: "5px", fontSize:"calc(24px + 0.390625vw)", fontWeight: 'bold' }}>Today and Beyond</p>
                <div style={{ width: "100px", borderBottom: '2px solid #15ae66', }}></div>
                <div style={{ width: "200px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
                </div>
            </div>
            <div style={{ position: "relative" }}>
   <button style={{ position: "absolute", left: "-1%", zIndex: 9999999999, top: "40%" ,width: "50px", height: "50px", background: "rgba(225, 225, 225, 0.7)", borderRadius: "50%", border: "none", cursor: "pointer"  }} onClick={() => scrollKeftRef1(ref2)}><BsArrowLeftShort  fontSize={32}/></button>
    <button style={{ position: "absolute", right: "0%", zIndex: 9999999999, top: "40%" ,width: "50px", height: "50px", background: "rgba(225, 225, 225, 0.7)", borderRadius: "50%", border: "none", cursor: "pointer"  }} onClick={() => scrollRightRef1(ref2)}><BsArrowRightShort  fontSize={32}/></button>
   <div className={"container"} ref={ref2} >
      <div className={"scroll"} ref={ref2}>
      <div style={{  marginTop: "20px", }}>
         <ProductCard  name='Tactical' image={Prod1} hoverText={acticalDetails} />
         </div>
         <div style={{  marginTop: "100px", marginLeft: "20px", marginRight: "20px" }}>
         <ProductCard name='Operational'  image={Prod2} hoverText={"With its extensive operational experience INTRA is currently developing SAMOOM-OO UAS as a futuristic state-of-the-art operational UAS. SAMOOM-OO is developed as the “Gap-filler” of the existing gaps, in addition to high versatility and robustness to support evolving payload technology"} />
         </div>
         <ProductCard name="Persistent" image={Prod4} hoverText={"Rased aerostats series is a tethered unmanned air vehicles for persistent surveillance, communications, intelligence and more. Rased Aerostat Systems advanced streamlined platforms to elevate a wide range of payloads to high operation altitude."} />
         <div style={{  marginTop: "100px", }}>
         <ProductCard name="Strtegic" image={Prod3} hoverText={"INTRA SAMOOM-SM UAS platform is classified as the Strategical-Medium Altitude High Endurance platform, currently under development, the platform is designed to deliver full coverage of war field as its operational area"} />
         </div>
        
      </div>
    </div>
    </div>

    <div id="sec7" style={{ background: "",width: "30%", marginTop: "70px", marginBottom: "30px" }}>
              <p style={{ color: "#15ae66", marginBottom: "2px", fontSize:"calc(14px + 0.390625vw)", fontWeight: 'bold' }}> INDUSTRIES </p>
              <p style={{ color: "#03254c", marginTop: "5px", fontSize:"calc(24px + 0.390625vw)", fontWeight: 'bold' }}>Distinctive Value</p>
                <div style={{ width: "100px", borderBottom: '2px solid #15ae66', }}></div>
                <div style={{ width: "200px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
                </div>
      </div>
      <div className="industrie-con" style={{ width: "100%" }}>
        <div className='i-card-one-con' style={{  padding: "20px", marginRight: "4%" }}>
         <NewCard className="oil-and-gas" width='100%' logo={<GiOilPump  color='#15ae66' fontSize={48}/>} name="Oil and Gas"   desc="UAVs transform the oil and gas industry by enhancing inspections and operational efficiencies. Equipped with advanced sensors, they monitor infrastructure, detect leaks, and enable rapid data collection. Real-time insights empower informed decision-making, optimizing maintenance and mitigating risks."  />
         <div style={{ marginTop: "35px" }}>
         <NewCard className="env" logo={<PiTreeEvergreenFill  color='#15ae66' fontSize={48}/>} name="Environment" desc="UAVs revolutionize environmental and agricultural applications, optimizing data collection and informed decision-making. They monitor ecosystems, aid conservation, and enhance precision agriculture. With real-time data and aerial perspective, UAVs promote sustainability and boost agricultural productivity." />
         </div>
        </div>
        <div className="security-con" style={{ width: "60%", padding: "20px", marginTop: "100px" ,marginRight: "8%" }}>
        <NewCard className="security" width={"100%"}  logo={<MdSecurity  color='#15ae66' fontSize={48}/>} name="Security" desc="UAVs enhance security operations with advanced sensors, enabling real-time aerial monitoring for improved surveillance capabilities and proactive threat response. They are deployed for border surveillance, event security, and protecting critical infrastructure, ensuring effective security measures and public safety." />
         <div style={{ marginTop: "35px" }}>
         <NewCard className="security"  width={"100%"} logo={<SiHomeassistant  color='#15ae66' fontSize={48}/>} name="Smart Cities" desc={"UAVs play a crucial role in smart city development, aiding urban planning, infrastructure monitoring, and public safety. With advanced sensors, they efficiently collect data for mapping and surveying. UAVs improve emergency response and offer aerial surveillance for traffic monitoring. They optimize efficiency, promote sustainability, and enhance residents' quality of life in smart cities."} />
         </div>
        </div>
      </div>


      <div id="sec8" style={{ background: "",width: "30%", marginTop: "70px", marginBottom: "30px" }}>
              <p style={{ color: "#15ae66", marginBottom: "2px", fontSize:"calc(14px + 0.390625vw)", fontWeight: 'bold' }}> Capabilities </p>
              <p style={{ color: "#03254c", marginTop: "5px", fontSize:"calc(24px + 0.390625vw)", fontWeight: 'bold' }}>Complete UAS Mastery</p>
                <div style={{ width: "100px", borderBottom: '2px solid #15ae66', }}></div>
                <div style={{ width: "200px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
                </div>
      </div>
<div className='circle-con' style={{ display: "flex", width: "100%", height: "500px", justifyContent: "center",  marginTop: "30px" }}>

      <div className='circle' style={{  position: "absolute", display: "flex", justifyContent: "center", marginRight: "8%", alignItems: "center", flexDirection: "column", borderRadius: "50%", border: "3px solid #15ae66" }}>
        <p style={{ fontWeight: "600", color: "#03254c", fontSize: "calc(32px + 0.390625vw)", marginBottom: "0px" }}> UAS</p>
        <p style={{ fontWeight: "600", color: "#15ae66",  fontSize: "calc(32px + 0.390625vw)", marginTop: "0px" }}>360</p>

        <div style={{ width: "70px",  display: "flex", justifyContent: "center", alignItems: "center", height: "70px", zIndex: "999999",background: "lightgray", position: "absolute", top: "3%", left: "10%", borderRadius: "50%", border: "3px solid #15ae66" }}>
          <BiDoughnutChart fontSize={42} color="#03254c" />
        </div>
        <div style={{  position: "absolute", top: "20%", left: "12%",  }}>
          <p style={{ color: "#03254c", fontWeight: "600", fontSize: "calc(22px + 0.390625vw)", }}>Enginerring</p>
        </div>
        <div style={{ width: "70px", display: "flex", justifyContent: "center", alignItems: "center",  height: "70px", zIndex: "999999",background: "lightgray", position: "absolute", top: "3%", right: "10%", borderRadius: "50%", border: "3px solid #15ae66" }}>
          <GrSettingsOption fontSize={42}  color= "#03254c"/>
        </div>

        <div style={{  position: "absolute", top: "20%", right: "12%",  }}>
          <p style={{ color: "#03254c", fontWeight: "600", fontSize: "calc(22px + 0.390625vw)", }}>Maintaince</p>
        </div>

        <div style={{ width: "70px", display: "flex", justifyContent: "center", alignItems: "center",  height: "70px", zIndex: "999999",background: "lightgray", position: "absolute", top: "40%", right: "-9%", borderRadius: "50%", border: "3px solid #15ae66" }}>
          <GrPersonalComputer fontSize={42} />
        </div>

        <div style={{  position: "absolute", top: "53%", right: "-30%", width: "100px"  }}>
          <p style={{ color: "#03254c", fontWeight: "600", fontSize: "calc(22px + 0.390625vw)", }}>Design & Development</p>
        </div>
        <div style={{ width: "70px", display: "flex", justifyContent: "center", alignItems: "center", height: "70px", zIndex: "999999",background: "lightgray", position: "absolute", top: "40%", left: "-9%", borderRadius: "50%", border: "3px solid #15ae66" }}>
          <TbSettingsBolt fontSize={42} />
        </div>

        <div style={{  position: "absolute", top: "53%", left: "-26%", width: "100px"  }}>
          <p style={{ color: "#03254c", fontWeight: "600", fontSize: "calc(22px + 0.390625vw)", }}>Opearations</p>
        </div>

        <div style={{ width: "70px", display: "flex", justifyContent: "center", alignItems: "center",  height: "70px", zIndex: "999999",background: "lightgray", position: "absolute", bottom: "3%", left: "10%", borderRadius: "50%", border: "3px solid #15ae66" }}>
          <GiTeacher fontSize={42} />
        </div>
        <div style={{  position: "absolute", bottom: "-9%", left: "12%", width: "100px"  }}>
          <p style={{ color: "#03254c", fontWeight: "600", fontSize: "calc(22px + 0.390625vw)", }}>Traning</p>
        </div>
        <div style={{ width: "70px", display: "flex", justifyContent: "center", alignItems: "center",  height: "70px", zIndex: "999999",background: "lightgray", position: "absolute", bottom: "3%", right: "10%", borderRadius: "50%", border: "3px solid #15ae66" }}>
        <TbSettingsBolt fontSize={42} />
        </div>
        <div style={{  position: "absolute", bottom: "-9%", right: "7%", width: "100px"  }}>
          <p style={{ color: "#03254c", fontWeight: "600", fontSize: "calc(22px + 0.390625vw)", }}>Manufactoring</p>
        </div>
      </div>
</div>


<div id="sec9" style={{   paddingTop: "40px", paddingBottom: "0px" , marginBottom: "0px",marginRight: "5%"}}>
            <div style={{ width: "50%", marginTop: "40px" }}>
              <p style={{ color: "#15ae66", marginBottom: "2px", fontSize:"calc(16px + 0.390625vw)", fontWeight: 'bold' }}> NEWS </p>
              <p style={{ color: "#03254c", marginTop: "5px", fontSize:"calc(24px + 0.390625vw)", fontWeight: 'bold' }}>Check Our Latest News</p>
                <div style={{ width: "100px", borderBottom: '2px solid #15ae66', }}></div>
                <div style={{ width: "200px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
                </div>
            </div>
            <div style={{ marginLeft: "auto" }}>
            <p className='strokemenews'>
              News
            </p>
            </div>
            
      </div>
      <div className='news-card-con'>
      <div className='news-card'>
                <img src={j1}   className='news-card-image' />
                <p style={{ color: "#03254c", fontWeight: "600", marginBottom: "2px" }}>Upcomming Events</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                <BsArrowRight   color="#15ae66" />
                <p style={{ color: "#15ae66", fontWeight: "400", marginLeft: "5px" }}>  Read More</p>
                </div>
            </div>
            <div className='news-card'>
                <img src={j2}  className='news-card-image' />
                <p style={{ color: "#03254c", fontWeight: "600",marginBottom: "2px" }}>New CEO</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                <BsArrowRight   color="#15ae66" />
                <p style={{ color: "#15ae66", fontWeight: "400", marginLeft: "5px" }}>  Read More</p>
                </div>

            </div>
            <div className='news-card'>
                <img src={j3}  className='news-card-image'/>
                <p style={{ color: "#03254c", fontWeight: "600", marginBottom: "2px" }}>Twitter Posts</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                <BsArrowRight   color="#15ae66" />
                <p style={{ color: "#15ae66", fontWeight: "400", marginLeft: "5px" }}>  Read More</p>
                </div>
            </div>
            </div>

            <div id="sec10">
            <div className='sec10-one'>
              <p style={{ color: "#15ae66", marginBottom: "2px", fontSize:"calc(16px + 0.390625vw)", fontWeight: 'bold' }}> CAREERS </p>
              <p style={{ color: "#03254c", marginTop: "5px", fontSize:"calc(24px + 0.390625vw)", fontWeight: 'bold' }}>Join Us</p>
                <div style={{ width: "100px", borderBottom: '2px solid #15ae66', }}></div>
                <div style={{ width: "200px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
                </div>

                <p style={{ maxWidth:"430px", marginTop: "10px", marginBottom: '30px' }}>
                Publishing and graphic design, Lorem ipsum is a placeholder text commonly used. 
                </p>

                <button style={{ width: "170px", height: "40px", background: "#03254c", color: "white" , border: "none", outline: "none"}} onClick={() =>  setOpen1(true)}>APPLY NOW</button>

            </div>

            <div className='sec10-two'>
              <div  style={{ marginLeft: "auto" , width: "100%", float: 'right' }}> 
            <div style={{ width: "100%", marginBottom: '10px', position: "relative",opacity: "0.7" }}>
             <img  width={"100%"} height={"140px"} style={{ objectFit: 'cover'  }} src={j1} />
             <p className='strokeme1' style={{ position: "absolute",  top: "40%", left: "25%" }}>OUR VISION</p>
            </div>
            <div style={{  width:"100%", marginBottom: '10px', position: "relative",opacity: "0.7" }}>
             <img   width={"100%"} height={"140px"} style={{ objectFit: 'cover' }} src={j3} />
             <p className='strokeme1' style={{ position: "absolute",  top: "40%", left: "25%" }}>OUR TEAM</p>
            </div>
            <div style={{ width:"100%", marginBottom: '10px', position: "relative", opacity: "0.7" }}>
             <img  width={"100%"} height={"140px"} style={{ objectFit: 'cover' }} src={j1} />
             <p className='strokeme1' style={{ position: "absolute",  top: "40%", left: "25%" }}>OUR GOAL</p>
            </div>
            </div>
            </div>

            
            </div>

      <div id="sec11" style={{ justifyContent: "space-between", marginRight: "8%", marginTop: "50px", marginBottom: "40px" }}>
                  <div style={{ width: "280px", height: "135px", background: "white", paddingLeft: "30px", paddingRight: "15px", paddingTop: '20px', paddingBottom: '20px' }}>
                    <MdLocationOn  fontSize={32} color="#15ae66"/>
                  <p style={{ color: "#15ae66", fontWeight: "600" }}>Location</p>
                  <span style={{ color: "gray", fontWeight: "500" }}> 7409 King Abdulaziz - King Abdulaziz Dist. Unit No 1</span>
                  <span style={{ color: "gray", fontWeight: "500" }}> Riyadh 12233-3964 Kingdom of Saudi Arabia.</span>

                </div>

                <div style={{ width: "280px", height: "135px", background: "white", paddingLeft: "30px", paddingRight: "15px", paddingTop: '20px', paddingBottom: '20px' }}>
                  <BiSolidPhone  fontSize={32} color="#15ae66" />
                  <p style={{ color: "#15ae66", fontWeight: "600" }}>PHone No</p>
                  <span style={{ color: "gray", fontWeight: "500" }}> 011-4546083 </span>

                </div>

                <div style={{ width: "280px", height: "135px", background: "white", paddingLeft: "30px", paddingRight: "15px", paddingTop: '20px', paddingBottom: '20px' }}>
                  <BsSendFill fontSize={32} color="#15ae66" />
                  <p style={{ color: "#15ae66", fontWeight: "600" }}>E-mail</p>
                  <span style={{ color: "gray", fontWeight: "500" }}> info@intro.sa </span>
                </div>

                </div>
   </div>

   <div className='footer' style={{  justifyContent: "space-around", alignItems: "center", background: "white", width: "100%" }}>
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

const NewCard = ({className,name,desc,logo, width="350px", height="250px"}) => {
  return(
    <div className={className} style={{ width: width, height: height, background: "#03254c", paddingLeft: "30px", paddingRight: "15px", paddingTop: '20px', paddingBottom: '20px' }}>
    {logo}
    <p style={{ color: "#15ae66", fontWeight: "600" }}>{name}</p>
    <p style={{ color: "white", fontWeight: "500" }}> {desc} </p>
  </div>
  )
}

const Card = ({image,name, desg,hoverText, width="calc(80vw / 3)", height="350"}) => {
  const [isImageHover,setIsImageHover] = useState(false)
  return(
    <div  onMouseEnter={() => setIsImageHover(true)} onMouseLeave={() => setIsImageHover(false)} className='image-hover leader-card' style={{ marginRight: "80px",  position: "relative", height: '350px', background: 'white', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
    <img height={"350"}   style={{ objectFit: "cover", width: "inherit" }}  src={image} />

    <div  style={{ position: "absolute",   zIndex: 2, bottom: "0px", left: "10px", color: "white", }}>
      <p style={{  fontWeight: "bold", marginBottom: "2px" }}>{name}</p>
      <p style={{ color: "white", marginTop: "5px", fontSize: "calc(14px + 0.390625vw)",   }}>{desg}</p>
      {isImageHover && 
      <p style={{  color: "white",fontSize: "calc(9px + 0.390625vw)", transition: "ease-in-out" }}>{hoverText}</p>
      }
  </div>
    <div className="opacityOverlay"></div>
  </div>
  )
}

const IntraCard = ({text,number,extraText}) => {
  return(
    <div className='intra-card'>
      <p style={{ color: "lightgray", fontWeight: "600" }}>{text}</p>
      <p style={{ fontSize: "calc(24px + 0.390625vw)", fontWeight: "600" }}>{
         <CountUp end={number} redraw={true}>
         {({ countUpRef, start }) => (
             <VisibilitySensor onChange={start} delayedCall>
                 <span ref={countUpRef}>
                 </span>
             </VisibilitySensor>
         )}
     </CountUp>
      }</p> <p>{extraText}</p>
      <div className='intra-card-logo'>
        <img src={A}  />
      </div>
    </div>
  )
}


const ProductCard = ({width =  "320", height = "320" , image, name="", hoverText="asfsdf"}) => {
  const [isImageHover,setIsImageHover] = useState(false)
  return(
    <div  onMouseLeave={() => setIsImageHover(false)} className='image-hover1 product-card' style={{marginRight: "35px",  position: "relative", height: '280px', background: 'white', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
    <img height={height}  style={{ objectFit: "contain", width: "300px",opacity: 0.5, }} src={image} />
    <div  style={{ opacity: 1, position: "absolute",  zIndex: 2, bottom: "30px", left: "30px", color: isImageHover ? "#15ae66" : "#263770", }}>
      <p style={{ fontSize: "calc(22px + 0.390625vw)", fontWeight: "bold", marginBottom: "5px" }}>{name}</p>
      <BsArrowRight style={{ display: isImageHover ? "none" : "", cursor : 'pointer', opacity: 1, }} onClick={() => setIsImageHover(true)}  fontSize={26}/>
      {isImageHover && 
      <p style={{  color: "white",fontSize: "calc(12px + 0.390625vw)", paddingRight: "15px", fontWeight: "600", lineHeight: "20px", transition: "ease-in-out" }}>{hoverText}</p>
      }
  </div>
    {/* <div className="opacityOverlay"></div> */}
  </div>
  )
}