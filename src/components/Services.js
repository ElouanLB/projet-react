import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import banner from "../assets/img/banner.jpg";
import bannerTablet from "../assets/img/banner-tablette.jpg";
import bannerMobile from "../assets/img/banner-mobile.jpg";
import fichier from "../assets/img/codage.png";
import ecran from "../assets/img/tv-a-ecran-plat.png";
import seo from "../assets/img/seo (1).png";
import "../Css/service.css";

const Services = () => {
    return (
        <Container fluid className='container-service'>
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
                            <h1>MON OFFRE DE SERVICES</h1>
                            <p>Voici les prestations sur lesquelles je peux intervenir.</p>
                            <hr className='blue-line-service'/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='ux-container'>
                        <img src={ecran} alt="icone d'écran" className="img-fluid ux-image"/>
                        <h2>UX DESIGN</h2>
                        <p>L'<strong>UX Design</strong> est une méthode de conception centré sur l'utilisateur. Son but est d'offrir une exprérience de navigation optimale à l'internaute</p>
                    </Col>
                    <Col className='ux-container'>
                        <img src={fichier} alt='icone de fichier' className="img-fluid ux-image"/>
                        <h2>DEVELOPPEMENT WEB</h2>
                        <p>Le <strong>développement de sites web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</p>
                    </Col>
                    <Col className='ux-container'>
                        <img src={seo} alt='icone de seo' className="img-fluid ux-image"/>
                        <h2>REFERENCEMENT</h2>
                        <p>Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recheche </p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Services;
