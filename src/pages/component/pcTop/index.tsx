import React from 'react'
import pctop from './index.module.css';
import logo from "../../../images/logo.png"
import icon1 from "../../../images/icon1.png" 
import { Outlet, useNavigate, useLocation } from "react-router-dom";

function About() {  
  const navigate = useNavigate();
  const location = useLocation();
  

  const handleAssetWorld = () => {
    navigate('/Asset')
    setTabIndex(1)
  }
  const handleHome = () => {
    navigate('/')
    setTabIndex(0)
  }

  const [tabIndex, setTabIndex] = React.useState(location?.pathname === "/Asset" ? 1 : 0)
  

  return ( 
    <div className={`${pctop.header}`}>
      <img className={`${pctop.header_logo}`} src={logo} onClick={() => navigate('/')} alt="" />
        <div className={`${pctop.header_right}`}>
            <div className={`${pctop.header_right_item} ${tabIndex === 0 ?pctop.header_right_item_1 : ''}`} onClick={handleHome}>
                Token world 
                {tabIndex === 0 ? 
                <img className={`${pctop.header_right_item_on}`} src={icon1} alt="" /> : ''}
            </div>
            <div className={`${pctop.header_right_item} ${tabIndex === 1 ?pctop.header_right_item_1 : ''}`} onClick={handleAssetWorld}>
                Asset world 
                {tabIndex === 1 ? 
                <img className={`${pctop.header_right_item_on}`} src={icon1} alt="" /> : ''}
            </div>
        </div>
        <div className={`${pctop.header_login}`}>
            <div className={`${pctop.header_login_item1}`}>Sign in</div>
            <div className={`${pctop.header_login_item2}`} onClick={() => navigate('/login')}>Log in</div>
            {/* 已登陆 */}
            {/* <div className={`${pctop.header_login_item2}`}>0xndjs...iioj</div> */}
        </div>
    </div>
  )
}

export default About
