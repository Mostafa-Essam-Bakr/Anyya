import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import StaggeredDropDown from "./Listmob";
import { Greeting } from "../chatboot/Login";
import { CiLogout } from "react-icons/ci";
import an from "../Assets/anaya.png";
export default function Nav() {
  const [sticky, Setsticky] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      Setsticky(window.scrollY > 150);
    };
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  });
  const savedName = localStorage.getItem("userName");
  function handleRemoveName() {
    localStorage.removeItem("userName");
    window.location.pathname = "/";
    // تحديث الحالة لإخفاء الاسم من العرض
  }
  return (
    <nav className="ParnetNav" id={`${sticky ? "sticky" : ""}`}>
      <h1>
        <button onClick={handleRemoveName} className="logouticon">
          {" "}
          <CiLogout />
        </button>
        <CgProfile />
        <div>{savedName}</div> <img src={an} alt="000" className="anyaaa" />
      </h1>
      <ul className="ulcenter">
        <li>
          {" "}
          <Link to="/Homechild">Home</Link>
        </li>{" "}
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          {" "}
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          {" "}
          <Link to="/Blog">Serveces</Link>
        </li>
      </ul>
      <StaggeredDropDown />
      <ul className="ulleft">
        <li>
          <Link to="https://github.com/Mostafa-Essam-Bakr">
            <IoLogoGithub />
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/mostafa-essam-1a7a231b4/">
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=elturkeym0@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail />
          </a>
        </li>
      </ul>
    </nav>
  );
}
