import { Link } from "react-router-dom";

export default function Sec4() {
  return (
    <div className="talk">
      <section className="sec4">
        {" "}
        <h1>Are You Ready to kickstart your project with a touch of magic?</h1>
        <p>
          Reach out and let's make it happen ✨. I'm also available for
          full-time or Part-time opportunities to push the boundaries of design
          and deliver exceptional work.
        </p>
        <Link to="/Contact">Let's Talk </Link>
      </section>
    </div>
  );
}
