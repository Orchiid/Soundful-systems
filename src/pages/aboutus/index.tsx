import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";
import Frontlayout from "../../layouts/Frontlayout";

const AboutUs = () => {
  return (
    <Fragment>
      <Head>
        <title>About Us</title>
      </Head>
      <Frontlayout>
            <Wrapper className="aboutmain">
          <section className="aboutsection">
            <div className="about-head sound">
              
               <h1 className="fs-50 fw-500 text-capitalize lato " >ABOUT US</h1>
            </div>
            
          </section>
          <section className=" container d-flex flex-column justify-content-lg-center flex-lg-row cards ">
                    <div >
                     <p className=" fs-20">	6 P’s Soundful System is a full service 
                      audio-visual hire company providing a 
                      wide range of event solutions, equipment 
                      and services to clients throughout Nigeria 
                      or as far as the client wishes to fly! 
                      We take the best traits of 
                      an "audio visual" service to offer you a 
                      unique service, complete peace of mind, 
                      and absolute value for money at your event. </p>
                        <p className=" fs-20">At 6 P’s Soundful System we explore 
                      the technological solution to meet your 
                      needs and bring your projects to life. 
                      We oﬀers turnkey solutions. 
                      6 P’s Soundful System take pride in 
                      always offering our clients extremely 
                      high levels of customer service, 
                      good communication, trust, Quality, 
                      technical expertise, creativity, 
                      great value and outstanding 
                      delivery results based on 
                      demanding deadlines.</p>
                      <p className=" fs-20">Whenever our services are needed, 
                        we prefer to work as one team 
                        who are all passionate about delivering 
                        a high standard, cost effective project 
                        that delivers and meets all objectives.
                        “Cheapest is not always the best” 
                        and the same is true for “most expensive”. 
                        Obviously cost plays a major part in 
                        choosing a company to go with and we 
                        believe we offer competitive pricing for 
                        premium services at excellent value. 
                        As a “one-stop-shop” ,
                        we believe we can satisfy and appeal
                        by becoming an inspiration.
                        We love to deal with everyone and anyone so please do give us a call or email and we will be happy to assist with any type of event.
                      </p>
                      
                      
            </div>
           
             <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/images/about3.png" className="d-block" alt="about" />
                </div>
                <div className="carousel-item">
                  <img src="/images/about4.png" className="d-block" alt="about"  />
                </div>
                <div className="carousel-item">
                  <img src="/images/about5.png" className="d-block" alt="about" />
                </div>
                <div className="carousel-item">
                  <img src="/images/about6.png" className="d-block" alt="about" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     </section>
            </Wrapper>
        </Frontlayout>
      </Fragment>           
      )
}
      
export default AboutUs
const Wrapper = styled.div``;