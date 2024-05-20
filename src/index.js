import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import CreatePost from './components/CreatePost';
import TestPost from './components/TestPost';
import Post from './post';
import Post1 from './post1';
import Post2 from './post2';
import Post3 from './post3';
import TestPost2 from './components/TestPost2';
import TestPost3 from './components/TestPost3';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/CreatePost" element={<CreatePost />} />
      <Route path="/TestPost" element={<TestPost />} />
      <Route path="/Post" element={<Post />} />
      <Route path="/Post1" element={<Post1 />} />
      <Route path="/Post2" element={<Post2 />} />
      <Route path="/Post3" element={<Post3 />} />
      <Route path="/TestPost2" element={<TestPost2 />} />
      <Route path="/TestPost3" element={<TestPost3 />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();