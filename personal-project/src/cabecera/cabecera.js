import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './cabecera.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cabecera extends React.Component {

    render() {
        return (
            <Container id="headerContainer">
                <Row>
                    <p>Cabecera: {this.props.headername}</p>
                </Row>
            </Container>
        );
    }
}


export default Cabecera;
