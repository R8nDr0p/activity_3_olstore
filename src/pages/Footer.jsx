import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="mt-5 bg-dark text-white">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col ms-5">
                <h3 className="footer-head">Follow us</h3>
              </div>
            </div>
            <div className="row">
              <div className="col ms-5">
                <a className="footer-about" href="about.html">
                  About Us
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col ms-5 mt-4">
                <Link to={"/"} className="fw-bold">
                  <h1>Keyboard Palace</h1>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col text-end me-5">
                <a className="footer-social-buttons" href="#">
                  <i className="fa-brands fa-facebook fa-spin"></i>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col text-end me-5">
                <a className="footer-social-buttons" href="#">
                  <i className="fa-brands fa-instagram fa-flip"></i>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col text-end me-5">
                <a className="footer-social-buttons" href="#">
                  <i className="fa-brands fa-github fa-bounce"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
