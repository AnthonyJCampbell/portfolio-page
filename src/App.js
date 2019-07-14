import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={() => (<p>Home</p>)} />
    </Router>
  );
}

export default App;
