import React from 'react'
import { Card, Button, Form, Col, Row } from 'react-bootstrap'
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import '../assets/css/Store.css'

function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
  return (
    <Card style={{ width: '13rem'}} className='product-card'>
    <Card.Img variant="top"  src={product.mainImage} />
    <Card.Body>
        <Card.Title className='product-title'>{product.title}</Card.Title>
        <Card.Text className='product-price'>#{product.price}</Card.Text>
        { productQuantity > 0 ? 
        <>
            <Form as={Row}>
                <Form.Label column='true' sm='6' className='fw-bold'>In Cart: {productQuantity}</Form.Label>
                <Col sm='6' className='d-flex'>
                    <Button variant='warning' sm='6' className='mx-2' onClick={() => cart.addOneToCart(product.id)}>+</Button>
                    <Button variant='warning' sm='6' className='mx-2' onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
                </Col>
            </Form>
            <Button variant="danger" className='my-2 text-capitalize' onClick={() => cart.deleteFromCart(product.id)}>Remove from cart</Button>
        </>
        :
        <Button variant='dark' className='text-capitalize rounded-pill border border-2'
                 onClick={() => cart.addOneToCart(product.id)}>
                         Buy Now
         </Button>
        }
       
    </Card.Body>
</Card>
  )
}

export default ProductCard
