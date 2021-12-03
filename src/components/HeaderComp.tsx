/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderComp: React.FC = (): JSX.Element => {
  const [menu, setMenu] = useState(false);
  const [time, setTime] = useState(false);
  const router = useRouter();
	const { pathname } = router;
  setTimeout(() => {
    setTime(true);
  });

  return (
    <Header className="header">
      <nav className="header-nav container-fluid  fixed-top d-md-flex align-content-center justify-content-evenly ">
        <div className="navbar-brand ">
          <Link href="/">
            <a>
              <img src="/images/logo.png" alt="logo" />
            </a>
          </Link>
        </div>
        <ul className=" nav d-none d-md-flex align-content-center ">
          {navItems.map((nav, i) => (
            <li className=" nav-item fs-19" key={i}>
              <Link href={nav.name === "Home" ? "/" : (nav?.link as string)}>
                <a className={`nav-link link-dark px-0 ${
										pathname?.includes(nav.link as string) ? "active" : ""
									}`}> {nav.name} </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className=" d-md-flex d-none mt-2 searchs">
          <input
            className="form-control  curve pt-0"
            type="search"
            placeholder="Search for products"
            aria-label="Search"
          />
          <button className="btn btn-warning pt-0" type="submit">
            <i className="fas fa-search mt-2"></i>
          </button>
        </div>

        <i
          className="fas fa-2x fa-bars d-md-none d-flex justify-content-end"
          role="button"
          onClick={() => setMenu(true)}
          style={{ position: "relative", bottom: "2.5rem" }}
        ></i>
      </nav>
      {menu && (
        <div className="mobile-nav d-md-none">
          {time && (
            <div className={`mobile-nav-cover`}>
              <div className="p-2 container d-flex justify-content-start">
                <i
                  className="fas fa-2x fa-times"
                  role="button"
                  onClick={() => {
                    setMenu(false);
                    setTime(false);
                  }}
                ></i>
                <img src="/images/logo.png" alt="logo" />
              </div>
              <ul>
                {navItems.map((nav, i) => (
                  <li className="nav-item" key={i}>
                    <Link
											href={nav.name === "Home" ? "/" : (nav?.link as string)}
										>
                      <a className="nav-link link-dark">{nav.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className=" d-flex mt-5 px-5">
                <input
                  className="form-control me-2 curve p-2"
                  type="search"
                  placeholder="Search for products"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-warning curve pt-0"
                  type="submit"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </Header>
  );
};

export default HeaderComp;

const Header = styled.header`
  .active {
    border-bottom: 2px solid #ff7606;
  }
`;

interface INav {
	name: string;
	link?: string | null;
}

const navItems: INav[] = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/aboutus" },
  { name: "Products", link: "/products" },
  { name: "Events", link: "/events" },
  { name: "Contact Us", link: "/contactus" },
];
