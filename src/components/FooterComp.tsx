/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const FooterComp = () => {
  return (
    <Footer className="footer container-fluid">
      <div className=" pt-5 pb-5 footer">
        <div className="">
          <div className="navbar-brand flex-grow-1">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="row">
            <div className="col-lg-4 col-xs-12 about-company">
              <h2 className="items">Contact Us</h2>
              <p className="pr-5 text-white-50">6pssoundful@gmail.com </p>
              <p className="pr-5 text-white-50">
                08162913191 <br /> 09044524775{" "}
              </p>

              <p>
                <Link href="#">
                  <i className="fa fa-facebook-square mr-1"></i>
                </Link>
                <Link href="#">
                  <i className="fa fa-linkedin-square"></i>
                </Link>
              </p>
            </div>
            <div className="col-lg-4 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3 items">Address</h4>

              <p className="pr-5 text-white-50">
                Plot 6 Unity Avenue, <br />
                beside Unity Filling Station
                <br />
                G.U. Ake Road.
                <br />
                Eliogbolo Port Harcourt Rivers State.{" "}
              </p>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <h5 className="mt-lg-0 mt-sm-4 items">Location</h5>
              <div className="limage">
                <Link href="https://web.facebook.com/6Pssoundfulsystem/">
                  <a>
                    <img src="/images/Facebook.png" alt="Facebook" />{" "}
                  </a>
                </Link>
                <Link href="https://www.instagram.com/6pssoundful/">
                  <a>
                    <img src="/images/Instagram Circle.png" alt="Instagram" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src="/images/Twitter Circled.png" alt="Twitter" />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <img src="/images/WhatsApp.png" alt="Whatsapp" />
                  </a>
                </Link>
              </div>

              <Link href="/market">
                <a className="text-white-50">Recent Events &gt;&gt;&gt;</a>
              </Link>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className="">
                <small className="text-white-50">
                  © 2021. All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;

const Footer = styled.footer``;
