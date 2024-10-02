import { MdMarkEmailUnread } from "react-icons/md";
import ScrollProgress from "./Componant/Cercil";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // جعل الصفحة تبدأ من الأعلى
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="parentacontac">
      <section className="sec8">
        <h1>مرحباً</h1>
        <h2>
          املأ النموذج أدناه للتواصل معنا. نحن متحمسون دائمًا لسماع الفرص
          الجديدة وسنبذل قصارى جهدنا للرد على استفسارك في غضون 24 ساعة.
        </h2>
        <form action="submit">
          <label>الاسم بالكامل</label>
          <input placeholder=" Your Full Name" />
          <label>الايميل</label>
          <input placeholder=" Your E-mail" type="e-mail" required />
          <label>اترك رسالتك</label>
          <input
            placeholder=" Write tour message"
            type="Message"
            className="mesg"
          />
          <button type="submit">
            ارسل <MdMarkEmailUnread />
          </button>
        </form>
      </section>
      <ScrollProgress />
    </div>
  );
}
