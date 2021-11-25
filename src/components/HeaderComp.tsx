import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const HeaderComp = () => {
  const [menu, setMenu] = useState(false);
  const [time, setTime] = useState(false);
  setTimeout(() => {
    setTime(true);
  });
  
  return (
    <Header className="header">
      <nav className="header-nav container-fluid  fixed-top d-md-flex align-content-center justify-content-around ">
        
        <div className="navbar-brand ">
          <Link href="/"><a><img src="/images/logo.png" alt="logo" /></a></Link>
        </div>

        <ul className=" nav d-none d-md-flex align-content-center ">
          {navItems.map((nav, i) => (
            <li className=" nav-item" key={i}>
              <Link href={`/${nav.link}`}>
                <a className="nav-link link-dark"> {nav.name} </a>
              </Link>
             
            </li>
          ))}
        </ul>
 <div className=" d-md-flex d-none searchs">
        <input className="form-control me-2  curve pt-0" type="search" placeholder="Search for products" aria-label="Search" />
        <button className="btn btn-outline-warning curve pt-0" type="submit"><i className="fas fa-search"></i></button>
        </div>

        <i className="fas fa-2x fa-bars d-md-none d-flex justify-content-end " role="button" onClick={() => setMenu(true)} style={{position:"relative", bottom:"2.5rem"}}></i>
              </nav>
      {menu && (
        <div className="mobile-nav d-md-none">
          {time && (
            <div className={`mobile-nav-cover`}>
              <div className="p-2 d-flex justify-content-start">
                <i
                  className="fas fa-2x fa-times me-3"
                  role="button"
                  onClick={() => {
                    setMenu(false);
                    setTime(false);
                  }}
                ></i>
              </div>
              <ul>
                {navItems.map((nav, i) => (
                  <li className="nav-item" key={i}>
                    <Link href={nav.link}>
                      <a className="nav-link link-dark">{nav.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
             <div className=" d-md-flex d-none flex-grow-1">
        <input className="form-control me-2 curve pt-0" type="search" placeholder="Search for products" aria-label="Search" />
        <button className="btn btn-outline-warning curve pt-0" type="submit"><i className="fas fa-search"></i></button>
        </div>
            </div>
          )}
        </div>
      )}
    </Header>
  );
};

export default HeaderComp;

const Header = styled.header``;

const navItems = [
    { name: "Home", link: "/" },
     { name: "About Us", link: "/aboutus" },
  { name: "Products", link: "/products" },
  { name: "Events", link: "/events" },
  { name: "Contact Us", link: "/contactus" },
];

