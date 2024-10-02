import { Link, NavLink, Outlet } from "react-router-dom";
import st from "./Assets/1st.jpg";
import "./chatboot/Chat.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import cover from "./Assets/cover22.jpg";

export default function Start() {
  return (
    <div className="pstart">
      <img src={cover} alt="1" className="COVER0" />
      <div className="parentbtn">
        <button style={{ background: "none", border: "none" }}>
          <Link to="/Login" className="btn1">
            Start
            <br /> Murshid.Ai
          </Link>
        </button>

        <button style={{ background: "none", border: "none" }}>
          <Link to="/About" className="btn1">
            Subscribe
          </Link>
        </button>
      </div>{" "}
    </div>
  );
}
