import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/img/apple-touch-icon.png";
import '../App.css'; // Importez le fichier CSS où vous définissez les styles pour les liens en majuscules

function AppNavbar() {
    const navStyle = {
        backgroundColor: '#212429', // couleur de fond
    };

    const containerStyle = {
        margin: '0 auto',
    }

    const location = useLocation(); // Récupère le chemin de l'URL actuelle

    console.log("Current pathname:", location.pathname);

    return (
        <div style={containerStyle}>
            <Navbar style={navStyle} variant="dark" expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/accueil"><img src={logo} alt='Logo' className='logo-navbar'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarResponsive" />
                    <Navbar.Collapse id="navbarResponsive">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/accueil" className={location.pathname === '/accueil' ? 'active uppercase' : 'uppercase'}>ACCUEIL</Nav.Link>
                            <Nav.Link as={Link} to="/services" className={location.pathname === '/services' ? 'active uppercase' : 'uppercase'}>SERVICES</Nav.Link>
                            <Nav.Link as={Link} to="/portfolio" className={location.pathname === '/portfolio' ? 'active uppercase' : 'uppercase'}>REALISATIONS</Nav.Link>
                            <Nav.Link as={Link} to="/blog" className={location.pathname === '/blog' ? 'active uppercase' : 'uppercase'}>BLOG</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active uppercase' : 'uppercase'}>ME CONTACTER</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default AppNavbar;
