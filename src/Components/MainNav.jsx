import React, { useState, useContext } from 'react'
import { Button, Container, Navbar, Nav, Form, Modal, Offcanvas } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import SkinLogo from '../assets/img/skinbliss.png'
import ShopIcon from '../assets/img/shopicon.png'
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';
import '../assets/css/MainNav.css';



function MainNav() {
  const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkout = async () => {
      try {
        const response = await fetch('http://localhost:4000/checkout', {
          method: "POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({items: cart.items})
        });
  
        const { url } = await response.json();
    
        if (url) {
          window.location.assign(url);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        // Handle the error appropriately
        
      }
    };

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  return (
    <>
       {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-nav py-3">
          <Container fluid>
            <Navbar.Brand href="#home"> <img src={SkinLogo} alt="" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" className='canvas-bg'
                >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='nav-text'>
                  Explore:
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#" className='nav-text text-white'>Home</Nav.Link>
                  <Nav.Link href="#" className='nav-text text-white'>About</Nav.Link>
                  <Nav.Link href="#" className='nav-text text-white'>Shop</Nav.Link>
                  <Nav.Link href="#" className='nav-text text-white'>Blog</Nav.Link>
                  
                  
                  {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
                
         <div>
          <Button  className='btns btn-navicon over'><i> <FaSearch/></i> </Button>
          <Button variant='dark' onClick={handleShow} className='btn-navicon fw-bold'> <img src={ShopIcon} alt=""  className='nav-img'/> {productsCount}</Button>
          </div> 
          </Container>
        </Navbar>
        ))}

        <Modal show={show}  onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {productsCount > 0 ? 
                <>
                    <h6>Items In Your Cart:</h6>
                    {cart.items.map((currentProduct, index) => (
                        // <h2>{currentProduct.id}</h2>

                        <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                    ))}

                      <h2>Total: #{cart.getTotalCost().toFixed(2)}</h2>

                      <Button variant='success' onClick={checkout}>Purchase Items</Button>
                </>
              :
                <h2>No Items In Your Cart!!</h2>
              }
            </Modal.Body>
        </Modal>
    </>
  )
}

export default MainNav
