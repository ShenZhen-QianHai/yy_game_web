import React from "react";
import pctop from "./index.module.css";
import logo from "../../../images/logo.png";
import icon1 from "../../../images/icon1.png";

function About() {
  return (
    <div className={`${pctop.header}`}>
      <img className={`${pctop.header_logo}`} src={logo} alt="" />
      <div className={`${pctop.header_right}`}></div>
      <div className={`${pctop.header_login}`}>
        <div className={`${pctop.header_login_item1}`}>Sign in</div>
        {/* 已登陆 */}
        {/* <div className={`${pctop.header_login_item2}`}>0xndjs...iioj</div> */}
      </div>
      {/* <div className={`${pctop.header_right_item} ${pctop.header_right_item_1}`}>
                Token world 
                <img className={`${pctop.header_right_item_on}`} src={icon1} alt="" />
            </div>
            <div className={`${pctop.header_right_item}`}>
                Asset world 
            </div> */}
    </div>
  );
}

export default About;
