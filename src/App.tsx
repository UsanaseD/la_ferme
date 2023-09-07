import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './routes/LoginForm';
import Dashboard from './routes/Dashboard';
import NewPayment from './routes/NewPayment';
import { farmers } from "./utils/database";
// import { MilksArray } from "./types/MilkProductionType";

// import Payments from './components/MainBody';
// import NewPayments from './components/MainBody';
// import Extractions from './components/MainBody';
// import NewExtractions from './components/MainBody';

const App = () => {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard farmers={farmers} />} /> 

          <Route path="/new-payment" element={<NewPayment />} />
          {/* <Route path="/extractions" element={<Dashboard />} /> */}
          {/* <Route path="/new-extraction" element={<Dashboard />} /> */}
        </Routes>
    </Router>
  );
}

export default App;