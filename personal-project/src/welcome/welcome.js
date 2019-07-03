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
            <Container>
                <p>Aqui ira pagina presentacion</p>
            </Container>
        );
    }
}

export default Welcome;