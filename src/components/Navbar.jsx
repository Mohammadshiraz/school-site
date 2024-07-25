import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import "./Navbar.css";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-blue-800 transition">
        <ul className="  flex-col text-center text-xl p-20">
          <li className="text-sm   rounded-full  p-2 hover:bg-blue-600 font-medium">
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="text-sm   rounded-full  p-2 hover:bg-blue-600 font-medium">
            <Link to="about" spy={true} smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="text-sm   rounded-full  p-2 hover:bg-blue-600 font-medium">
            <Link to="academics" spy={true} smooth={true} duration={500}>
              Academics
            </Link>
          </li>
          <li className="text-sm   rounded-full  p-2 hover:bg-blue-600 font-medium">
            <Link to="admission" spy={true} smooth={true} duration={500}>
              Admission
            </Link>
          </li>
          <li className="text-sm   rounded-full  p-2 hover:bg-blue-600 font-medium">
            <Link to="faculty" spy={true} smooth={true} duration={500}>
              Faculty
            </Link>
          </li>
          <li className="text-sm   rounded-full  p-2 hover:bg-blue-600 font-medium">
            <Link to="students" spy={true} smooth={true} duration={500}>
              Students
            </Link>
          </li>
          <li className="text-sm   rounded-full  p-2 hover:bg-blue-600 font-medium">
            <Link to="gallery" spy={true} smooth={true} duration={500}>
              gallery
            </Link>
          </li>
          <li className="text-sm   rounded-full  p-2 hover:bg-blue-600 font-medium">
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
  function clickHandler() {
    alert("hello");
  }
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full text-white px-4 py-2 fixed top-0 left-0 z-10 ${
        sticky ? "bg-blue-800 shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <img className="w-12 rounded-full" src={Logo} alt="Logo" />

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-6 ml-8">
          <li className="text-sm font-medium">
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="text-sm font-medium">
            <Link to="about" spy={true} smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="text-sm font-medium">
            <Link to="academics" spy={true} smooth={true} duration={500}>
              Academics
            </Link>
          </li>
          <li className="text-sm font-medium">
            <Link to="admission" spy={true} smooth={true} duration={500}>
              Admission
            </Link>
          </li>
          <li className="text-sm font-medium">
            <Link to="faculty" spy={true} smooth={true} duration={500}>
              Faculty
            </Link>
          </li>
          <li className="text-sm font-medium">
            <Link to="students" spy={true} smooth={true} duration={500}>
              Students
            </Link>
          </li>
          <li className="text-sm font-medium">
            <Link to="gallery" spy={true} smooth={true} duration={500}>
              Gallery
            </Link>
          </li>
          <li className="text-sm font-medium">
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        {click && content}
        <button
          className="block  text-white text-3xl sm:hidden transition"
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>

        {/* Mobile Menu Icon */}
        {/* <div className="block lg:hidden"> */}
        {/* <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg> */}
        {/* <button
            onClick={clickHandler}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            > */}
        {/* Hamburger menu icon */}
        {/* <path
                className="block lg:hidden"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              /> */}
        {/* Cross icon (hidden by default) */}
        {/* <path
                className="hidden lg:block"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button> */}
        {/* </button> */}
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
