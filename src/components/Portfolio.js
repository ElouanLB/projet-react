import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import banner from "../assets/img/banner.jpg";
import bannerTablet from "../assets/img/banner-tablette.jpg";
import bannerMobile from "../assets/img/banner-mobile.jpg";
import bien from "../assets/img/portfolio/espace-bien-etre.jpg";
import fresh from "../assets/img/portfolio/fresh-food.jpg";
import restaurant from "../assets/img/portfolio/restaurant-japonais.jpg";
import Button from 'react-bootstrap/Button';
import "../Css/portfolio.css"

const Portfolio = () => {
    return (
        <Container fluid>
            <div className='portfolio-background'>
                <Row>
                    <Col>
                        <div>
                            <img src={banner} alt='image de bannière' className="responsive-image img-fluid d-none d-lg-block"/>
                            <img src={bannerTablet} alt='image de bannière' className='responsive-image img-fluid d-none d-md-block d-lg-none' />
                            <img src={bannerMobile} alt='image de bannière' className='responsive-image img-fluid d-block d-md-none' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='container-center'>
                        <div className='container-title text-center'>
                            <h1>PORTFOLIO</h1>
                            <p>Voici quelques-unes de mes réalisations.</p>
                            <hr className='blue-line-portfolio'/>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-start justify-content-center">
                    <Col className='container-portfolio'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={fresh} />
                            <Card.Body className='class-body text-center d-flex flex-column align-items-center justify-content-center'>
                                <Card.Title><strong>Fresh food</strong></Card.Title>
                                <Card.Text>
                                Réalisation d'un site avec commande en ligne.
                                </Card.Text>
                            <Button variant="outline-primary">Voir</Button>{' '}
                            
                            </Card.Body>
                            <div className='language'>
                            <p>Site réalisé avec PHP et MySQL</p>
                            </div>
                        </Card>
                    </Col>
                    <Col className='container-portfolio'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={restaurant} />
                            <Card.Body className='text-center d-flex flex-column align-items-center justify-content-center'>
                                <Card.Title><strong>Restaurant Akira</strong></Card.Title>
                                <Card.Text>
                                    Réalisation d'un site vitrine.
                                </Card.Text>
                                <Button variant="outline-primary">Voir</Button>{' '}
                            </Card.Body>
                            <div className='language'>
                            <p>Site réalisé avec WordPress</p>
                            </div>
                        </Card>
                    </Col>
                    <Col className='container-portfolio'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={bien} />
                            <Card.Body className='text-center d-flex flex-column align-items-center justify-content-center'>
                                <Card.Title><strong>Espace bien-etre</strong></Card.Title>
                                <Card.Text>
                                    Réalisation d'un site vitrine pour un patricien de bien-etre.
                                </Card.Text>
                                <Button variant="outline-primary">Voir</Button>{' '}
                            </Card.Body>
                            <div className='language'>
                            <p>Site réalisé en HTML/CSS</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Portfolio;