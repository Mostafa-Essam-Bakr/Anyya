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
import { IoPlayBackOutline } from "react-icons/io5";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

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
      <div className="payment">
        <MDBContainer
          className="py-5"
          fluid
          style={{
            backgroundImage:
              "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
          }}
        >
          <MDBRow className=" d-flex justify-content-center">
            <MDBCol md="10" lg="8" xl="5">
              <MDBCard className="rounded-3">
                <MDBCardBody className="p-4">
                  <div className="text-center mb-4">
                    <h6>الأشتراك</h6>
                  </div>
                  <p className="fw-bold mb-4 pb-2">حفظ:</p>
                  <div className="d-flex flex-row align-items-center mb-4 pb-1">
                    <img
                      className="img-fluid"
                      src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                    />
                    <div className="flex-fill mx-3">
                      <div className="form-outline">
                        <MDBInput
                          label="رقم الحساب"
                          id="form1"
                          type="text"
                          size="lg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4 pb-1">
                    <img
                      className="img-fluid"
                      src="https://img.icons8.com/color/48/000000/visa.png"
                    />
                    <div className="flex-fill mx-3">
                      <div className="form-outline">
                        <MDBInput
                          label="رقم البطاقة "
                          id="form2"
                          type="text"
                          size="lg"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="fw-bold mb-4"> اضافة كارت جديد</p>
                  <MDBInput
                    label="الرقم السري"
                    id="form3"
                    type="text"
                    size="lg"
                  />
                  <MDBRow className="my-4">
                    <MDBCol size="7">
                      <MDBInput
                        label="رقم البطاقة"
                        id="form4"
                        type="text"
                        size="lg"
                      />
                    </MDBCol>
                    <MDBCol size="3">
                      <MDBInput
                        label="Expire"
                        id="form5"
                        type="password"
                        size="lg"
                        placeholder="MM/YYYY"
                      />
                    </MDBCol>
                    <MDBCol size="2">
                      <MDBInput
                        label="CVV"
                        id="form6"
                        type="password"
                        size="lg"
                        placeholder="CVV"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBBtn color="success" size="lg" block>
                    <Link to="/Start"> Add card</Link>
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <ScrollProgress />
    </div>
  );
}
