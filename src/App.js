import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Home from './Components/Home';

// Styling
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={props => (<Home {...props} />)} />
    </Router>
  );
}

export default App;
