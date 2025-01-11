"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const navButtonInfo = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Properties", link: "/properties" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [showing, setShowing] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <nav id="navbar" className="page-section">
        <Link href={"/"} className="logo-button">
          Logo
        </Link>
        <div className="right-side">
          <h4 id="phone-number">
            <FaPhone className="phone-icon" id="navbar-phone-icon" />
            123-456-7890
          </h4>
          <button id="schedule-button">Book a Consultation</button>
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
              <h4>{navButton.name}</h4>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
