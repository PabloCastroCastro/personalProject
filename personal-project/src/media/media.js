import React from 'react';
import Container from 'react-bootstrap/Container';
import './media.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Media extends React.Component {

    render() {
        return (
            <Container fluid = "true" id="media-container-general">
                <p>Aqui enlaces a perfiles varios</p>
            </Container>
        );
    }
}

export default Media;