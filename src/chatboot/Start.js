import { Link } from "react-router-dom";
import st from "../Assets/1st.jpg";
import "../chatboot/Chat.css";

export default function Start() {
  return (
    <div>
      <img src={st} alt="1" className="covers" />
      <div className="parentbtn">
        <button style={{ background: "none", border: "none" }}>
          <Link to="/Start" className="btn1">
            Start Business Advisor
          </Link>
        </button>
      </div>
    </div>
  );
}
