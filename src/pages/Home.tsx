import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import './Home.css'
import { Login } from '../API' 
import iconCopy from '../images/copy.png'
import icon6 from '../images/icon6.png'
import icon7 from '../images/icon7.png'

function Home() { 

  const router = useNavigate()
 
  //  跳转例子
  const handleSubmit = () => { 
    router(`/hi/1111`)
  }
 
  const handleLoad = () => { 
    // 请求例子
        Login({
            inviteCode: 'exampleValue',
            userAddress: 'account',
            sign: 'sign',
            signMsg: 'signMsg',
        })
            .then((res: any) => {
                if (res.code === 200) { 
                }
            })
            .catch((err: any) => {
                console.log(err);
            })
            .finally(() => { 
            });
  }
  useEffect(() => {
    handleLoad()
  }, [])

  return (
    <div className="Home">
      <div className="Home_box">
        <div className="Home_tab">
          <div className="Home_tab_item Home_tab_item_on">Current account</div>
          <div className="Home_tab_item">Owns Yigame assets</div>
        </div>
        <div className="Home_tab2">
          <div className="Home_tab2_item">Personal wallet：3479357948594</div>
          <img className="Home_tab2_copy" src={iconCopy} alt="" /> 
          <div className="Home_tab2_line"></div>
          <div className="Home_tab2_item2">Wallet account：3479357948594</div>
          <img className="Home_tab2_copy" src={iconCopy} alt="" /> 
          <div className="Home_tab2_item3">
            Indonesia Region 2
            <span>【539583984】</span>
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
            <span>The game recharge needs to be prepaid to the game wallet in advance before it can be converted to the in-game ingots.</span>
          </div>
          <div className="Home_main_h2">
            About Token withdrawal:  
            <span>In-game coins can be withdrawn as tokens, but each withdrawal operation needs to be 14 days (336 hours) from the last redemption time.</span>
          </div>
          <div className="Home_main_h2">
          About Game coins Redemption:
            <span>Top-up coins are non-universal game currency and are redeemed and sent to bound characters.</span>
          </div>
        </div>
      </div> 
      <br />
      <br />
      <br />
    </div>
  )
}

export default Home
