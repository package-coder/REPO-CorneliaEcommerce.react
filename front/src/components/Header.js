
import { 
    Navbar, 
    Nav, 
    Container } from 'react-bootstrap'

import '../styles/Header.css'

export default function Header({ children }){


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="p-2">
                <Container>
                    <Navbar.Collapse id="aria-navbar-nav">
                        <Nav>
                            <Nav.Link href="#features">HOME</Nav.Link>
                            <Nav.Link href="#pricing">SHOP</Nav.Link>
                            <Nav.Link href="#pricing">BLOG</Nav.Link>
                            <Nav.Link href="#pricing">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                    <Nav className="brand-nav me-auto">
                        <Navbar.Brand href="/">
                            CORNELIA
                        </Navbar.Brand>
                    </Nav>

                    <Nav className="right-nav">
                            <Nav.Link href="#features">LOGIN</Nav.Link>
                            <Nav.Link href="#pricing">CART</Nav.Link>
                            <Nav.Link className="bi bi-search"></Nav.Link>
                    </Nav>

                    <Nav>
                        <Navbar.Toggle aria-controls="aria-navbar-nav"> <span className="bi bi-filter-right" ></span></Navbar.Toggle>
                    </Nav>
                </Container>
                
            </Navbar>
            
        </>
    )
}