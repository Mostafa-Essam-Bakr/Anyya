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
        <h1>Say Hello</h1>
        <h2>
          Fill out the form below to get in touch with me. I'm always excited to
          hear about new opportunities and I'll do my best to respond to your
          inquiry within 24 hours.
        </h2>
        <form action="submit">
          <label>Full Name</label>
          <input placeholder=" Your Full Name" />
          <label>Email Address</label>
          <input placeholder=" Your E-mail" type="e-mail" required />
          <label>Your Message</label>
          <input
            placeholder=" Write tour message"
            type="Message"
            className="mesg"
          />
          <button type="submit">
            Send Me Message <MdMarkEmailUnread />
          </button>
        </form>
      </section>
      <ScrollProgress />
    </div>
  );
}
