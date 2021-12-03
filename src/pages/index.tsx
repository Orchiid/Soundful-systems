/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";
import Frontlayout from "../layouts/Frontlayout";
import Link from "next/link";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home page</title>
      </Head>
      <Frontlayout>
        <Wrapper className="main">
          <section className="herosection">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="4"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="5"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="6"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="hero-head sound">
                    <h1 className="fs-50 fw-500 text-capitalize lato ">
                      6P&apos;s Soundful System
                    </h1>
                    <p className="lato">
                      Our mission is to provide you, the client,
                      <br />
                      with an unforgettable event experience.
                    </p>
                    {/* <button className=" btn btn-lg fw-700 text-capitalize">
                get started
              </button> */}
                  </div>
                  <div className="hero-right d-md-block d-none">
                    {/* <Image src="/images/hero.png" className=" img-fluid" alt="" width={30} height={30 }/> */}
                  </div>
                  <img
                    src="/images/hero2.jpg"
                    className="d-block w-100"
                    alt="6P's Soundful System"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/hero4.jpg"
                    className="d-block w-100"
                    alt="Staging"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Staging</h5>
                    {/* <p>Some representative placeholder content for the first slide.</p> */}
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/hero.JPG"
                    className="d-block w-100"
                    alt="Lighting and Stage Effects"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Lighting and Stage Effects</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/hero3.JPG"
                    className="d-block w-100"
                    alt="Sound System"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Sound System</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/hero7.png"
                    className="d-block w-100"
                    alt="Special Effects"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Special Effects</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/hero5.jpg"
                    className="d-block w-100"
                    alt="Video and livestreaming"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Video and livestreaming</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/hero6.jpg"
                    className="d-block w-100"
                    alt="Rooftop and structures"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Rooftop and structures</h5>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            {/* <img src="/images/hero2.jpg" alt="" /> */}
          </section>

          <section className="overview  ">
            <section className="overview-left container">
              {/* <div>
                <i className=" fa fa-user-alt"></i>
              </div> */}
              <div className="hero-right">
                <h1 className="fs-50 fw-500 text-capitalize poppins">
                  Who we are
                </h1>
                <p>
                  6 P’s Soundful System is a full service audio-visual hire
                  company providing a wide range of event solutions, equipment
                  and services to clients throughout Nigeria or as far as the
                  client wishes to fly! We take the best traits of an
                  &#8220;audio visual&#8220; service to offer you a unique
                  service, complete peace of mind, and absolute value for money
                  at your event.
                </p>
              </div>
            </section>
            <section className="overview-mid ">
              <div className="hero-left container">
                <h1 className="fs-50 fw-500 text-capitalize poppins">
                  What we do
                </h1>
                <p>
                  At 6 P’s Soundful System we explore the technological
                  solutions <br />
                  to meet your needs and bring your projects to life. We oﬀer
                  turnkey solutions.
                </p>
                <button className=" btn btn-lg  fw-700 text-capitalize ">
                  <Link href="/aboutus">
                    <a>
                      <h5>See More</h5>
                    </a>
                  </Link>
                </button>
              </div>
            </section>
            <section className="overview-right container ">
              {/* <div>
                <i className=" fa fa-server"></i>
              </div> */}
              <div className="hero-right">
                <h1 className="fs-50 fw-500 text-capitalize poppins">
                  What we offer
                </h1>
                <div className=" container d-flex flex-column justify-content-lg-center flex-lg-row cards ">
                  <div className="  d-lg-grid productsgrid ">
                    {offerItems.map((offer) => (
                      <div className="top" key={offer.id}>
                        <figcaption className="top-text fs-18 fw-600 px-3">{offer.title}</figcaption>
                        <figure><img
                          src={offer.img}
                          alt="what we offer"
                          className=" img-fluid"
                        /></figure>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section className="overview-center ">
              <div className="hero-left sound1 container">
                <h1 className="fs-50 fw-500 text-capitalize poppins">
                  Our Products
                </h1>
                <p>
                  We have in our fleet only the best high – end equipment from
                  the biggest brand on the professional market, and our great
                  in-house capability enable us to deliver our products for
                  everything from stadium to the very intimate concert or
                  conference.
                </p>
                <button className=" btn btn-lg  fw-700 text-capitalize ">
                  <Link href="/products">
                    <a>
                      <h5>View our products</h5>
                    </a>
                  </Link>
                </button>
              </div>
            </section>
            <section className="overview-side container  ">
              {/* <div>
                <i className=" fa fa-user-alt"></i>
              </div> */}
              <div className="hero-right overview-side-top  ">
                <h1 className="fs-50 fw-500 text-capitalize poppins">
                  Our Market
                </h1>
                <div className=" d-flex flex-column justify-content-lg-center flex-lg-row cards">
                  <div className="one">
                    <img
                      src="/images/image15.png"
                      alt="	Crusades/Concert
                        /Festivals/Carnivals"
                      className=" img-fluid"
                    />
                    <p> Crusades/Concert /Festivals/Carnivals </p>
                  </div>
                  <div className="two">
                    <img
                      src="/images/image16.png"
                      alt="Corporate Event/
                      Trade show/Reality TV shows"
                    />
                    <p>Corporate Event/ Trade show/Reality TV shows </p>
                  </div>
                  <div className="three">
                    <img
                      src="/images/image17.png"
                      alt="Special event 
                      (Weddings, Birthday Parties, 
                      end of year parties,
                      Fire work shows, etc)"
                    />
                    <p>
                      {" "}
                      Special event (Weddings, Birthday Parties, end of year
                      parties, Fire work shows, etc)
                    </p>
                  </div>
                </div>
                <Link href="/market">
                  <a>
                    <button className=" btn btn-lg  fw-700 text-capitalize see">
                      <h6>See All</h6>
                      <div>
                        <i className=" fa fa-chevron-down"></i>
                      </div>
                    </button>
                  </a>
                </Link>

                {/* For scroll to top */}
                {/* <i className=" fa fa-long-arrow-alt-up move"></i>
                 */}
              </div>
            </section>
          </section>
        </Wrapper>
      </Frontlayout>
    </Fragment>
  );
};

export default HomePage;

const Wrapper = styled.div``;

const offerItems = [
  { id: 1, img: "/images/Good_Quality.png", title: "Quality" },
  { id: 2, img: "/images/Honesty.png", title: "Trust" },
  { id: 3, img: "/images/maintenance.png", title: "Technical expertise" },
  { id: 4, img: "/images/online_support.png", title: "Customer service" },
  { id: 5, img: "/images/Tags.png", title: "Great value" },
  { id: 6, img: "/images/Handshake.png", title: "Good communication" },
  { id: 7, img: "/images/Idea.png", title: "Creativity" },
  {
    id: 8,
    img: "/images/In_transit.png",
    title: "Outstanding delivery results",
  },
];
