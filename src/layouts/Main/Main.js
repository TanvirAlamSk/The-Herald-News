import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import RightComponent from '../../components/RightComponent/RightComponent';
import LeftComponent from '../../components/LeftComponent/LeftComponent';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col md={2}><LeftComponent></LeftComponent></Col>
                    <Col className='bg-success' md={7}><Outlet></Outlet></Col>
                    <Col md={3}><RightComponent></RightComponent></Col>
                </Row>
            </Container>

        </div>
    );
};

export default Main;