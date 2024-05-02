import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import localisation from "../assets/img/pointeur-de-localisation.png";
import smartphone from "../assets/img/grand-ecran-de-smartphone.png";
import enveloppe from "../assets/img/enveloppe.png";
import web from "../assets/img/la-toile (1).png";
import "../Css/legal.css"

const Legal = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <div className='container-title text-center'>
                        <h1>MENTIONS LEGALES</h1>
                        <hr className='blue-line-legal'/>
                    </div>
                </Col>
            </Row>
            <Accordion defaultActiveKey="0" className='accordion'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Editeur du site</Accordion.Header>
                    <Accordion.Body>
                        <div className='accordion-container'>
                            <h2><strong>John Doe</strong></h2>
                            <div className='address-container'>
                                <img src={localisation} alt='logo de localisation' className='logo-accordion'/>
                                <p> 40 Rue Laure Diebold</p>
                            </div>
                            <p>69009 Lyon,France</p>
                            <div className='address-container'>
                                <img src={smartphone} alt='logo de smartphone' className='logo-accordion'/>
                                <a href='tel:0620304050'>06 20 30 40 50</a>
                            </div>
                            <div className='address-container'>
                                <img src= {enveloppe} alt="logo d'enveloppe" className='logo-accordion'/>
                                <a href='mailto:john.doe@gmail.com'>john.doe@gmail.com</a>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Hébergeur</Accordion.Header>
                    <Accordion.Body>
                        <div className='accordion-container'>
                            <div>
                                <h2><strong>Always Data</strong></h2>
                                <p>91 rue du Faubourg Saint Honoré</p>
                                <p>75008 Paris</p>
                            </div>
                            <div className='address-container'>
                                <img src={web} alt='logo de web' className='logo-accordion' />
                                <a href='www.alwaysdata.com'>www.alwaysdata.com</a>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Crédits</Accordion.Header>
                    <Accordion.Body>
                            <div>
                                <h2><strong>Crédits</strong></h2>
                                <p>Site développé par John Doe, étudiant du CEF.</p>
                                <p>Les images libres de droit sont issues du site <a href='https://pixabay.com/fr/'>Pixabay</a>.</p>
                            </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Legal;