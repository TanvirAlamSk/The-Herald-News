import React, { useContext } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser, FaUserAltSlash } from 'react-icons/fa';
import LeftComponent from '../LeftComponent/LeftComponent';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const Header = () => {
    const { user, logout } = useContext(AuthContext)
    // console.log(user)
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary d-flex ">
            <Container>
                <Navbar.Brand href="#home">Herald NEWS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user?.uid ?
                                <div className='d-flex align-items-center' >
                                    <span className='pe-2'>{user.email}</span>
                                    <Image style={{ width: "35px" }} src={user.photoURL} roundedCircle></Image>
                                    <Button className='ms-2' variant="secondary" onClick={logout}>LogOut</Button>
                                </div>

                                :
                                <>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link eventKey={2} href="#memes">
                                        {/* <FaUser></FaUser> */}
                                        <FaUserAltSlash></FaUserAltSlash>
                                    </Nav.Link>
                                </>

                        }

                    </Nav>
                    <div className='d-lg-none'>
                        <LeftComponent></LeftComponent>
                    </div>
                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
};

export default Header;