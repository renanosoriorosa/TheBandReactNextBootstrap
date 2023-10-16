import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

export default function Contact(){
    return(
    <Container id='contact'>
      <h3 className="text-center">Contact</h3>
      <p className="text-center"><em>We love our fans!</em></p>
      <Row className="test">
        <Col sm={4}>
          <p>Fan? Drop a note.</p>
          <p><Icon.GeoAlt/>Chicago, US</p>
          <p><Icon.Phone/> Phone: +00 1515151515</p>
          <p><Icon.Envelope/>Email: mail@mail.com</p>
        </Col>
        <Col sm={8}>
          <Row style={{marginBottom:'10px'}}>
            <Col sm={6}>
              <Form.Group>
                  <Form.Control type="text" className="form-control" id="name" placeholder="Name" required/>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group>
                  <Form.Control type="email" className="form-control" id="email" placeholder="Email" required/>
              </Form.Group>
            </Col>
          </Row>
          <Form.Control id="comments" name="comments" 
              placeholder="Comment" 
              as="textarea" rows={5} 
              style={{marginBottom:'10px'}}/>
          <Row>
            <Col md={12}>
              <Button className=" pull-right" variant="secondary">
                  Send
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
  </Container>
  );
}