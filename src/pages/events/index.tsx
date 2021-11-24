import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";
import Frontlayout from "../../layouts/Frontlayout";

const Market = () => {
  return (
    <Fragment>
      <Head>
        <title>Market</title>
      </Head>
      <Frontlayout>
            <Wrapper className="marketmain">
          <section className="marketsection">
            <div className="market-head sound container-fluid">
              
              <h1 className="fs-50 fw-500 text-capitalize lato " >OUR MARKET</h1>
              <p className=" fs-10 fw-400 ">We hire out sound, screen, stage and light equipment for various functions 
such as crusades, rallies, conferences, weddings, fashion shows, 
product launches, exhibitions, sporting events, live bands, DJs, 
and corporate events. It is our belief that quality service and equipment 
are essential to our success as our strength lies in our versatility and 
flexibility to meet the demands of an ever changing industry.
              </p>
            </div>
            
          </section>
          <section className=" container d-flex flex-column justify-content-lg-center flex-lg-row cards ">
                    <div className= "  d-lg-grid productsgrid " >
              {marketItems.map((market) => 
              <div key={market.id} >
                  <img src={market.img} style={{width:"18rem", height:"18rem", }} alt="market" />
                  <h3>{market.title}</h3>
    </div>
              )}

            </div>
          </section>
           <section className=" container events">
                    <div >
                     <h3 className=" fs-20">	RECENT EVENTS</h3>
                       
                      
            </div>
           
             <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner ">
                <div className="carousel-item active">
                  <img src="/images/image21.jpg" className="d-block" alt="about" />
                  <div className="carousel-caption d-none d-md-block">
        <h5>Bole Festival</h5>
      </div>
                </div>
                <div className="carousel-item">
                  <img src="/images/image22.png" className="d-block" alt="about" />
                  <div className="carousel-caption d-none d-md-block">
        <h5>Bole Festival</h5>
      </div>
                </div>
                <div className="carousel-item">
                  <img src="/images/image23.png" className="d-block" alt="about" />
                  <div className="carousel-caption d-none d-md-block">
        <h5>Bole Festival</h5>
      </div>
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
      
export default Market
const Wrapper = styled.div``;

const marketItems = [
  { id: 1, img : "/images/image15.png" , title: 'Crusades/Concert/Festivals/Carnivals' },
  { id: 2, img : "/images/image16.png" , title: 'Corporate Event/Trade show/Reality TV shows' },
  { id: 3, img : "/images/image17.png" , title: 'Special event (Weddings, Birthday Parties, end of year parties, Fire work shows, etc)' },
  { id: 4, img : "/images/image18.png" , title: 'Management	' },
  { id: 5, img : "/images/image19.png" , title: 'Sales and Integration/Road shows & Point of Sales activation) event' },
  { id: 6, img : "/images/image20.png" , title: '	Fashion shows/Road shows/show tours etc' },
  
  
];