/* eslint-disable @next/next/no-img-element */
import React, { Fragment, ReactEventHandler, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import Frontlayout from "../../layouts/Frontlayout";

const AboutUs = () => {
  const [mailerState, setMailerState] = useState({
    name: " ",
    email: " ",
    message: " ",
  });

  function handleStateChange(event: { target: { name: any; value: any; }; }) {
    setMailerState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  const submitEmail = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application /json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ mailerState }),
    })
    .then((res) => res.json())
    .then(async (res) => {
      const resData = await res;
      console.log(resData);
      if (resData.status === "success") {
        alert("Message Sent");
      } else if (resData.status === "fail") {
        alert ("Message failed to send");
      }
    })
    .then(() => {
      setMailerState({
        name: " ",
        email: " ",
        message: " ",
      })
    })
  };

  return (
    <Fragment>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Frontlayout>
        <Wrapper className="contactmain">
          <section className="contactsection">
            <div className="contact-head sound">
              <h1 className="fs-50 fw-500 text-capitalize lato ">CONTACT US</h1>
              <p>Feel free to contact us through this platform</p>
            </div>
            <div className=" container d-flex flex-column justify-content-lg-center flex-lg-row adress ">
              <div className="ms-lg-5">
                <div className=" d-flex flex-column flex-lg-row cards">
                  <img src="/images/contact1.png" alt="address" />
                  <div>
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
                </div>
                <div className=" d-flex flex-column flex-lg-row cards">
                  <img src="/images/contact2.png" alt="phone" />
                  <div>
                    <h4 className="mt-lg-0 mt-sm-3 items">Phone</h4>
                    <p className="pr-5 text-white-50">
                      08162913191 <br /> 09044524775{" "}
                    </p>
                  </div>
                </div>
                <div className=" d-flex flex-column flex-lg-row cards">
                  <img src="/images/contact3.png" alt="email" />
                  <div>
                    <h4 className="mt-lg-0 mt-sm-3 items">Email</h4>
                    <p className="pr-5 text-white-50">6pssoundful@gmail.com </p>
                  </div>
                </div>
              </div>
              <div className=" container message">
                <form className="container" onSubmit={submitEmail}>
                  <div className=" form-group ">
                    <p>Send Message</p>
                    {/* <label >Email address</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" Full Name"
                      onChange={handleStateChange}
                      value={mailerState.name}
                    />
                  </div>
                  <div className=" form-group ">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                      onChange={handleStateChange}
                      value={mailerState.email}
                    />
                    <small id="emailHelp" className="form-text text-muted ">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type Your Message"
                      onChange={handleStateChange}
                      value={mailerState.message}
                    />
                  </div>

                  <button type="submit" className="btn  text-light">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </section>
        </Wrapper>
      </Frontlayout>
    </Fragment>
  );
};

export default AboutUs;
const Wrapper = styled.div``;
