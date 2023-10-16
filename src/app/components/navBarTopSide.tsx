import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import '../css/navBarTopSide.css'
import * as Icon from 'react-bootstrap-icons';
import { useState, useEffect } from "react";

export default function NavBarTopSide(){
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            const top = section.offsetTop;
            const bottom = top + section.clientHeight;
            if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(index);
            }
        });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <Navbar fixed="top" bg="dark" data-bs-theme="dark">
            <Navbar.Brand style={{marginLeft:'10px'}} href="#home">
                Logo
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="justify-content-end" style={{ marginRight:'10px', width: "100%" }}>   
                    <Nav.Link href="#home" className={activeSection === 0 ? 'active' : ''}>HOME</Nav.Link>
                    <Nav.Link href="#band" className={activeSection === 1 ? 'active' : ''}>BAND</Nav.Link>
                    <Nav.Link href="#tour" className={activeSection === 2 ? 'active' : ''}>TOUR</Nav.Link>
                    <Nav.Link href="#contact" className={activeSection === 3 ? 'active' : ''}>CONTACT</Nav.Link>
                    <NavDropdown title="MORE" id="basic-nav-dropdown" align="end">
                        <NavDropdown.Item href="#">
                            Merchandise
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">
                            Extras
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">
                            Media
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">
                        <Icon.Search size={20} />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}