
import { 
    Navbar, 
    Nav, 
    Container } from 'react-bootstrap'

import '../styles/Header.css'

export default function Header({ children }){


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="p-3">
                <Container >
                  
                    <Nav>
                        <Navbar.Brand href="/">
                            CORNELIA.
                        </Navbar.Brand>
                    </Nav>

                    <Navbar.Collapse id="aria-navbar-nav" >
                        <Nav className="mx-auto">
                            <Nav.Link className="font-small" href="#features">HOME</Nav.Link>
                            <Nav.Link className="font-small" href="#pricing">SHOP</Nav.Link>
                            <Nav.Link className="font-small" href="#pricing">BLOG</Nav.Link>
                            <Nav.Link className="font-small" href="#pricing">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>


                    <Nav>
                        <Navbar.Toggle aria-controls="aria-navbar-nav"> <span className="bi bi-filter-right" ></span></Navbar.Toggle>
                    </Nav>
                    <Nav className="right-nav d-lg-flex align-items-center">
                        <Nav.Link className="">SEARCH</Nav.Link>
                        <Nav.Link className="">LOGIN</Nav.Link>
                        <Nav.Link className="">CART</Nav.Link>
                    </Nav>
                </Container>
                
            </Navbar>
            
        </>
    )
}