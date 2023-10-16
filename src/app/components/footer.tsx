import { Container } from "react-bootstrap";
import '../css/footer.css';
import * as Icon from 'react-bootstrap-icons';

export default function Footer(){
    return(
        <Container className="footer text-center" fluid>
            <a className="up-arrow" href="#home" data-toggle="tooltip" title="TO TOP">
                <Icon.ChevronCompactUp size={20} />
            </a><br/><br/>
            <p>Bootstrap Theme Made By <a href="https://www.w3schools.com" data-toggle="tooltip" title="Visit w3schools">www.w3schools.com</a></p>
        </Container>
    );
}