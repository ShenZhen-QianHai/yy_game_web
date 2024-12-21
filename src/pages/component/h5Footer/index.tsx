import React from "react";
import pctop from "./index.module.css";
import icon42 from "../../../images/icon42.png";
import icon42_on from "../../../images/icon42_on.png";
import icon6 from "../../../images/icon6.png";
import icon43 from "../../../images/icon43.png";
import icon43_on from "../../../images/icon43_on.png";
import icon44 from "../../../images/icon44.png";
import { useNavigate } from "react-router";


interface IProps {
  tabIndex: number;
}

function About(IProps: any) {
  const navigate = useNavigate();

  return (
    <div className={`${pctop.footer}`}>
      <div className={`${pctop.footer_item}`} onClick={() => navigate('/')}>
        {IProps.tabIndex === 3 ?
          <img src={icon42_on} alt="" /> :
          <img src={icon42} alt="" />}
        <p className={`${IProps.tabIndex === 1 ? pctop.footer_item_on : ''}`}>Mainpage</p>
      </div>
      <div className={`${pctop.footer_item}`}>
        <img src={icon44} alt="" />
        <p className={`${IProps.tabIndex === 2 ? pctop.footer_item_on : ''}`}>Token world</p>
      </div>
      <div className={`${pctop.footer_item}`} onClick={() => navigate('/Asset')}>
        {IProps.tabIndex === 3 ?
          <img src={icon43_on} alt="" /> :
          <img src={icon43} alt="" />}
        <p className={`${IProps.tabIndex === 3 ? pctop.footer_item_on : ''}`}>Asset</p>
      </div>
    </div>
  );
}

export default About;
