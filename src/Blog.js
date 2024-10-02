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
      <h1>الخدمات</h1>
      <h2>لدينا تقديم خدمات ووسائل تساعدك كرائد اعمال</h2>
      <section className="sec9">
        <div>
          <MdDeveloperBoard />

          <h1>مواقع ذكاء اصطناعي</h1>

          <h2> مواقع للذكاء الاصطناعي الحديث</h2>
          <h3>1</h3>
        </div>
        <div>
          <TbUxCircle />

          <h1>تصميم وجهات ذكاء </h1>
          <h2> تصميم وجهات ذكاء بطريقة احترافية</h2>
          <h3>2</h3>
        </div>
        <div>
          <IoChatbubblesOutline />

          <h1>تطوير الشات</h1>
          <h2> تطوير الشات بطريقة افضل ما يمكن </h2>
          <h3>3</h3>
        </div>
        <div>
          <MdOutlineWeb />

          <h1>تصميمات تناسب مجالك</h1>
          <h2> تصميم من البداية حتى النهاية </h2>
          <h3>4</h3>
        </div>
        <div>
          <MdOutlineAppSettingsAlt />

          <h1>تطوير ابلكيشن شات</h1>
          <h2> تطوير ابلكيشن شات حتى النهاية فى مجالك </h2>
          <h3>5</h3>
        </div>
        <div>
          <TbSocial />

          <h1>الاعلان عنه بطريقة محترفة</h1>
          <h2> انشاء اعلانات ودعايا للذكاء الاصطناعي لديك </h2>
          <h3>6</h3>
        </div>
        <div>
          <TbApi />

          <h1>ربط ذكائك ب روبوت</h1>
          <h2> التخلص من مشاكل الربط </h2>
          <h3>7</h3>
        </div>
        <div>
          <SiBlueprint />

          <h1>طباعة الروبوت</h1>
          <h2> طباعة الروبوت ثلاثي الابعاد </h2>
          <h3>8</h3>
        </div>
      </section>{" "}
      <Sec4 />
      <ScrollProgress />
    </div>
  );
}
