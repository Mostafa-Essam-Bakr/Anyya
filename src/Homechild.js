import Me from "./Assets/Me.jpg";
import pro1 from "./Assets/pro1.png";
import pro2 from "./Assets/pro2.png";
import pro3 from "./Assets/pro3.png";
import pro4 from "./Assets/pro4.png";
import Some from "./Assets/some...png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import AutoPlay from "./Componant/Autoplay";
import ScrollProgress from "./Componant/Cercil";
import Skills from "./Componant/Skiils";
import Sec4 from "./Componant/Talk";
import Hi from "./Componant/Hi";
import { useEffect } from "react";
import Sub from "./chatboot/Sub";
export default function Homechild() {
  useEffect(() => {
    // جعل الصفحة تبدأ من الأعلى
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 500, easing: "linear" });
  }, []);
  return (
    <div className="parentHomechild">
      {" "}
      <Sub />
      <div className="ptrannig"></div>
      <Sec4 />
      <Hi />
      <ScrollProgress />
    </div>
  );
}
