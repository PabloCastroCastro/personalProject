import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Cabecera from '../cabecera/cabecera'
import './welcome.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends React.Component {

    render() {
        return (
            <Container fluid = 'true' id='welcome-container-general'>
                <div className = "row align-items-end" id="row-text-principal">
                    <h1 className="welcome-principal-text">Hi, I'm Pablo</h1>
                </div>
                <div className = "row align-items-start" id="row-text-second">
                    <h2 className="welcome-second-text">scroll down</h2>
                </div>
            </Container>
        );
    }
}

export default Welcome;