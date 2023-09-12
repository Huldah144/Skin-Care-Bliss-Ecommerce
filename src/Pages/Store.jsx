import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import '../assets/css/Store.css'

import { productsArray } from '../ProductStore';
import ProductCard from '../Components/ProductCard'


function Store() {
  return (
    <>
      <Banner/>
      <Hero/>

      <div>
      <Container>
      <h1 className='store-title text-center'>popular right now</h1>
      <Row xs={1} md={5} className='g-4'>
      {productsArray.map((product, index) => (
      <Col align="center" key={index}>
        <ProductCard product ={product}/>
        {/* <h3 className='store-subtitle'>{product.title}</h3> */}
      </Col>
    ))};
       
      </Row>
      </Container>
    </div>

    <Body/>
    <Footer/>
    </>
    
  )
}

export default Store
