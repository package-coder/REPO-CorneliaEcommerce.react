
import { Container, Row, Col } from "react-bootstrap"
import '../styles/FlashBlock.css'

export default function FlashBlock(){

    return (
        <section className="flashblock">
            <Container>
                <Row className="text-white">
                    <Col>
                        <h4>
                            FLASH DEAL
                        </h4>
                    </Col>
                    <Col sm="auto">
                        View All
                    </Col>
                </Row>
                <Row>
                    <Col style={{backgroundColor: 'gray'}}>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}