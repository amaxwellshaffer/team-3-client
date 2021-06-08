import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/site/Footer';
import Navigation from './components/site/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';

// console.log(process.env.REACT_APP_API_KEY);

function App() {
  
  
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, []);
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken);
  };
  
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }


  return (
    <div className="App">
      <Router>
        <Navigation updateToken={updateToken} token={sessionToken}/>
      <Footer clickLogout={clearToken} />
      </Router>
    </div>
  );
}

export default App;
