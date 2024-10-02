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
import CV from "./CV.pdf";
import ScrollProgress from "./Componant/Cercil";
import Skills from "./Componant/Skiils";
import Sec4 from "./Componant/Talk";
import Hi from "./Componant/Hi";
import { useEffect } from "react";
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
      <section className="sec1">
        <div className="pimg">
          <img src={Me} alt="i don nknow" />
          <h1>Mostafa Essam</h1>
          <h4>
            {" "}
            React Developer <br />
            with a strong foundation in JavaScript, React and front-end
            development principles.
          </h4>
          <ul className="ulperson">
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
        </div>
        <div className="pletter">
          <div className="pletterchild">
            <p>
              {" "}
              I am React Developer with a strong foundation in JavaScript, React
              and front-end development principles. Seeking to leverage my
              skills in a dynamic team environment to contribute to innovative
              web applications and drive user engagement .
            </p>
            <h3>
              <IoIosCheckmarkCircle />
              Available for work
            </h3>
            <a href={CV} download>
              Download CV
            </a>
          </div>
          <div className=" parentaouto">
            <AutoPlay />
          </div>
        </div>
        <div className="ptrannig"></div>
      </section>
      <section className="sec2">
        <img
          src={Some}
          alt="i don nknow"
          className="some"
          data-aos="fade-right"
        />

        <div className="parentproduct">
          <div data-aos="fade-up">
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
          <div data-aos="fade-up">
            <a
              href="https://mostafa-essam-bakr.github.io/My-Hottel/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pro2} alt="i don nknow" /> <button> View</button>
              <h1> Tourism and hotels</h1>
            </a>
          </div>
          <div data-aos="fade-up">
            <a
              href="https://mostafa-essam-bakr.github.io/Delivery0y/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pro3} alt="i don nknow" /> <button> View</button>
              <h1> Home delivery</h1>
            </a>
          </div>
          <div data-aos="fade-up">
            <a
              href="https://mostafa-essam-bakr.github.io/My-Hottel/#/Place"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pro4} alt="i don nknow" /> <button> View</button>
              <h1> full Servese</h1>
            </a>
          </div>
        </div>
      </section>
      <Skills />
      <Sec4 />
      <Hi />
      <ScrollProgress />
    </div>
  );
}
