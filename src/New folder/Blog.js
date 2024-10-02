import { MdDeveloperBoard } from "react-icons/md";
import { TbUxCircle } from "react-icons/tb";
import { IoChatbubblesOutline } from "react-icons/io5";
import { TbSocial } from "react-icons/tb";

import { MdOutlineWeb } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { SiBlueprint } from "react-icons/si";

import { MdOutlineAppSettingsAlt } from "react-icons/md";
import ScrollProgress from "./Componant/Cercil";
import Sec4 from "./Componant/Talk";

export default function Blog() {
  return (
    <div className="parentablog">
      {" "}
      <h1>Services</h1>
      <h2>Provide Wide Range of Digital Services</h2>
      <section className="sec9">
        <div>
          <MdDeveloperBoard />

          <h1>Web Development</h1>

          <h2>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </h2>
          <h3>1</h3>
        </div>
        <div>
          <TbUxCircle />

          <h1>UI / UX DESIGN</h1>
          <h2>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </h2>
          <h3>2</h3>
        </div>
        <div>
          <IoChatbubblesOutline />

          <h1>Chat Development</h1>
          <h2>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </h2>
          <h3>3</h3>
        </div>
        <div>
          <MdOutlineWeb />

          <h1>Web Design</h1>
          <h2>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </h2>
          <h3>4</h3>
        </div>
        <div>
          <MdOutlineAppSettingsAlt />

          <h1>App Development</h1>
          <h2>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </h2>
          <h3>5</h3>
        </div>
        <div>
          <TbSocial />

          <h1>Marketing</h1>
          <h2>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </h2>
          <h3>6</h3>
        </div>
        <div>
          <TbApi />

          <h1>Fetch API</h1>
          <h2>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </h2>
          <h3>7</h3>
        </div>
        <div>
          <SiBlueprint />

          <h1>Router Printing</h1>
          <h2>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </h2>
          <h3>8</h3>
        </div>
      </section>{" "}
      <Sec4 />
      <ScrollProgress />
    </div>
  );
}
