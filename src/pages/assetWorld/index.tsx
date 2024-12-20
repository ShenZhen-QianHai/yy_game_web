import React from "react";
import logincss from "./index.module.css";
import logo from "../../images/logo.png";
import icon2 from "../../images/icon2.png";
import icon4 from "../../images/icon4.png";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const handleLogin = () => {};
  const handleForget = () => {};
  const handleCreate = () => {};

  const items = [
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

  return (
    <div className={`${logincss.box}`}> 
 
      <div className={`${logincss.main}`}>
        111

        <div>
        <Dropdown menu={{ items }} placement="bottom" arrow trigger={["click"]}> 
          222
        </Dropdown>
        </div>
      </div>
      
      <div className={`${logincss.footer}`}></div>
    </div>
  );
}

export default About;
