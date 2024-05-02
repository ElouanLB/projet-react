import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import banner from "../assets/img/banner.jpg";
import bannerTablet from "../assets/img/banner-tablette.jpg";
import bannerMobile from "../assets/img/banner-mobile.jpg";
import coder from "../assets/img/blog/coder.jpg";
import croissance from "../assets/img/blog/croissance.jpg";
import google from "../assets/img/blog/google.jpg";
import screens from "../assets/img/blog/screens.jpg";
import seo from "../assets/img/blog/seo.jpg";
import technos from "../assets/img/blog/technos.png";
import "../Css/blog.css";
import Button from 'react-bootstrap/Button';

const Blog = () => {
    return (
        <Container fluid>
            <div className='background-color'>
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
                            <h1>Blog</h1>
                            <p>Retrouvez ici quelques articles sur le développement web.</p>
                            <hr className='blue-line-portfolio'/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='blog-container'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={coder} />
                            <Card.Body>
                                <Card.Title><strong>Coder son site en HTML/CSS</strong></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Lire la suite</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='blog-container'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={croissance} />
                            <Card.Body>
                                <Card.Title><strong>Vendre ses produits sur le web</strong></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Lire la suite</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='blog-container'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={google} />
                            <Card.Body>
                                <Card.Title><strong>Se positionner sur Google</strong></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Lire la suite</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="align-items-start justify-content-center">    
                    <Col className='blog-container'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={screens} />
                            <Card.Body>
                                <Card.Title><strong>Coder en responsive design</strong></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Lire la suite</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='blog-container'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={seo} />
                            <Card.Body>
                                <Card.Title><strong>Techniques de référencement</strong></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Lire la suite</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='blog-container'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={technos} />
                            <Card.Body>
                                <Card.Title><strong>Apprendre à coder</strong></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Lire la suite</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Blog;