//import dependencies and components 
import React from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";

//import assets 
import logo from './logo.svg';
import './App.css';

//import components 
import Home from './pages/Home/Home';



function App() {
  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
