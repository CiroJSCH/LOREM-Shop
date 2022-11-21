// Styles
import "../styles/footer.css";

// Icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

// ! TEMPLATE DEL FOOTER: https://colorlib.com/wp/template/bootstrap-footer-01/

const Footer = () => {
  return (
    <footer className="footer-20192 mt-5">
      <div className="site-section">
        <div className="container">
          <div className="cta d-block d-md-flex align-items-center px-5 justify-content-between">
            <div>
              <h2 className="mb-0">Do you have any doubt?</h2>
              <h3 className="text-dark">Send us a message!</h3>
            </div>
            <div className="ml-auto">
              <a href="#" className="btn btn-dark rounded-0 py-3 px-5">
                Contact us
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <a href="#" className="footer-logo">
                LOREM SHOP
              </a>
              <p className="copyright">
                <small>© {new Date().getFullYear()}</small>
              </p>
            </div>
            <div className="col-sm">
              <h3>Something</h3>
              <ul className="list-unstyled links">
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
              </ul>
            </div>
            <div className="col-sm">
              <h3>Something</h3>
              <ul className="list-unstyled links">
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
                <li>
                  <a href="#">Link 3</a>
                </li>
              </ul>
            </div>
            <div className="col-sm">
              <h3>Something</h3>
              <ul className="list-unstyled links">
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Follow us</h3>
              <ul className="list-unstyled social">
                <li>
                  <a href="#">
                    <FaFacebookF className="ic" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter className="ic" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram className="ic" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin className="ic" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <GrMail className="ic" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
