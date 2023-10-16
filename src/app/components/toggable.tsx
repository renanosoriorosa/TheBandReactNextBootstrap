import { Container, Tab, Tabs } from "react-bootstrap";
import '../css/toggable.css'

export default function Toggable(){
    return(
        <Container>
            <h3 className="text-center">From The Blog</h3>
            <Tabs defaultActiveKey="mike"
                className="nav-tabs mb-3">
                <Tab eventKey="mike" title="Mike">
                    <h2>Mike Ross, Manager</h2>
                    <p>Man, we ve been on the road for some time now. Looking forward to lorem ipsum.</p>
                </Tab>
                <Tab eventKey="chandler" title="Chandler">
                    <h2>Chandler Bing, Guitarist</h2>
                    <p>Always a pleasure people! Hope you enjoyed it as much as I did. Could I BE.. any more pleased?</p>
                </Tab>
                <Tab eventKey="peter" title="Peter">
                    <h2>Peter Griffin, Bass player</h2>
                    <p>I mean, sometimes I enjoy the show, but other times I enjoy other things.</p>
                </Tab>
            </Tabs>
        </Container>
    );
}