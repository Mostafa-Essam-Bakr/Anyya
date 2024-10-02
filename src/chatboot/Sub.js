import { Link } from "react-router-dom";
import { IoPlayBackOutline } from "react-icons/io5";

export default function Sub() {
  return (
    <div className="parentsub">
      <div className="parentsubch">
        <div className="ch1">
          <h1>أشترك الأن</h1>
          <Link to="/About">مجاناً</Link>
          <Link to="/About">200 ريال شهر 1</Link>
        </div>
        <div className="ch2">
          <h1>أشترك الأن</h1>
          <Link to="/About">مجاناً</Link>
          <Link to="/About">الابتكار</Link>
        </div>

        <div className="ch3">
          <h1>أشترك الأن</h1>
          <Link to="/About">مجاناً</Link>
          <Link to="/About">أجابات غير محدودة </Link>
        </div>
        <div className="ch4">
          <h1>أشترك الأن</h1>
          <Link to="/About">مجاناً</Link>
          <Link to="/About"> كلمات لكل اجابة </Link>
        </div>
        <div className="ch5">
          <h1>أشترك الأن</h1>
          <Link to="/About">مجاناً</Link>
          <Link to="/About">بيانات وزارة التجارة</Link>
        </div>
      </div>
    </div>
  );
}
