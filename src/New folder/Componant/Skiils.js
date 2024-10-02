import log1 from "../Assets/log1.png";
import log2 from "../Assets/log2.png";
import log3 from "../Assets/log3.png";
import log4 from "../Assets/log4.png";
import log5 from "../Assets/log5.png";
import log6 from "../Assets/log6.png";
import log7 from "../Assets/log7.png";
import log8 from "../Assets/log8.png";
import log9 from "../Assets/log9.png";
import Some from "../Assets/some2.png";

export default function Skills() {
  return (
    <div className="parent-skills">
      <img
        src={Some}
        alt="i don nknow"
        className="some"
        data-aos="fade-right"
      />

      <h1>Skills</h1>
      <section className="sec3-skills">
        <div data-aos="flip-left">
          <img src={log8} alt="idon know" />
          <h3>Html5 JavaScript Css3 </h3>
        </div>
        <div data-aos="flip-left">
          <img src={log6} alt="idon know" /> <h3>React </h3>
        </div>
        <div data-aos="flip-left">
          <img src={log4} alt="idon know" /> <h3>Node js</h3>
        </div>
        <div data-aos="flip-left">
          <img src={log1} alt="idon know" /> <h3>Laravel</h3>
        </div>
        <div data-aos="flip-left">
          <img src={log7} alt="idon know" /> <h3>Bootstrap</h3>
        </div>
        <div data-aos="flip-left">
          <img src={log3} alt="idon know" /> <h3>Api fetchig</h3>
        </div>
        <div data-aos="flip-left">
          <img src={log5} alt="idon know" /> <h3>J query</h3>
        </div>
        <div data-aos="flip-left">
          <img src={log2} alt="idon know" /> <h3>Tailwind </h3>
        </div>
        <div data-aos="flip-left">
          <img src={log9} alt="idon know" /> <h3>AOS</h3>
        </div>
      </section>
    </div>
  );
}
