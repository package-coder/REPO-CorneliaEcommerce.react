
import { Row, Col, Container } from 'react-bootstrap'
import Header from '../components/Header'
import PushOffCanvas from '../components/PushOffCanvas'
import FlashBlock from '../components/FlashBlock'
import Product from '../components/Product'
import '../styles/Home.css'


export default function Home(){

    return (
        <>
            <PushOffCanvas />

            <main className="pushcanvas-content main">
                <Header />

                <section className="d-grid gap-3 gap-xl-4">
                    <section className="carousel">
                    </section>

                    <section className="nav-cards justify-content-center align-items-center">
                        <Row className="m-5 flex-sm-column flex-md-row gap-xl-4 gap-md-3 mx-lg-auto">
                            <Col style={{backgroundColor: '#555'}}></Col>

                            <Col style={{backgroundColor: 'gray'}}></Col>

                            <Col></Col>
                        </Row>
                    </section>

                    <section className="home-products">
                        <div className="d-grid">
                            {
                                Array(9).fill().map((_, idx) => (
                                    <span sm="auto" className="d-flex justify-content-center"><Product /></span>
                                ))
                            }
                        </div>
                    </section>

                    <FlashBlock />

                </section>
                

                


            </main>

        </>
    )
}