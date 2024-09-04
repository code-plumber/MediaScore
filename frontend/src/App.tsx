import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Books from './components/Books';
import Reviews from './components/Reviews';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/movies" Component={Movies} />
        <Route path="/books" Component={Books} />
        <Route path="/reviews" Component={Reviews} />
      </Routes>
    </Router>
  );
}

export default App;
