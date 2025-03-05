"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsFillBuildingsFill, BsInfoSquareFill } from "react-icons/bs";
import { FaHandshake, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const navButtonInfo = [
  { name: "Home", link: "/", icon: <IoMdHome /> },
  // { name: "About", link: "/about", icon: <BsInfoSquareFill /> },
  { name: "Services", link: "/services", icon: <FaHandshake /> },
  { name: "Properties", link: "/properties", icon: <BsFillBuildingsFill /> },
  { name: "Contact", link: "/contact", icon: <FaPhoneAlt /> },
];

const Navbar = () => {
  const [showing, setShowing] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <nav id="navbar" className="page-section">
        <Link href={"/"} className="logo-button">
          <img src="/images/sds-logo.svg" alt="company-logo" />
          <p>SDS Property Group</p>
        </Link>
        <div className="right-side">
          <p id="phone-number">
            <FaPhone className="phone-icon" id="navbar-phone-icon" />
            123-456-7890
          </p>
          <button id="schedule-button" className="gold-fill">
            Book a Consultation
          </button>
          <button
            className="nav-menu-button"
            onClick={() => setShowing((prev) => !prev)}
          >
            <IoMenu />
          </button>
        </div>
      </nav>
      <div className={`side-nav ${showing ? "showing" : ""}`}>
        <nav className="nav-menu">
          {navButtonInfo.map((navButton) => (
            <Link
              href={navButton.link}
              onClick={() => setShowing(false)}
              key={navButton.name}
              id={navButton.name}
              className={`nav-button ${
                navButton.link === pathname ? "active" : ""
              }`}
            >
              <h4>
                <div className="icon">{navButton.icon}</div>
                {navButton.name}
              </h4>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
