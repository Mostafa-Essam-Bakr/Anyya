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
      <section className="sec2">
        <h1>Projects</h1>
        <h2>
          Check out my portfolio of top-notch projects that
          <br /> I've delivered to both clients and the community.
          <br /> I'm more than happy to answer any questions you may have about
          how we can collaborate to achieve your objectives.
          <br />
          Feel free to get in touch with me.
        </h2>
        <img src={Some} alt="i don nknow" className="some" />

        <div className="parentproduct">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <a
              href="https://mostafa-essam-bakr.github.io/Out-fit-leg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pro1} alt="i don nknow" />
              <button> View</button>
              <h1> Buy and browse shoes</h1>
            </a>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <a
              href="https://mostafa-essam-bakr.github.io/My-Hottel/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pro2} alt="i don nknow" /> <button> View</button>
              <h1> Tourism and hotels</h1>
            </a>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <a
              href="https://mostafa-essam-bakr.github.io/Delivery0y/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pro3} alt="i don nknow" /> <button> View</button>
              <h1> Home delivery</h1>
            </a>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <a
              href="https://mostafa-essam-bakr.github.io/My-Hottel/#/Place"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pro4} alt="i don nknow" /> <button> View</button>
              <h1> full Servese</h1>
            </a>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <a
              href="https://mostafa-essam-bakr.github.io/My-Hottel/#/Book"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pro5} alt="i don nknow" /> <button> View</button>
              <h1>Book your place</h1>
            </a>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <a
              href="https://mostafa-essam-bakr.github.io/Delivery0y/#/Restrant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pro6} alt="i don nknow" /> <button> View</button>
              <h1>Book your Restrant</h1>
            </a>
          </div>
        </div>
      </section>
      <Sec4 />
    </div>
  );
}
