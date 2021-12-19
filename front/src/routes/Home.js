
import { Row, Col, Container, Button } from 'react-bootstrap'
import Header from '../components/Header'
import PushOffCanvas from '../components/PushOffCanvas'
import Product from '../components/Product'
import '../styles/Home.css'


export default function Home(){

    return (
        <>
            <PushOffCanvas />

            <div className="pushcanvas-content">
                <Header />

                <main>
                    <Container className="carousel">
                        <div className="carousel-content">
                            <h3>NEW ARRIVAL</h3>
                            <p>Lorem....</p>
                            <Button>Shop Now</Button>
                        </div>
                    </Container>

                    <Container className="categories d-flex justify-content-center align-items-center p-5">
                        <Row className="flex-sm-column flex-md-row gap-3">
                            <Col className="category" style={{backgroundColor: '#555'}}></Col>

                            <Col  className="category"  style={{backgroundColor: 'gray'}}></Col>
                            

                            <Col  className="category"></Col>
                            
                        </Row>

                        <div className="background">
                            
                           
                        </div>
                    </Container>

                    <Container className="products d-flex flex-column justify-content-center my-5 p-5">
                        <header className="header">
                            <h5 className="title">FEATURED PRODUCTS</h5>
                            
                        </header>

                        <Row className="mt-4 gap-3 px-3">
                            {
                                Array(4).fill().map((_, idx) => (
                                    <Col className="m-auto p-0">
                                        <Product />
                                    </Col>
                                ))
                            }
                        </Row>
                        
                    </Container>

                    <Container className="banner d-flex justify-content-center align-items-center p-5">
                            <Row>
                                <Col>
                                
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                    </Container>
                    <Container className="newsletter p-5">
                            <Row className="justify-content-center align-items-center">
                                <Col className="text-center">
                                    <span>Join us</span>
                                    <div>Join us</div>
                                </Col>
                            </Row>
                    </Container>
                    
                    
                </main>
                <footer>
                            
                </footer>
            </div>

        </>
    )
}