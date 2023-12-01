import { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close the dropdown if it is open and the click is outside of it
      if (isDropdownOpen && !event.target.closest(".dropdownWrapper")) {
        setIsDropdownOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("click", handleOutsideClick);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);
  return (
    <nav>
      <span className="logo">
        LearnWith<span className="name">Shebi</span>
      </span>

      <div className="center">
        <Link to="/">Home</Link>
        <div className="dropdownWrapper">
          <Link
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
          >
            Categories{" "}
            <img
              src="./down-arrow.png"
              alt="arrow-down"
              className="arrowIcon"
            />
          </Link>
          <div className={`dropdown ${isDropdownOpen && "dropdownActive"} `}>
            <Link to="/">JavaScript</Link>
            <Link to="/">Python</Link>
            <Link to="/">Express</Link>
            <Link to="/">Node</Link>
            <Link to="/">Information Technology</Link>
          </div>
        </div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <img src="./search.png" className="searchIcon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
