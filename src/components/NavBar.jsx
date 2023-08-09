"use client";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import close from "../assets/icon-close.svg";
import hamburger from "../assets/icon-hamburger.svg";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState("transparent");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
      } else {
        setColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav style={{ backgroundColor: `${color}` }} className="pt-10 pb-4 lg:pt-14 lg:pb-6 fixed left-0 right-0 z-20 ">
      <div className="w-container mx-auto flex justify-between items-center">
        <img src={logo} alt="logo" className="w-[110px] h-[18px]" />

        {/* Tablet, desktop menu  */}
        <ul className="sm:flex hidden w-full lg:w-auto justify-end lg:justify-center items-center flex-1 font-medium text-[13px]">
          {navLinks.map((nav) => (
            <li key={nav.id} className="mr-8 last:mr-0 hover:opacity-50 ease-in duration-300">
              <a href={`#${nav.id}`} target="blank">
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <button className="hidden lg:block ease-in duration-300">Get Started</button>

        {/* Mobile menu  */}
        <div className="sm:hidden flex justify-end items-center">
          {/* Overlay  */}
          <div className={`${!toggle ? "hidden" : "fixed"} top-0 bottom-0 left-0 right-0 bg-overlay`} />
          <div className="w-[25px] h-[25px] object-contain z-20 cursor-pointer">
            <img src={toggle ? close : hamburger} alt="menu" onClick={() => setToggle(!toggle)} />
          </div>

          <div className={`${!toggle ? "hidden" : "flex"} absolute top-[250px] left-0 right-0 bottom-0 flex-col justify-center items-center z-20 sidebar`}>
            <ul className="w-container mx-auto py-10 text-center bg-white font-bold text-[16px] tracking-[-0.29px]">
              {navLinks.map((nav) => (
                <li key={nav.id} className="mb-6 last:mb-0 hover:opacity-50">
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
