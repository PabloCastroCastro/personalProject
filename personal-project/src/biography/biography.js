import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './biography.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pablo1 from '../images/pablo1.jpg';

class Biography extends React.Component {

    render() {
        return (
            <Container fluid = 'true' id='biography-container-general'>
                <div className = 'text-center' id='youngPabloImg'>
                    <Image src={pablo1} roundedCircle fluid/>
                </div>
                <div id='youngPabloText'>
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                    <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                    <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>
                </div>
            </Container>
        );
    }
}

export default Biography;