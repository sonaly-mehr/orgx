import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Comapnies from './pages/Comapnies';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/companies" element={<Comapnies />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;