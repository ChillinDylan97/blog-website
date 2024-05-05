import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header>
        
    <>
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>

    </>
      </header>
    </div>
  );
}

export default App;
