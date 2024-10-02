import { useEffect } from "react";
import pro1 from "./Assets/pro1.png";
import pro2 from "./Assets/pro2.png";
import pro3 from "./Assets/pro3.png";
import pro4 from "./Assets/pro4.png";
import pro5 from "./Assets/pro5.png";
import pro6 from "./Assets/pro6.png";

import Some from "./Assets/some...png";
import ScrollProgress from "./Componant/Cercil";
import Sec4 from "./Componant/Talk";
import { Link } from "react-router-dom";
import AOS from "aos";
import Ai from "./chatboot/Chatboot1";

export default function Projects() {
  useEffect(() => {
    // جعل الصفحة تبدأ من الأعلى
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 500, easing: "linear" });
  }, []);
  return (
    <div className="parentaprojct">
      <Ai />
    </div>
  );
}
