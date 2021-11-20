import React, { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";
import Frontlayout from "../../layouts/Frontlayout";

const Products = () => {
  return (
    <Fragment>
      <Head>
        <title>Products</title>
      </Head>
      <Frontlayout>
            <Wrapper className="productmain">
          <section className="productsection">
            <div className="product-head sound container-fluid">
              
              <h1 className="fs-50 fw-500 text-capitalize lato " >OUR PRODUCTS</h1>
              <p className="  fw-200 ">We have in our fleet only the best high – end equipment from the biggest
              brand on the professional market and our great in-house capability 
              enable us
              to deliver our products for everything from stadium to the 
              very intimate
              concert or conference.
              </p>
            </div>
            
          </section>
          <section className=" container d-flex flex-column justify-content-lg-center flex-lg-row cards ">
                    <div className= "  d-lg-grid productsgrid " >
              {productItems.map((product) => 
              <div key={product.id} >
                  <img src={product.img} style={{width:"18rem", height:"18rem", }} alt="products" />
                  <h3>{product.title}</h3>
    </div>
              )}

            </div>
                    </section>
            </Wrapper>
        </Frontlayout>
      </Fragment>           
      )
}
      
export default Products
const Wrapper = styled.div``;

const productItems = [
  { id: 1, img : "/images/hero3.JPG" , title: 'Sound' },
  { id: 2, img : "/images/hero6.JPG" , title: 'Staging / Rootops (Structures)' },
  { id: 3, img : "/images/image9.png" , title: 'Barriers' },
  { id: 4, img : "/images/image10.png" , title: 'Backline' },
  { id: 5, img : "/images/hero5.jpg" , title: 'Lighting' },
  { id: 6, img : "/images/image11.png" , title: '	Screen/Projectors, Perimeter Light' },
  { id: 7, img : "/images/image12.png" , title: 'Outdoor Fireworks' },
  { id: 8, img : "/images/image13.png" , title: 'Indoor Fireworks' },
  { id: 9, img : "/images/image14.png" , title: 'LED Screen and Smoke machine' }
  
  
];