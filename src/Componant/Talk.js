import { Link } from "react-router-dom";

export default function Sec4() {
  return (
    <div className="talk">
      <section className="sec4">
        {" "}
        <h1>هل أنت مستعد لبدء مشروعك بلمسة من السحر؟</h1>
        <p>
          تواصل معنا ودعنا نجعل الأمر يحدث ✨. نحن أيضًا متاحيين للرد علة
          الشكاوي ة الاستفسارات وتقديم عمل استثنائي.
        </p>
        <Link to="/Contact">تحدث معنا </Link>
      </section>
    </div>
  );
}
