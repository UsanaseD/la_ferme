import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './routes/LoginForm';
import Dashboard from './routes/Dashboard';
import NewPayment from './routes/NewPayment';
import ExtractionDash from './routes/ExtractionDash'; 
import NewExtraction from './routes/NewExtraction';
import { farmers, milks } from "./utils/database"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard farmers={farmers} />} />
        <Route path="/new-payment" element={<NewPayment farmers={farmers} milks={milks} />} />
        <Route path="/extractions" element={<ExtractionDash farmers={farmers} milks={milks} />} />
        <Route path="/new-extraction" element={<NewExtraction farmers={farmers} milks={milks} />} />
      </Routes>
    </Router>
  );
}

export default App;
