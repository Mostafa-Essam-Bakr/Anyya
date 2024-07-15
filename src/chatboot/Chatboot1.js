import Iframe from "react-iframe";
import Aos from "aos";
import { useEffect } from "react";
import { GiRobotGolem } from "react-icons/gi";
import { FaRobot } from "react-icons/fa6";
import "../chatboot/Chat.css";
import cover from "../Assets/cover.jpg";

import { Link } from "react-router-dom";
export default function Ai() {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "linear" });
  }, []);
  return (
    <div className="parentaichat">
      <div>
        <img className="vvvv" src={cover} />{" "}
        <h1 className="hai" data-aos="fade-up">
          <GiRobotGolem />
          Business Advisor
        </h1>
        <div className="hsai" data-aos="fade-right">
          <div className="pbtnai">
            {" "}
            <button className="btnai">
              <Link to="/">Home</Link>
            </button>
            <button className="btnai">Chat boot</button>
            <button className="btnai">Results</button>
            <button className="btnai">My Acount</button>
            <GiRobotGolem />
          </div>
          <h1>
            Welcome to ANYA
            <br />
          </h1>

          <Iframe
            src="https://udify.app/chatbot/dU0acbVcVBQ6zIrN"
            style="width: 100%; height: 100%; min-height: 700px"
            frameborder="0"
            allow="microphone"
            className="aiframe"
          ></Iframe>
          <h3>
            You can search for any
            <br /> request you have and <br />
            you will be answered <br /> as quickly as possible
          </h3>
          <div>
            <div>
              <FaRobot />
              <div className="facepart"></div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
