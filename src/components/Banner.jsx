// Libraries
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

// Components
import ItemListContainer from "./ItemListContainer"

const Banner = () => {
  return (
    <>
    <div className="banner">
      <div>
        <h1>WELCOME TO LOREM SHOP</h1>
        <span className="typewriter">
          <h2>Find&nbsp;</h2>
          <Typewriter
            words={["Mugs", "Clothes", "Keyboards", "Books"]}
            loop={0}
            cursor
            cursorStyle=""
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          <h2>&nbsp;for the best programmers</h2>
        </span>
        <div className="d-flex flex-row">
          <a href="#products" className="checkout d-flex align-items-center justify-content-center text-decoration-none">
            View products
          </a>
          <Link to="#" className="contact-button d-flex align-items-center justify-content-center text-decoration-none">
            Contact
          </Link>
        </div>
      </div>
      <span className="ilustration"></span>
    </div>
    <ItemListContainer />
    </>
  );
};

export default Banner;
