import React from 'react';
import logo from '../../images/Logo.png';
import './Header.css';
import { Nav, Navbar} from "react-bootstrap";

const Header = () => {
    // console.log(props.courseDetail.title);
    return (
        <div className="container">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Courses</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;