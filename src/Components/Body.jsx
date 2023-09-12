import React from 'react'
import { Container, Button } from 'react-bootstrap'
import BodyImg from '../assets/img/body.png'
import '../assets/css/Body.css'

function Body() {
  return (
    <div className='body-bg text-center text-sm-start'>
    <Container>
      <div className='d-sm-flex align-items-center'>
         <img src={BodyImg} alt="" className='img-fluid d-none d-sm-block body-img' />
         <img src={BodyImg} alt="" className='img-fluid d-sm-none body-img' />
        <div className='body-caption d-none d-sm-block'>
         <h3 className='body-title'>Skin Bliss Smoothing Serum</h3> <hr />
            <p className='body-subtitle'>Skin Bliss Smoothing Serum is a naturally derived retinol- alternative serum to help smooth the 
              appearance of fine lines and wrinkles while sealing in hydration. Bakuchiol, the key ingredient, is 
              sourced sustainably from the Ayurvedic Bauchi plant.</p>

             
            <Button className='btns btn-learn text-capitalize rounded-pill border border-2'>Learn now</Button>
        </div>

        <div className='body-mobile d-sm-none'>
         <h3 className='body-title'>Skin Bliss Smoothing Serum</h3> 
            <p className='body-subtitle'>Skin Bliss Smoothing Serum is a naturally derived retinol- alternative serum to help smooth the 
              appearance of fine lines and wrinkles while sealing in hydration. Bakuchiol, the key ingredient, is 
              sourced sustainably from the Ayurvedic Bauchi plant.</p>
            <Button className='btns btn-learn text-capitalize rounded-pill border border-2'>Learn now</Button>
        </div>
        
      </div>
    </Container>
    </div>
  )
}

export default Body
