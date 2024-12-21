import React, { useState } from "react";
import logincss from "./index.module.css";
import icon6 from "../../images/icon6.png";
import icon45 from "../../images/icon45.png";
import icon47 from "../../images/icon47.png";
import icon48 from "../../images/icon48.png";
// 背景虚线，从第一步开始
import icon49 from "../../images/icon49.png";
import icon50 from "../../images/icon50.png";
import icon51 from "../../images/icon51.png";
import icon52 from "../../images/icon52.png";
import icon53 from "../../images/icon53.png";

import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const handleLogin = () => { };
  const handleForget = () => { };
  const handleCreate = () => { };

  const [tabIndex, setTabIndex] = useState(1);


  return (
    <div className={`${logincss.main}`}>
      {/* 背景虚线，从第一步开始(49-53) */}
      <div className={`${logincss.main_box}`} style={{ backgroundImage: `url(${icon49})` }}>
        <div className={`${logincss.main_box_item}`}>
          <img src={icon48} className={`${logincss.main_box_item_1}`} />
          <img src={icon6} className={`${logincss.main_box_item_2}`} />
          {/* <img src={icon47} className={`${logincss.main_box_item_3}`} /> */}
          <div className={`${logincss.main_box_item_button}`}>
            <div className={`${logincss.main_box_item_button_1}`}>50 tokens</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
