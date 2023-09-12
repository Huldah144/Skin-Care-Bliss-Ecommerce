import React from 'react'
import { Container, Button } from 'react-bootstrap'
import BannerImg from '../assets/img/banner.png'
import '../assets/css/Banner.css'

function Banner() {
  return (
    <div className='banner-bg text-center text-sm-start'>
    <Container >
      <div className='d-sm-flex align-items-center justify-content-between'>
        <div>
            <h1 className='banner-title'>Access to all kinds <br /> of skincare products</h1>
            <p className='banner-subtitle'>A single store for all your needs.</p>
            <Button className='btns btn-explore text-capitalize rounded-pill border border-2'>Explore now</Button>
        </div>
        <img src={BannerImg} className='img-fluid' alt="" />
      </div>
    </Container>
    </div>
  )
}

export default Banner
