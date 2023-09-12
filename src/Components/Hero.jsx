import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { FaAngleRight } from "react-icons/fa";
import HeroImg from '../assets/img/hero.png'
import '../assets/css/Hero.css'

function Hero() {
  return (
    <div className='hero'>
    <Container className='hero-contain'>
      <div className='hero-bg d-none d-sm-block'>
          <h1 className='hero-text'>New</h1> 
          <h1 className='hero-text summer'>Summer</h1> 
          <h1 className='hero-text collection'>Collection</h1>
      </div>
     <div className='text-center d-none d-sm-block'>
     <img src={HeroImg} alt="" className='img-fluid'/>
     </div>

     <div className='hero-bg mobile d-sm-none'>
          <h1 className='display-1'>New</h1> <br />
          <h1 className='mobile-sum display-1'>Summer</h1> <br />
          <h1 className='mobile-collect display-1'>Collection</h1>
      </div>
     <div className='mobile text-center d-sm-none'>
     <img src={HeroImg} alt="" className='img-fluid'/>
     </div>
     
     <Button className='btns btn-arrow text-capitalize rounded-pill border border-2'>Explore now <i> <FaAngleRight/> </i></Button>
    </Container>
  </div>
  )
}

export default Hero
