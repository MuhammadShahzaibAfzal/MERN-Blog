import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="left">
        <span className="logo">
          LearnWith<span className="name">Shebi</span>
        </span>
        <span>
          Explore the ever-evolving world of software development through my
          journey of continuous learning—unveiling insights, challenges, and
          victories one post at a time.
        </span>
      </div>
      <div className="center">
        <div>
          <h3>Useful Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
      <div className="center">
        <div>
          <h3>Categories</h3>
          <Link to="/">Javascript</Link>
          <Link to="/">Python</Link>
          <Link to="/">Web Development</Link>
          <Link to="/">App Development</Link>
          <Link to="/">React Native</Link>
        </div>
      </div>

      <div className="right">
        <h3>Join Newsletter</h3>
        <div className="searchBox">
          <input type="text" placeholder="Enter your email" />
          <img src="./send.png" alt="send" className="sendIcon" />
        </div>
        <div className="iconsContainer">
          <Link>
            <img src="./facebook.png" alt="facebook" />
          </Link>
          <Link>
            <img src="./twitter.png" alt="twitter" />
          </Link>
          <Link>
            <img src="./github.png" alt="github" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
