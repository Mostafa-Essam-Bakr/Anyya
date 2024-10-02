import Count from "./Componant/Count+";
import me2 from "./Assets/Me2.jpg";
import iti from "./Assets/certifcate 2.png";
import edu from "./Assets/certifcate 3.png";
import level from "./Assets/certifcate 4.png";
import mesh from "./Assets/certifcate 1.jpg";
import { MdDeveloperMode } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";
import { MdWebStories } from "react-icons/md";
import Sec4 from "./Componant/Talk";
import ScrollProgress from "./Componant/Cercil";
import { useEffect } from "react";
import AOS from "aos";

export default function About() {
  useEffect(() => {
    // جعل الصفحة تبدأ من الأعلى
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 500, easing: "linear" });
  }, []);
  return (
    <div className="parentabut">
      <Count />
      <section className="sec5">
        <img src={me2} alt="i dont know" />
        <div>
          <h1>
            A passionate web <span>Developer</span> turning <span>Ideas</span>{" "}
            into
            <br /> visually stunning, user-friendly websites.
          </h1>
          <p>
            Welcome! I am Mustafa, a certified digital designer and developer,
            with more than four years of work experience. <br />I started in my
            room and became a professional in web development
            <br /> using the popular React node js. Contrary to the popular
            <br /> belief that AI will lead to web development through
            programming, <br />I was able to exploit this to develop my skills
            and take AI as
            <br /> a tool to develop my speed and innovation.
          </p>
        </div>
      </section>
      <section className="sec6">
        <div>
          <h1>Education & Experience</h1>
          <h3>
            Established history of success in design and development,
            consistently delivering valuable insights and driving significant
            results.
          </h3>
          <div className="ed-ex">
            <div>
              {" "}
              <h1 data-aos="flip-up">
                iTi Web developer <img src={iti} alt="" />
              </h1>
              <h2 data-aos="fade-right"> (July 2021 – Sep 2021)</h2>
              <h3 data-aos="zoom-in-right">
                WEB DEVELOPER ITI - [Al-Mansoura-Egypt]
                <br /> • Experience in React JS framework to develop Dashboard.
                <br /> • Experience in React JS for creating interactive UI
                based on design Requirements from scratch.
                <br /> • Working with state management and fetching data using
                Restful API & Redux.
                <br /> • Experience with React Native framework to develop or
                revamp existing apps from scratch.
                <br /> • Research industry trends and websites to provide
                top-quality design. <br />• Workflow tools : HTML, CSS,
                Bootstrap, JQUERY, and GIT{" "}
              </h3>
            </div>
            <div>
              <h1 data-aos="flip-up">
                University of
                <br /> [Misr Higher Institute
                <br /> For Commerce & Computers] <img src={edu} alt="" />
              </h1>
              <h2 data-aos="fade-right">Graduated: July 2023</h2>
              <h3 data-aos="zoom-in-right">
                Bachelor MANAGEMENT INFOMATION SYSTEM
                <br /> Final grade [excellent with honors]
                <br /> University of [Misr Higher Institute For Commerce &
                Computers] [AL-Mansoura - Egypt]
                <br /> Relevant Coursework: Web Development, Data Structures,
                Algorithms, Software Engineering.{" "}
              </h3>
            </div>
            <div>
              <h1 data-aos="flip-up">
                {" "}
                4 Level 1 English <img src={level} alt="" />
              </h1>
              <h2 data-aos="fade-right"> ( Jun 2022 - Jun 2023 )</h2>
              <h3 data-aos="zoom-in-right">
                I studied 6 levels and 3 conversation levels.
                <br /> I mastered the language in a proper way,
                <br /> which made me good at speaking,
                <br />
                reading, and expressing properly.
              </h3>
            </div>
            <div>
              <h1 data-aos="flip-up">
                Meshwarey <img src={mesh} alt="" />
              </h1>
              <h2 data-aos="fade-right"> ( Des 2020 - Jun 2021 )</h2>
              <h3 data-aos="zoom-in-right">
                I trained on how to deal in any work environment, <br /> acquire
                communication skills <br />, participate in work <br />, develop
                my personal skills, <br /> work proficiency, <br /> and how to
                deal under any pressure.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="sec7">
        <h1>Serveses</h1>
        <h2>
          My Services Pave the Way for Exceptional Experiences,
          <br /> Where Quality and Commitment Define Every Interaction."
        </h2>
        <div className="serv">
          <div data-aos="flip-right">
            <MdDeveloperMode />

            <h3>Website development</h3>
            <h4>
              I can develop your website as quickly as possible, with the
              highest quality, and free of errors
            </h4>
          </div>
          <div data-aos="flip-right">
            {" "}
            <AiFillApi />
            <h3>Fetch API</h3>
            <h4>
              I can connect to any API, fetch data, and request data through it
            </h4>
          </div>
          <div data-aos="flip-right">
            {" "}
            <MdWebStories />
            <h3>Website design</h3>
            <h4>
              I can design and implement any software idea and turn it into a
              complete website
            </h4>
          </div>
        </div>
      </section>
      <Sec4 />
      <ScrollProgress />
    </div>
  );
}
