import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import heroBgDesktop from '../assets/img/hero-bg.jpg'; // Image pour les écrans de bureau
import heroBgTablet from '../assets/img/hero-bg-tablette.jpg'; // Image pour les tablettes
import heroBgMobile from '../assets/img/hero-bg-mobile.jpg'; // Image pour les appareils mobiles
import johnabout from '../assets/img/john-doe-about.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Importez le fichier CSS où vous définissez les styles pour la classe .bg
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Row>
        <Col className="position-relative">
          <div className="image-color">
            {/* Image pour les écrans de bureau */}
            <img src={heroBgDesktop} alt="image de développeur" className="responsive-image img-fluid d-none d-lg-block" />
            {/* Image pour les tablettes */}
            <img src={heroBgTablet} alt="image de développeur" className="responsive-image img-fluid d-none d-md-block d-lg-none" />
            {/* Image pour les appareils mobiles */}
            <img src={heroBgMobile} alt="image de développeur" className="responsive-image img-fluid d-block d-md-none" />
            <div className="dark-home"></div> {/* Superposition semi-transparente */}
          </div>
          <div className="text-overlay">
            <h1 className='text-title'>Bonjour, je suis John Doe</h1>
            <h2 className='text-second'>Développeur Web full stack</h2>
            <Button href="#about-section">En savoir plus</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='about-me' id='about-section'>
            <div className='about-place'>
              <Row>
                <Col>
                  <div className='about-text'>
                    <h3>A propos</h3>
                    <hr className='blue-line'/>
                    <p>Passioné par l'informatique et les nouvelles technologies, j'ai suivie une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation
                    , j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
                    <br/>
                    <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>
                    <br/>
                    <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                  </div>
                </Col>
                <Col>
                  <div>
                    <img src={johnabout} alt='image de john doe' className='johnabout-image'></img>
                    <h3>Mes compétences</h3>
                    <p>HTML5 90%</p>
                    <ProgressBar variant='danger' now={90}/>
                    <p>CSS3 80%</p>
                    <ProgressBar variant='info' now={80}/>
                    <p>JAVASCRIPT 70%</p>
                    <ProgressBar variant='warning' now={70}/>
                    <p>PHP 60%</p>
                    <ProgressBar variant='success' now={60}/>
                    <p>REACT 50%</p>
                    <ProgressBar now={50}/>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
