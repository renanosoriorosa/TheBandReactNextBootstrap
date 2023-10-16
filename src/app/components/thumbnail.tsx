import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import parisJPG from '../imgs/paris.jpg'
import newyorkJPG from '../imgs/newyork.jpg'
import sanfranJPG from '../imgs/sanfran.jpg'
import Image from "next/image"
import '../css/thumbnail.css'
import { useState } from "react"
import * as Icon from 'react-bootstrap-icons';

export default function Thumbnail(){
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <>
        <Row className="text-center">
            <Col sm={4}>
                <div className="thumbnail">
                <Image className="imageTthumbnail" alt="paris" src={parisJPG}></Image>
                <p><strong>Paris</strong></p>
                <p>Fri. 27 November 2015</p>
                <button onClick={handleShowModal} className="btn">Buy Tickets</button>
                </div>
            </Col>
            <Col sm={4}>
                <div className="thumbnail">
                <Image className="imageTthumbnail" alt="New York" src={newyorkJPG}></Image>
                <p><strong>New York</strong></p>
                <p>Sat. 28 November 2015</p>
                <button onClick={handleShowModal} className="btn">Buy Tickets</button>
                </div>
            </Col>
            <Col sm={4}>
                <div className="thumbnail">
                <Image className="imageTthumbnail" alt="San Francisco" src={sanfranJPG}></Image>
                <p><strong>San Francisco</strong></p>
                <p>Sun. 29 November 2015</p>
                <button onClick={handleShowModal} className="btn">Buy Tickets</button>
                </div>
            </Col>
        </Row>

        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header className="text-center" closeButton>
                <h4> <Icon.BagFill /> Tickets</h4>
            </Modal.Header>
            <Modal.Body>
            <Form role="form">
                <Form.Group>
                    <Form.Label><span className="glyphicon glyphicon-shopping-cart"></span> Tickets, $23 per person</Form.Label>
                    <Form.Control type="number" className="form-control" id="psw" placeholder="How many?"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label><span className="glyphicon glyphicon-user"></span> Send To</Form.Label>
                    <Form.Control type="text" className="form-control" id="usrname" placeholder="Enter email"/>
                </Form.Group>

                <Button className="btn-pay" size="lg" variant="secondary" onClick={handleCloseModal}>
                    <Icon.Check size={40} />
                    Pay
                </Button>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button className="tn btn-block" variant="secondary" onClick={handleCloseModal}>
                <Icon.X size={40} />
                Close
            </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
}