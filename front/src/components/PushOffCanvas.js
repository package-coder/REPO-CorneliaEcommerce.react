import '../styles/PushOffCanvas.css'
import { Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react'; 

export default function PushOffCanvas({ children }){

    const [canvas, setCanvas] = useState(false);

    const backdropRef = document.querySelector(".pushcanvas-backdrop");


    useEffect(() => {

        backdropRef && (backdropRef.style.display = canvas ? 'block' : 'none')
    
    }, [canvas, backdropRef]);

     
    function toggleCanvas(e){
        setCanvas(!canvas);

        document.querySelector(".pushcanvas").classList.toggle('show');
        document.querySelector(".pushcanvas-content").classList.toggle('show');
    }

    return (
        <div className="pushcanvas">
            <button className="pushcanvas-btn" onClick={toggleCanvas}>
                <i className="bi bi-star-fill font-medium"></i>
            </button>
            <div className="pushcanvas-backdrop" onClick={toggleCanvas}></div>
            <div className="pushcanvas-body p-4">
                <header className="pushcanvas-header p-2">
                    <Container>
                        <Row>
                            <Col>
                                <h5>POPULAR</h5>
                            </Col>
                            <Col className="text-end">
                                <span className="bi bi-x-lg pushcanvas-closeicon"  onClick={toggleCanvas}></span>
                            </Col>
                        </Row>
                    </Container>
                </header>
                <section>
                    <Container>
                        { children }
                    </Container>
                </section>
            </div>
        </div>
    )
}