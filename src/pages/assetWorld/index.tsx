import React, { useState } from "react";
import logincss from "./index.module.css";
import close from "../../images/close.png";
import icon2 from "../../images/icon2.png";
import icon13 from "../../images/icon13.png";
import icon27 from "../../images/icon27.png";
import icon28 from "../../images/icon28.png";
import icon29 from "../../images/icon29.png";
import icon30 from "../../images/icon30.png";
import icon31 from "../../images/icon31.png";

import icon6 from "../../images/icon6.png";
import { Dropdown, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import H5Footer from "../component/h5Footer"

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


  const [open, setOpen] = useState(false);
  const handleConfirm = () => {
    setOpen(false);
  };

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

        <div className={`${logincss.main_bart}`}>
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
                  ? "Home_tab_item Home_tab_item_on Home_tab_item_hidden"
                  : "Home_tab_item Home_tab_item_hidden"
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
        </div>

        {
          tabIndex === 1 ?
            <div className={`${logincss.main_tab}`}>
              <div className={`${logincss.main_tab_left}`}>
                <Dropdown menu={{ items: items2 }} placement="bottom" arrow trigger={["click"]}>
                  <div className={`${logincss.main_tab_item}`}>
                    Select region
                    <img src={icon13} className={`${logincss.main_tab_item_img}`} alt="" />
                  </div>
                </Dropdown>
                <Dropdown menu={{ items: items3 }} placement="bottom" arrow trigger={["click"]}>
                  <div className={`${logincss.main_tab_item}`}>
                    Server Selection
                    <img src={icon13} className={`${logincss.main_tab_item_img}`} alt="" />
                  </div>
                </Dropdown>
              </div>
              <p>Opening time: 9 days (July 20,2024)</p>
            </div> : null
        }


        <div className={`${logincss.main_box}`}>
          {/* 卡片 */}
          <div className={`${logincss.main_box_item}`} >
            <div className={`${logincss.main_box_item_top}`}>
              <div className={`${logincss.main_box_item_top_index}`}>
                <h6>10</h6>
                <p>Exchange</p>
              </div>
              {/* <img src={icon27} className={`${logincss.main_box_item_top_img}`} alt="" /> */}
            </div>
            <div className={`${logincss.main_box_item_bottom}`}>
              <div className={`${logincss.main_box_item_bottom_bg}`}></div>
              <div className={`${logincss.main_box_item_bottom_bg2}`}></div>
              <div className={`${logincss.main_box_item_bottom_item}`}>
                <p>Exchange</p>
                <div className={`${logincss.main_box_item_bottom_item_right}`}>
                  1000
                  <img src={icon6} alt="" />
                </div>
              </div>
              <div className={`${logincss.main_box_item_bottom_item}`}>
                <p>Current value</p>
                <div className={`${logincss.main_box_item_bottom_item_right}`}>
                  $1000
                </div>
              </div>
              <div className={`${logincss.main_box_item_bottom_submit}`} onClick={() => {
                setOpen(true);
              }}>Not owned</div>
              <div className={`${logincss.main_box_item_bottom_tips}`}>
                Redeemable <span>30</span> days after opening
              </div>
            </div>
          </div>
          <div className={`${logincss.main_box_item}`}>
            <div className={`${logincss.main_box_item_top} ${logincss.main_box_item_top_1}`}>
              <div className={`${logincss.main_box_item_top_index} ${logincss.main_box_item_top_index_1}`}>
                <h6>10</h6>
                <p>Exchange</p>
              </div>
              <img src={icon27} className={`${logincss.main_box_item_top_img}`} alt="" />
            </div>
            <div className={`${logincss.main_box_item_bottom}`}>
              <div className={`${logincss.main_box_item_bottom_bg}`}></div>
              <div className={`${logincss.main_box_item_bottom_bg2}`}></div>
              <div className={`${logincss.main_box_item_bottom_item}`}>
                <p>Exchange</p>
                <div className={`${logincss.main_box_item_bottom_item_right}`}>
                  1000
                  <img src={icon6} alt="" />
                </div>
              </div>
              <div className={`${logincss.main_box_item_bottom_item}`}>
                <p>Current value</p>
                <div className={`${logincss.main_box_item_bottom_item_right}`}>
                  $1000
                </div>
              </div>
              <div className={`${logincss.main_box_item_bottom_submit} ${logincss.main_box_item_bottom_submit_1}`} onClick={() => {
                setOpen(true);
              }}>Not owned</div>
              <div className={`${logincss.main_box_item_bottom_tips}`}>
                Redeemable <span>30</span> days after opening
              </div>
            </div>
          </div>
          <div className={`${logincss.main_box_item}`}>
            <div className={`${logincss.main_box_item_top} ${logincss.main_box_item_top_2}`}>
              <div className={`${logincss.main_box_item_top_index} ${logincss.main_box_item_top_index_2}`}>
                <h6>10</h6>
                <p>Exchange</p>
              </div>
              <img src={icon28} className={`${logincss.main_box_item_top_img}`} alt="" />
            </div>
            <div className={`${logincss.main_box_item_bottom}`}>
              <div className={`${logincss.main_box_item_bottom_bg}`}></div>
              <div className={`${logincss.main_box_item_bottom_bg2}`}></div>
              <div className={`${logincss.main_box_item_bottom_item}`}>
                <p>Exchange</p>
                <div className={`${logincss.main_box_item_bottom_item_right}`}>
                  1000
                  <img src={icon6} alt="" />
                </div>
              </div>
              <div className={`${logincss.main_box_item_bottom_item}`}>
                <p>Current value</p>
                <div className={`${logincss.main_box_item_bottom_item_right}`}>
                  $1000
                </div>
              </div>
              <div className={`${logincss.main_box_item_bottom_submit} ${logincss.main_box_item_bottom_submit_1}`} onClick={() => {
                setOpen(true);
              }}>Not owned</div>
              <div className={`${logincss.main_box_item_bottom_tips}`}>
                Redeemable <span>30</span> days after opening
              </div>
            </div>
          </div>
          <div className={`${logincss.main_box_item}`}>
            <div className={`${logincss.main_box_item_top} ${logincss.main_box_item_top_3}`}>
              <div className={`${logincss.main_box_item_top_index} ${logincss.main_box_item_top_index_3}`}>
                <h6>10</h6>
                <p>Exchange</p>
              </div>
              <img src={icon29} className={`${logincss.main_box_item_top_img}`} alt="" />
            </div>
            <div className={`${logincss.main_box_item_bottom}`}>
              <div className={`${logincss.main_box_item_bottom_bg}`}></div>
              <div className={`${logincss.main_box_item_bottom_bg2}`}></div>
              <div className={`${logincss.main_box_item_bottom_item}`}>
                <p>Exchange</p>
                <div className={`${logincss.main_box_item_bottom_item_right}`}>
                  1000
                  <img src={icon6} alt="" />
                </div>
              </div>
              <div className={`${logincss.main_box_item_bottom_item}`}>
                <p>Current value</p>
                <div className={`${logincss.main_box_item_bottom_item_right}`}>
                  $1000
                </div>
              </div>
              <div className={`${logincss.main_box_item_bottom_submit} ${logincss.main_box_item_bottom_submit_1}`} onClick={() => {
                setOpen(true);
              }}>Not owned</div>
              <div className={`${logincss.main_box_item_bottom_tips}`}>
                Redeemable <span>30</span> days after opening
              </div>
            </div>
          </div>
          <div className={`${logincss.main_box_item}`}>
            <div className={`${logincss.main_box_item_top} ${logincss.main_box_item_top_4}`}>
              <div className={`${logincss.main_box_item_top_index} ${logincss.main_box_item_top_index_4}`}>
                <h6>10</h6>
                <p>Exchange</p>
              </div>
              <img src={icon30} className={`${logincss.main_box_item_top_img}`} alt="" />
            </div>
            <div className={`${logincss.main_box_item_bottom}`}>
              <div className={`${logincss.main_box_item_bottom_bg}`}></div>
              <div className={`${logincss.main_box_item_bottom_bg2}`}></div>
              <div className={`${logincss.main_box_item_bottom_item}`}>
                <p>Exchange</p>
                <div className={`${logincss.main_box_item_bottom_item_right}`}>
                  1000
                  <img src={icon6} alt="" />
                </div>
              </div>
              <div className={`${logincss.main_box_item_bottom_item}`}>
                <p>Current value</p>
                <div className={`${logincss.main_box_item_bottom_item_right}`}>
                  $1000
                </div>
              </div>
              <div className={`${logincss.main_box_item_bottom_submit} ${logincss.main_box_item_bottom_submit_1}`} onClick={() => {
                setOpen(true);
              }}>Not owned</div>
              <div className={`${logincss.main_box_item_bottom_tips}`}>
                Redeemable <span>30</span> days after opening
              </div>
            </div>
          </div>
          <div className={`${logincss.main_box_item}`}>
            <div className={`${logincss.main_box_item_top} ${logincss.main_box_item_top_5}`}>
              <div className={`${logincss.main_box_item_top_index} ${logincss.main_box_item_top_index_5}`}>
                <h6>10</h6>
                <p>Exchange</p>
              </div>
              <img src={icon31} className={`${logincss.main_box_item_top_img}`} alt="" />
            </div>
            <div className={`${logincss.main_box_item_bottom}`}>
              <div className={`${logincss.main_box_item_bottom_bg}`}></div>
              <div className={`${logincss.main_box_item_bottom_bg2}`}></div>
              <div className={`${logincss.main_box_item_bottom_item}`}>
                <p>Exchange</p>
                <div className={`${logincss.main_box_item_bottom_item_right}`}>
                  1000
                  <img src={icon6} alt="" />
                </div>
              </div>
              <div className={`${logincss.main_box_item_bottom_item}`}>
                <p>Current value</p>
                <div className={`${logincss.main_box_item_bottom_item_right}`}>
                  $1000
                </div>
              </div>
              <div className={`${logincss.main_box_item_bottom_submit} ${logincss.main_box_item_bottom_submit_1}`} onClick={() => {
                setOpen(true);
              }}>Not owned</div>
              <div className={`${logincss.main_box_item_bottom_tips}`}>
                Redeemable <span>30</span> days after opening
              </div>
            </div>
          </div> 

        </div>

        <div>
        </div>
      </div>
      

      <Modal
        width={866}
        open={open}
        centered={true}
        onCancel={() => {
          setOpen(false);
        }}
        closable={false}
        footer={null}
        title={null}
        style={{
          paddingBottom: "0px",
        }}
        destroyOnClose={true}
      >
        <div className={`${logincss.main_modal}`}>
          <div className={`${logincss.main_modal_title}`}>
            Product details
            <img src={close} alt="" onClick={() => {
              setOpen(false);
            }} />
          </div>
          <div className={`${logincss.main_modal_content}`}>
            <div className={`${logincss.main_modal_content_left}`}>
              <img src={icon30} alt="" />
            </div>
            <div className={`${logincss.main_modal_content_right}`}>
              <div className={`${logincss.main_modal_content_right_item}`}>
                <div className={`${logincss.main_modal_content_right_item_1}`}>Current value</div>
                <div className={`${logincss.main_modal_content_right_item_2}`}>$100</div>
                <div className={`${logincss.main_modal_content_right_item_3}`}></div>
              </div>
              <div className={`${logincss.main_modal_content_right_item}`}>
                <div className={`${logincss.main_modal_content_right_item_1}`}>Purchase price</div>
                <div className={`${logincss.main_modal_content_right_item_2}`}>100</div>
                <img src={icon6} alt="" className={`${logincss.main_modal_content_right_item_3}`} />
              </div>
              <div className={`${logincss.main_modal_content_right_buy}`}>Buy now</div>
            </div>
          </div>
          <div className={`${logincss.main_modal_tips}`}>
            <div className={`${logincss.main_modal_tips_title}`}>YIGAME Game equity</div>
            <p>1、Grade helicopter xx level;</p>
            <p>2. One set of top equipment (7 pieces) in this level segment, without additional upgrade attributes;</p>
            <p>3. In-game tokens 1000W;</p>
            <p>4. Game resources optional gift pack 10;</p>
            <p>5. The rest is subject to the game.</p>
          </div>

        </div>
      </Modal>

      <div className={`${logincss.footer}`}></div>
      <H5Footer tabIndex={3} />
    </div>
  );
}

export default About;
