import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Home.css";
import { Login } from "../API";
import iconCopy from "../images/copy.png";
import icon4 from "../images/icon13.png";
import icon6 from "../images/icon6.png";
import icon7 from "../images/icon7.png";
import icon10 from "../images/icon10.png";
import icon11 from "../images/icon11.png";
import icon12 from "../images/icon12.png";
import icon14 from "../images/icon14.png";
import icon15 from "../images/icon15.png";
import icon16 from "../images/icon16.png";
import icon17 from "../images/icon17.png";
import icon18 from "../images/icon18.png";
import close from "../images/close.png";
import { Modal, Select, Tooltip } from "antd";

function Home() {
  const router = useNavigate();

  //  跳转例子
  const handleSubmit = () => {
    router(`/hi/1111`);
  };

  const handleLoad = () => {
    // 请求例子
    Login({
      inviteCode: "exampleValue",
      userAddress: "account",
      sign: "sign",
      signMsg: "signMsg",
    })
      .then((res: any) => {
        if (res.code === 200) {
        }
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {});
  };
  useEffect(() => {
    handleLoad();
  }, []);

  const [open, setOpen] = useState(false);
  const handleConfirm = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = useState(false);

  const [isShowMaximum, setIsShowMaximum] = useState(false);
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div className="Home">
      {/* h5端 */}
      <div className=" Home-h5">
        <div className="Home_box">
          <div className="Home_tab">
            <div
              className={
                tabIndex === 1
                  ? "Home_tab_item Home_tab_item_on"
                  : "Home_tab_item"
              }
              onClick={() => setTabIndex(1)}
            >
              Current account
            </div>
            <div
              className={
                tabIndex === 2
                  ? "Home_tab_item Home_tab_item_on"
                  : "Home_tab_item"
              }
              onClick={() => setTabIndex(2)}
            >
              Owns Yigame assets
            </div>
          </div>
          <div className="Home_info">
            <div className="Home_info_left">
              <div className="Home_info_left_item Home_info_left_item_1">
                <h5>Personal W : </h5>
                <p>321452145459304</p>
              </div>
              <div className="Home_info_left_item">
                <h5>Personal W : </h5>
                <p>321452145459304</p>
              </div>
            </div>
            <div className="Home_info_right">  
              <div className="Home_info_right_box"> 
                <div className="Home_info_right_item">
                  <div className="Home_info_right_item_1">rqjwiou21uio</div>
                  <div className="Home_info_right_item_2">YiGame</div>
                </div>
                <div className="Home_info_right_item">
                  <div className="Home_info_right_item_1">Indonesia</div>
                  <div className="Home_info_right_item_2">[area]</div>
                </div>
                <div className="Home_info_right_item">
                  <div className="Home_info_right_item_1">Region 2</div>
                  <div className="Home_info_right_item_2">[Zone]</div>
                </div>
                <div className="Home_info_right_item"> 
                  <div className="Home_info_right_item_2">[ Click to  Change  ]</div>
                </div>
              </div>
              <div className="Home_info_right_item2">
                Toggle
                <img src={icon18} alt=""  />
              </div>
            </div>
          </div>
          <div className="Home_info2">
            Exchange
          </div>
        </div>
      </div>

      {/* pc端 */}
      <div className="Home-pc">
        <div className="Home_tab2">
          <div className="Home_tab2_item">Personal wallet：3479357948594</div>
          <img className="Home_tab2_copy" src={iconCopy} alt="" />
          <div className="Home_tab2_line"></div>
          <div className="Home_tab2_item2">Wallet account：3479357948594</div>
          <img className="Home_tab2_copy" src={iconCopy} alt="" />
          <div className="Home_tab2_item3" onClick={() => setOpen(true)}>
            Indonesia Region 2<span>【539583984】</span>
          </div>
        </div>
        <div className="Home_main">
          <div className="Home_main_bg">
            <div className="Home_main_bg_1">2024-12-31 13:21:32</div>
            <div className="Home_main_bg_2">Extraction</div>
            <div className="Home_main_bg_3">2024-12-31 13:21:32</div>
            <div className="Home_main_bg_4">Currency exchange</div>
            <div className="Home_main_bg_5">click to connect</div>
            <div className="Home_main_bg_6">Wallet</div>
            <div className="Home_main_bg_7">
              <img src={icon6} alt="" />
              5000
            </div>
            <div className="Home_main_bg_8">
              <img src={icon7} alt="" />
              5000
            </div>
          </div>
          <div className="Home_main_h1">About All</div>
          <div className="Home_main_h2">
            About token recharge:
            <span>
              The game recharge needs to be prepaid to the game wallet in
              advance before it can be converted to the in-game ingots.
            </span>
          </div>
          <div className="Home_main_h2">
            About Token withdrawal:
            <span>
              In-game coins can be withdrawn as tokens, but each withdrawal
              operation needs to be 14 days (336 hours) from the last redemption
              time.
            </span>
          </div>
          <div className="Home_main_h2">
            About Game coins Redemption:
            <span>
              Top-up coins are non-universal game currency and are redeemed and
              sent to bound characters.
            </span>
          </div>
        </div>
      </div>

      {/* Switching region弹框 */}
      <Modal
        width={520}
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
        <div className="Home_switching">
          <div className="Home_switching_title">
            Switching region
            <img src={close} alt="" onClick={() => {}} />
          </div>
          <div className="Home_switching_tips">
            <h6>Currently bound to the game hall and character</h6>
            <p>
              <span className="Home_switching_p_1"></span>
              <span className="Home_switching_p_2">Current area：</span>
              <span className="Home_switching_p_3">Indonesia</span>
            </p>
            <p>
              <span className="Home_switching_p_1"></span>
              <span className="Home_switching_p_2">Current game suit：</span>
              <span className="Home_switching_p_3">Zone 2</span>
            </p>
            <p>
              <span className="Home_switching_p_1"></span>
              <span className="Home_switching_p_2">Role Name：</span>
              <span className="Home_switching_p_3">349893859fsjf</span>
            </p>
          </div>
          <div>
            <div className="Home_switching_title2">
              <span></span>Change to
            </div>
            <div className="Home_switching_title3">Change area</div>
            <div className="Home_switching_select">
              <Select
                defaultValue="lucy"
                style={{ width: "100%", color: "#fff" }}
                onChange={(e: any) => {
                  console.log(e);
                }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </div>
            <div className="Home_switching_title3">Change of suit</div>
            <div className="Home_switching_select">
              <Select
                defaultValue="lucy"
                style={{ width: "100%", color: "#fff" }}
                onChange={(e: any) => {
                  console.log(e);
                }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </div>
            <div className="Home_switching_title3">Role Name</div>
            <div className="Home_switching_select Home_switching_select2">
              <input type="text" placeholder="Please enter" />
              0/200
            </div>
          </div>
          <div className="Home_switching_submit" onClick={handleConfirm}>
            Confirm binding
          </div>
        </div>
      </Modal>
      {/* Proceed with swap弹框 */}
      <Modal
        width={1000}
        open={open2}
        centered={true}
        onCancel={() => {
          setOpen2(false);
        }}
        closable={false}
        footer={null}
        title={null}
        style={{
          paddingBottom: "0px",
        }}
        destroyOnClose={true}
      >
        <div className="Home_Proceed">
          <div className="Home_Proceed_title">
            Proceed with swap
            <img
              src={close}
              className="Home_Proceed_img"
              alt=""
              onClick={() => {}}
            />
            <img
              src={icon10}
              className="Home_Proceed_icon"
              alt=""
              onClick={() => {}}
            />
          </div>
          <div className="Home_Proceed_tips">
            Proceeding to swap with the following details
          </div>
          <div className="Home_Proceed_box">
            <div className="Home_Proceed_box_item">
              <img src={icon6} alt="" />
              YI Coin
              <input type="text" />
            </div>
            <div className="Home_Proceed_box_line">
              <div className="Home_Proceed_box_line_1"></div>
              <img src={icon11} alt="" />
              <div className="Home_Proceed_box_line_1"></div>
            </div>
            <div className="Home_Proceed_box_item">
              <img src={icon7} alt="" />
              XI Coin
              <input type="text" />
            </div>
          </div>
          <div className="Home_Proceed_box_item_text">
            1 YI Coin=100 XI Coin
          </div>
          <div className="Home_Proceed_select">
            <div
              className="Home_Proceed_select_item"
              onClick={() => {
                setIsShowMaximum(!isShowMaximum);
              }}
            >
              Maximum Transfer Amount
              <Tooltip title="说明说明说明说明说明说明说明说明说明说明说明说明说明">
                <img
                  src={icon12}
                  alt=""
                  className="Home_Proceed_select_label_iis"
                />
              </Tooltip>
              <div className="Home_Proceed_select_label_flex"></div>
              <img
                src={icon6}
                alt=""
                className="Home_Proceed_select_label_coin"
              />
              <div className="Home_Proceed_select_label_name">348 ($329)</div>
              <img
                src={isShowMaximum ? icon15 : icon4}
                alt=""
                className="Home_Proceed_select_label_arr"
              />
            </div>
            <div
              className="Home_Proceed_select_box"
              style={{ display: isShowMaximum ? "block" : "none" }}
            >
              <div className="Home_Proceed_select_box_1">
                <div className="Home_Proceed_select_box_1_lab">Swap Route</div>
                <img
                  src={icon6}
                  alt=""
                  className="Home_Proceed_select_box_1_1"
                />
                <img
                  src={icon16}
                  alt=""
                  className="Home_Proceed_select_box_1_2"
                />
                <img
                  src={icon7}
                  alt=""
                  className="Home_Proceed_select_box_1_3"
                />
              </div>
              <div className="Home_Proceed_select_box_1">
                <div className="Home_Proceed_select_box_1_lab">
                  Swap Fee (Minimum)
                </div>
              </div>
              <div className="Home_Proceed_select_box_2">
                <img
                  src={icon14}
                  alt=""
                  className="Home_Proceed_select_box_2_1"
                />
                <div className="Home_Proceed_select_box_1_lab">
                  Swap Fee (Minimum)
                </div>
                <img
                  src={icon6}
                  alt=""
                  className="Home_Proceed_select_box_2_2"
                />
                <div className="Home_Proceed_select_box_2_right">
                  <h4>348</h4>
                  <h5>($0.238)</h5>
                </div>
              </div>
              <div className="Home_Proceed_select_box_2">
                <img
                  src={icon14}
                  alt=""
                  className="Home_Proceed_select_box_2_1"
                />
                <div className="Home_Proceed_select_box_1_lab">
                  Swap Fee (Minimum)
                </div>
                <img
                  src={icon6}
                  alt=""
                  className="Home_Proceed_select_box_2_2"
                />
                <div className="Home_Proceed_select_box_2_right">
                  <h4>348</h4>
                  <h5>($0.238)</h5>
                </div>
              </div>
              <div className="Home_Proceed_select_box_3">
                <div className="Home_Proceed_select_box_3_lab">
                  Swap Fee (Minimum)
                </div>

                <Tooltip title="说明说明说明说明说明说明说明说明说明说明说明说明说明">
                  <img
                    src={icon17}
                    alt=""
                    className="Home_Proceed_select_box_3_img"
                  />
                </Tooltip>
                <div className="Home_Proceed_select_box_3_right">0.5%</div>
              </div>
              <div className="Home_Proceed_select_box_3">
                <div className="Home_Proceed_select_box_3_lab">
                  Swap Fee (Minimum)
                </div>
                <Tooltip title="说明说明说明说明说明说明说明说明说明说明说明说明说明">
                  <img
                    src={icon17}
                    alt=""
                    className="Home_Proceed_select_box_3_img"
                  />
                </Tooltip>
                <div className="Home_Proceed_select_box_3_right">
                  0.5%
                  <span>(0.2%)</span>
                </div>
              </div>
              <div className="Home_Proceed_select_box_4">
                <div className="Home_Proceed_select_box_4_left"></div>
                <div className="Home_Proceed_select_box_4_right">
                  <Tooltip title="说明说明说明说明说明说明说明说明说明说明说明说明说明">
                    <img
                      src={icon17}
                      alt=""
                      className="Home_Proceed_select_box_4_img"
                    />
                  </Tooltip>
                  Average Tradability
                </div>
              </div>
            </div>
          </div>
          <div
            className="Home_switching_submit"
            onClick={() => {
              setOpen2(false);
            }}
          >
            Swap
          </div>
        </div>
      </Modal>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;
