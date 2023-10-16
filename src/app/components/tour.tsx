import { Badge, Container } from 'react-bootstrap'
import '../css/tour.css'
import Thumbnail from './thumbnail'

export default function Tour(){
    return (
        <div className="bg-1" id='tour'>
            <Container>
                <h3 className="text-center">TOUR DATES</h3>
                <p className="text-center">Lorem ipsum we will play you some music.
                    <br/> Remember to book your tickets!
                </p>

                <ul className="list-group" style={{marginBottom: '30px'}}>
                    <li className="list-group-item">September <Badge bg="danger">Sold Out!</Badge></li>
                    <li className="list-group-item">October <Badge bg="danger">Sold Out!</Badge></li>
                    <li className="list-group-item">November <Badge bg="secondary">3</Badge></li>
                </ul>
                
                <Thumbnail/>
            </Container>
        </div>
    );
}