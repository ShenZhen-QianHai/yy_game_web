import React, { useState } from "react";
import logincss from "./index.module.css";
import logo from "../../images/logo.png";
import icon2 from "../../images/icon2.png";
import icon4 from "../../images/icon4.png";
import icon13 from "../../images/icon13.png";

import icon6 from "../../images/icon6.png";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const handleLogin = () => {};
  const handleForget = () => {};
  const handleCreate = () => {};

  const items1 = [
    {
      key: "1",
      label: (
        <div>
          选项1
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div>
          选项2
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div>
          选项3
        </div>
      ),
    },
  ];
  const items2 = [
    {
      key: "1",
      label: (
        <div>
          选项1
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div>
          选项2
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div>
          选项3
        </div>
      ),
    },
  ];
  const items3 = [
    {
      key: "1",
      label: (
        <div>
          选项1
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div>
          选项2
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div>
          选项3
        </div>
      ),
    },
  ];
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div className={`${logincss.box}`}> 
 
      <div className={`${logincss.main}`}>
        <div className={`${logincss.main_title}`}>
          {/* <div className={`${logincss.main_title_line}`}></div> */}
          <div className={`${logincss.main_title_1}`}>Ylers</div>
          <div className={`${logincss.main_title_2}`}>（Open for purchase only for the time being. Exchange and withdrawal functions, trading functions will be opened later）</div>
          <Dropdown menu={{ items: items1 }} placement="bottom" arrow trigger={["click"]}>
            <div className={`${logincss.main_title_3}`}>
              LV.1outstanding
              <img src={icon6} className={`${logincss.main_title_3_1}`} alt="" />
              <img src={icon13} className={`${logincss.main_title_3_2}`} alt="" />
            </div>
          </Dropdown>
        </div>

        <div className="Home_tab">
          <div
            className={
              tabIndex === 1
                ? "Home_tab_item Home_tab_item_on"
                : "Home_tab_item"
            }
            onClick={() => setTabIndex(1)}
          >
            Hero space
          </div>
          <div
            className={
              tabIndex === 2
                ? "Home_tab_item Home_tab_item_on"
                : "Home_tab_item"
            }
            onClick={() => setTabIndex(2)}
          >
            Exchange space
          </div>
          <div
            className={
              tabIndex === 3
                ? "Home_tab_item Home_tab_item_on"
                : "Home_tab_item"
            }
            onClick={() => setTabIndex(3)}
          >
            Trading center
          </div>
          <div
            className={
              tabIndex === 4
                ? "Home_tab_item Home_tab_item_on"
                : "Home_tab_item"
            }
            onClick={() => setTabIndex(4)}
          >
            Current holding
          </div>
        </div>

        {
          tabIndex === 1 ?
            <div className={`${logincss.main_tab}`}>
              <Dropdown menu={{ items: items2 }} placement="bottom" arrow trigger={["click"]}>
                <div className={`${logincss.main_tab_item}`}>
                  LV.1outstanding
                  <img src={icon13} className={`${logincss.main_tab_item_img}`} alt="" />
                </div>
              </Dropdown>
              <Dropdown menu={{ items: items3 }} placement="bottom" arrow trigger={["click"]}>
                <div className={`${logincss.main_tab_item}`}>
                  LV.1outstanding
                  <img src={icon13} className={`${logincss.main_tab_item_img}`} alt="" />
                </div>
              </Dropdown>
              <p>Opening time: 9 days (July 20,2024)</p>
            </div> : null
        }

        <div>
        </div>
      </div>
      
      <div className={`${logincss.footer}`}></div>
    </div>
  );
}

export default About;
