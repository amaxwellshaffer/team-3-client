import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/site/Footer';
import Navigation from './components/site/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
