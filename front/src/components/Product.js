import React from "react"
import { Card, Row, Col } from "react-bootstrap"
import '../styles/Product.css'

export default function Product(){

    return (
        <Card>
            <Card.Header>
                <Row>
                    <Col className="d-flex align-items-center">
                        <ul className="labels">
                            <li className="label" style={{ backgroundColor: 'gray' }}>
                                Trend
                            </li>
                            <li className="label" style={{ backgroundColor: 'dodgerblue' }}>
                                Sale!
                            </li>
                        </ul>
                    </Col>

                    <Col className="d-none-xs mx-auto text-end">
                        <i className="bi bi-heart-fill mx-3" style={{ color: 'darkgray' }}></i>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body className="p-0">
            </Card.Body>
           <Card.Footer className="p-0">
                <Card.Text className="card-name mb-1">
                    Product Name
                </Card.Text>

                <Card.Title className="m-0 product-price">$$$</Card.Title>
                <Card.Text className="secondary-price">$$$</Card.Text>
           </Card.Footer>
        </Card>
    )
}