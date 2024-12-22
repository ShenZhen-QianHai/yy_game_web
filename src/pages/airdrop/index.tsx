import React, { useState } from "react";
import logincss from "./index.module.css";
import icon6 from "../../images/icon6.png";
import icon45 from "../../images/icon45.png";
import icon47 from "../../images/icon47.png";
import icon48 from "../../images/icon48.png";
import icon55 from "../../images/icon55.png";
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
      {/* 背景虚线，替换下面icon背景(icon49开始-icon53结束) */}
      <div className={`${logincss.main_box}`} style={{ backgroundImage: `url(${icon53})` }}>
        <div className={`${logincss.main_box_item}`}>
          <img src={icon48} className={`${logincss.main_box_item_1}`} />
          <img src={icon6} className={`${logincss.main_box_item_2}`} />
          {/* <img src={icon47} className={`${logincss.main_box_item_3}`} /> */}
          <div className={`${logincss.main_box_item_button}`}>
            <div className={`${logincss.main_box_item_button_1}`}>50 tokens</div>
          </div>
        </div>

        <div className={`${logincss.main_box_item} ${logincss.main_box_item1}`}>
          <img src={icon48} className={`${logincss.main_box_item_1}`} />
          <img src={icon45} className={`${logincss.main_box_item_2}`} />
          {/* <img src={icon47} className={`${logincss.main_box_item_3}`} /> */}
          <div className={`${logincss.main_box_item_button}`}>
            <div className={`${logincss.main_box_item_button_1}`}>50 tokens</div>
          </div>
          <div className={`${logincss.main_box_item_text}`}>
            <div className={`${logincss.main_box_item_text1}`}>
              <h6>Invite friends to become members（0/5）</h6>
              <h6>Invitation code：3472934</h6>
              <p>1 friend increases Heat by 5</p>
              <div className={`${logincss.main_box_item_text_mask}`}>
                <img src={icon55} />
                <h6>Claimed</h6>
              </div>
            </div>
          </div>
        </div>

        <div className={`${logincss.main_box_item} ${logincss.main_box_item2}`}>
          <img src={icon48} className={`${logincss.main_box_item_1}`} />
          <img src={icon45} className={`${logincss.main_box_item_2}`} />
          {/* <img src={icon47} className={`${logincss.main_box_item_3}`} /> */}
          <div className={`${logincss.main_box_item_button}`}>
            <div className={`${logincss.main_box_item_button_1}`}>50 tokens</div>
          </div>
          <div className={`${logincss.main_box_item_text}`}>
            <div className={`${logincss.main_box_item_text1}`}>
              <h6>Invite friends to become members（0/5）</h6>
              <h6>Invitation code：3472934</h6>
              <p>1 friend increases Heat by 5</p>
              <div className={`${logincss.main_box_item_text_mask}`}>
                <img src={icon55} />
                <h6>Claimed</h6>
              </div>
            </div>
          </div>
        </div>

        <div className={`${logincss.main_box_item} ${logincss.main_box_item3}`}>
          <img src={icon48} className={`${logincss.main_box_item_1}`} />
          <img src={icon45} className={`${logincss.main_box_item_2}`} />
          {/* <img src={icon47} className={`${logincss.main_box_item_3}`} /> */}
          <div className={`${logincss.main_box_item_button}`}>
            <div className={`${logincss.main_box_item_button_1}`}>50 tokens</div>
          </div>
          <div className={`${logincss.main_box_item_text}`}>
            <div className={`${logincss.main_box_item_text1}`}>
              <h6>Invite friends to become members（0/5）</h6>
              <h6>Invitation code：3472934</h6>
              <p>1 friend increases Heat by 5</p>
              <div className={`${logincss.main_box_item_text_mask}`}>
                <img src={icon55} />
                <h6>Claimed</h6>
              </div>
            </div>
          </div>
        </div>

        <div className={`${logincss.main_box_item} ${logincss.main_box_item4}`}>
          <img src={icon48} className={`${logincss.main_box_item_1}`} />
          <img src={icon45} className={`${logincss.main_box_item_2}`} />
          {/* <img src={icon47} className={`${logincss.main_box_item_3}`} /> */}
          <div className={`${logincss.main_box_item_button}`}>
            <div className={`${logincss.main_box_item_button_1}`}>50 tokens</div>
          </div>
          <div className={`${logincss.main_box_item_text}`}>
            <div className={`${logincss.main_box_item_text1}`}>
              <h6>Invite friends to become members（0/5）</h6>
              <h6>Invitation code：3472934</h6>
              <p>1 friend increases Heat by 5</p>
              <div className={`${logincss.main_box_item_text_mask}`}>
                <img src={icon55} />
                <h6>Claimed</h6>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default About;
