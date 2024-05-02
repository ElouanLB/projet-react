import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Legal from "./components/Legal";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header sticky-top">
          <Header />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/accueil" element={<Home />}/>
            <Route exact path="/services" element={<Services />}/>
            <Route exact path="/portfolio" element={<Portfolio />}/>
            <Route exact path="/blog" element={<Blog />}/>
            <Route exact path="/contact" element={<Contact />}/>
            <Route exact path="/legal" element={<Legal />} />
            <Route exact path='/profile' element={<Profile />}/>
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
