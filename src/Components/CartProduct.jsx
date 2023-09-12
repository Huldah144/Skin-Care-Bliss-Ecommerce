import React from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from 'react'
import { getProductData } from '../ProductStore'

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

  return (
    <>
       <h4>{productData.title}</h4>
       <p>{quantity} total</p>
        <p>#{(quantity * productData.price).toFixed(2)}</p>
        <Button size='sm' variant='dark text-danger' onClick={() => cart.deleteFromCart(id)}>Remove</Button>
        <hr />
    </>
  )
}

export default CartProduct
