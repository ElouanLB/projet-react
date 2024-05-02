import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../Css/footer.css"

const Footer = () => {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTopBtn").style.display = "block";
        } else {
        document.getElementById("scrollTopBtn").style.display = "none";
        }
    }


    return (
        <Container fluid>
            <Row className='footer-place'>
                <Col xs={6} md={3} className='adress-link'>
                    <article id='title-address'><strong>John Doe</strong></article>
                    <p>40 Rue Laure Diebold</p>
                    <p>69009 Lyon, France</p>
                    <p>Téléphone : 06 20 30 40 50</p>
                    <a href='/profile'><FontAwesomeIcon className='icons' icon={faGithub} /></a>
                    <a href='#'><FontAwesomeIcon className='icons'icon={faTwitter} /></a>
                    <a href='#'><FontAwesomeIcon className='icons' icon={faLinkedin} /></a>
                </Col>
                <Col className='links'>
                    <article id='title-address-2'><strong>Liens utiles</strong></article>
                    <div className='link-with-chevron'>
                        <FontAwesomeIcon className='iconss' icon={faChevronRight} />
                        <a href='/accueil'>Accueil</a>
                    </div>
                    <div className='link-with-chevron'>
                        <FontAwesomeIcon className='iconss' icon={faChevronRight} />
                        <a href='/blog'>A propos</a>
                    </div>
                    <div className='link-with-chevron'>
                        <FontAwesomeIcon className='iconss' icon={faChevronRight} />
                        <a href='/services'>Services</a>
                    </div>
                    <div className='link-with-chevron'>
                        <FontAwesomeIcon className='iconss' icon={faChevronRight} />
                        <a href='/contact'>Me contacter</a>
                    </div>
                    <div className='link-with-chevron'>
                        <FontAwesomeIcon className='iconss' icon={faChevronRight} />
                        <a href='/legal'>Mentions légales</a>
                    </div>
                </Col>
                <Col xs={6} md={3} className='links'>
                <article id='title-address-3'><strong>Mes dernières réalisations</strong></article>
                    <div className='link-with-chevron'>
                        <FontAwesomeIcon className='iconss' icon={faChevronRight} />
                        <a href='/portfolio'>Fresh food</a>
                    </div>
                    <div className='link-with-chevron'>
                        <FontAwesomeIcon className='iconss' icon={faChevronRight} />
                        <a href='/portfolio'>Restaurant Akira</a>
                    </div>
                    <div className='link-with-chevron'>
                        <FontAwesomeIcon className='iconss' icon={faChevronRight} />
                        <a href='/portfolio'>Espace bien-etre</a>
                    </div>
                </Col>
                <Col xs={6} md={3} className='links'>
                    <article id='title-address-4'><strong>Mes derniers articles</strong></article>
                        <div className='link-with-chevron'>
                            <FontAwesomeIcon className='iconss' icon={faChevronRight} />
                            <a href='/blog'>Coder son site en HTML/CSS</a>
                        </div>
                        <div className='link-with-chevron'>
                            <FontAwesomeIcon className='iconss' icon={faChevronRight} />
                            <a href='/blog'>Vendre ses produits sur le web</a>
                        </div>
                        <div className='link-with-chevron'>
                            <FontAwesomeIcon className='iconss' icon={faChevronRight} />
                            <a href='/blog'>Se positionner sur Google</a>
                        </div>
                </Col>
                <Col xs={12} className='copyright'>
                    <p id='copy'>&copy; Designed by John Doe</p>
                    <a id="scrollTopBtn" href="#" onClick={() => { window.scrollTo(0, 0); return false; }}>Retour en haut</a>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Footer;