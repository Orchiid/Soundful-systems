import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";
import Frontlayout from "../../layouts/Frontlayout";

const AboutUs = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Frontlayout>
            <Wrapper className="contactmain">
          <section className="contactsection">
            <div className="contact-head sound">
              
              <h1 className="fs-50 fw-500 text-capitalize lato " >CONTACT US</h1>
              <p>Feel free to contact us through this platform</p>
            </div>
            <div className=" container d-flex flex-column justify-content-lg-center flex-lg-row adress ">

            <div className="ms-lg-5">
            <div className=" d-flex flex-column flex-lg-row cards">
              <img src="/images/contact1.png" alt="address" />
              <div>
              <h4 className="mt-lg-0 mt-sm-3 items">Address</h4>
              
                <p className="pr-5 text-white-50">Plot 6 Unity Avenue, <br/>
                  beside Unity Filling Station<br/>
                  G.U. Ake Road.<br/>
                  Eliogbolo Port Harcourt Rivers State. </p>
          </div>
            </div>
             <div className=" d-flex flex-column flex-lg-row cards">
              <img src="/images/contact2.png" alt="phone" />
              <div>
              <h4 className="mt-lg-0 mt-sm-3 items">Phone</h4>
                <p className="pr-5 text-white-50">08162913191 <br /> 09044524775 </p>
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
                <form className="container">
                  <div className=" form-group ">
                    <p>Send Message</p>
    {/* <label >Email address</label> */}
    <input type="text" className="form-control"  placeholder=" Full Name"/>
              </div>
                  <div className=" form-group ">
    
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address"/>
    <small id="emailHelp" className="form-text text-muted ">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <input type="text" className="form-control"  placeholder="Type Your Message" />
  </div>
  
  <button type="submit" className="btn  text-light">Send</button>
</form>
            </div>
            
                    </div>
            
            
          </section>
                    
            </Wrapper>
        </Frontlayout>
      </Fragment>           
      )
}
      
export default AboutUs
const Wrapper = styled.div``;