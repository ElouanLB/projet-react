import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import contact from "../assets/img/contact-bg.jpg";
import localisation from "../assets/img/pointeur-de-localisation.png";
import smartphone from "../assets/img/grand-ecran-de-smartphone.png";
import capture from "../assets/img/Capture.JPG";
import "../Css/contact.css"

const Contact = () => {

    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gérer l'envoi du formulaire ici, par exemple en utilisant une API ou une autre méthode
        console.log(formData);
    };

    return (
        <Container fluid>
            <div className='image-overlay' style={{ backgroundImage: `url(${contact})`, backgroundSize: 'cover', backgroundPosition: 'center', margin: 0, display: 'flex' ,justifyContent: 'center' }}>
                <Row className='container-contact' xs={1} md={1}>
                    <Col className='title-container' xs={12} md={12}>
                        <h1>ME CONTACTER</h1>
                        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
                        <hr className='blue-line-title'/>
                    </Col>
                    <Col className='form-container' xs={6} md={6} >
                        <h2><strong>Formulaire de contact</strong></h2>
                        <hr className='blue-line-contact'/>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="nom" className='mb-3'>
                                <Form.Control type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder='Votre nom' required/>
                            </Form.Group>
                            <Form.Group controlId="email" className='mb-3'>
                                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Votre adresse mail' required/>
                            </Form.Group>
                            <Form.Group controlId="telephone" className='mb-3'>
                                <Form.Control type="tel" name="telephone" value={formData.telephone} onChange={handleChange} placeholder='Votre numéro de téléphone' required/>
                            </Form.Group>
                            <Form.Group controlId="sujet" className='mb-3'>
                                <Form.Control type="text" name="sujet" value={formData.sujet} onChange={handleChange} placeholder='Sujet' required/>
                            </Form.Group>
                            <Form.Group controlId="message" className='mb-3'>
                                <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} placeholder='Message' required/>
                            </Form.Group>
                            <div className='text-center'>
                                <Button variant="primary" type="submit">
                                    Envoyer
                                </Button>
                            </div>
                        </Form>
                    </Col>
                    <Col className='form-container' xs={6} md={6}>
                        <h2><strong>Mes coordonées</strong></h2>
                        <hr className='blue-line-contact'/>
                        
                        <div className='logo'>
                            <p><img src={localisation} alt='icone de localisation' /> 40 Rue Laure Diebold, 69009 Lyon, France</p>
                            <p><img src={smartphone} alt="icone de smartphone"/> 06 20 30 40 50</p>
                            <img src={capture} alt="image de la localisation de l'adresse"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Contact;

