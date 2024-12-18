import React from "react";
import logincss from "./index.module.css";
import logo from "../../images/logo.png";
import icon2 from "../../images/icon2.png";
import icon4 from "../../images/icon4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const handleLogin = () => {};
  const handleForget = () => {};
  const handleCreate = () => {};

  return (
    <div className={`${logincss.box}`}>
      <div className={`${logincss.box_top}`}>
        <div style={{ position: "relative" }}>
          <img
            onClick={() => {
              navigate("/");
            }}
            src={icon4}
            alt=""
            className={`${logincss.main_left_img}`}
          />
          Log in
        </div>
      </div>

      <img className={`${logincss.logo}`} src={logo} alt="" />
      <div className={`${logincss.main}`}>
        <div className={`${logincss.main_left}`}>
          <Swiper
            loop
            autoplay={{ delay: 2000 }}
            spaceBetween={0}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            pagination={true}
            className={`${logincss.main_left_Swiper}`}
          >
            {[1, 2, 3].map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <img
                  onClick={() => {}}
                  src={icon2}
                  alt=""
                  className={`${logincss.main_left_img}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`${logincss.main_right}`}>
          <div className={`${logincss.main_right_title}`}>Log in to World</div>
          <div className={`${logincss.main_right_from}`}>
            <div className={`${logincss.main_right_from_item}`}>
              <div className={`${logincss.main_right_from_label}`}>
                Account<span>*</span>
              </div>
              <input
                className={`${logincss.main_right_from_input}`}
                type="text"
                placeholder="Please enter Usename or Email address"
              />
            </div>
            <div className={`${logincss.main_right_from_item}`}>
              <div className={`${logincss.main_right_from_label}`}>
                Password<span>*</span>
              </div>
              <input
                className={`${logincss.main_right_from_input}`}
                type="text"
                placeholder="Please enter your password"
              />
            </div>
            <div
              className={`${logincss.main_right_from_submit}`}
              onClick={handleLogin}
            >
              Log in
            </div>
            <div
              className={`${logincss.main_right_from_item} ${logincss.main_right_from_item2}`}
            >
              <div className={`${logincss.main_right_from_label}`}></div>
              <div className={`${logincss.main_right_from_footer}`}>
                <div
                  className={`${logincss.main_right_from_footer_1}`}
                  onClick={handleForget}
                >
                  Forget password?
                </div>
                <div
                  className={`${logincss.main_right_from_footer_2}`}
                  onClick={handleCreate}
                >
                  Create an account
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${logincss.footer}`}></div>
    </div>
  );
}

export default About;
