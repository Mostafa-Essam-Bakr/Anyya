import Iframe from "react-iframe";
import Aos from "aos";
import { useEffect } from "react";
import { GiRobotGolem } from "react-icons/gi";
import { FaRobot } from "react-icons/fa6";
import "../chatboot/Chat.css";
import cover from "../Assets/cover.jpg";
import { IoMdArrowRoundBack } from "react-icons/io";

import { Link, Outlet } from "react-router-dom";
export default function Ai() {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "linear" });
  }, []);
  return (
    <div className="parentaichat" data-aos="fade-right">
      <Iframe
        src="https://udify.app/chatbot/kmgzyPCOfhZYQee3"
        style="width: 100%; height: 100%; min-height: 700px"
        frameborder="0"
        allow="microphone"
        className="aiframe"
      ></Iframe>
    </div>
  );
}
